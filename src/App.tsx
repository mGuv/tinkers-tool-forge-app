import React from 'react';
import MaterialService from './Materials/MaterialService';
import Material from './Materials/Material';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {Header} from './Header';
import BowPart from './Materials/Parts/BowPart';
import {columns as BowColumns, dataTransformer as BowDataTransformer} from './PartViewer/BowPartList';
import {columns as BowStringColumns, dataTransformer as BowStringDataTransformer} from './PartViewer/BowStringList';
import BowStringPart from './Materials/Parts/BowStringPart';
import {columns as ExtraColumns, dataTransformer as ExtraDataTransformer} from './PartViewer/ExtraList';
import ExtraPart from './Materials/Parts/ExtraPart';
import {columns as FletchingColumns, dataTransformer as FletchingDataTransformer} from './PartViewer/FletchingList';
import FletchingPart from './Materials/Parts/FletchingPart';
import {columns as HandleColumns, dataTransformer as HandleDataTransformer} from './PartViewer/HandleList';
import HandlePart from './Materials/Parts/HandlePart';
import {columns as HeadColumns, dataTransformer as HeadDataTransformer} from './PartViewer/HeadList';
import HeadPart from './Materials/Parts/HeadPart';
import {columns as ShaftColumns, dataTransformer as ShaftDataTransformer} from './PartViewer/ShaftList';
import ShaftPart from './Materials/Parts/ShaftPart';
import styles from './App.module.css';
import Toolforge from './ToolForge/Toolforge';
import MaterialList from './PartViewer/MaterialList';
import Part from './Materials/Parts/Part';
import GenericList from './PartViewer/GenericList';

require("typeface-minecraft");

interface Props {

}

interface State {
  allMaterials: Material[],
  activeMaterials: Material[],
  activeParts: { [key: string]: Set<Part> }
}

class App extends React.PureComponent<Props, State> {

  public constructor(props: Props) {
    super(props);

    this.state = {
      allMaterials: MaterialService.GetInstance().GetAll(),
      activeMaterials: MaterialService.GetInstance().GetAll(),
      activeParts: {}
    };
  }

  private addPart<TPart>(key: string, part: Part) {
    const set = this.state.activeParts[key] || new Set();
    const newSet = new Set(set.add(part))
    const clone = {...this.state.activeParts, [key]: newSet}
    this.setState({activeParts: clone});
  }

  private removePart(key: string, part: Part) {
    const set = this.state.activeParts[key] || new Set();
    set.delete(part);
    const newSet = new Set(set)
    const clone = {...this.state.activeParts, [key]: newSet}
    this.setState({activeParts: clone});
  }

  private hideMaterial(material:Material) {
    if(material.Hidden) {
      return;
    }

    material.Hidden = true;
    const activeMaterials:Material[] = Array.from(this.state.activeMaterials);
    activeMaterials.splice(activeMaterials.indexOf(material), 1);
    this.setState({
      activeMaterials
    });
  }

  private showMaterial(material:Material) {
    if(!material.Hidden) {
      return;
    }

    material.Hidden = false;
    const activeMaterials:Material[] = Array.from(this.state.activeMaterials);
    activeMaterials.push(material);
    this.setState({
      activeMaterials
    });
  }

  private showAllMaterials() {
    const activeMaterials:Material[] = Array.from(this.state.allMaterials);
    activeMaterials.forEach(material => material.Hidden = false);

    this.setState({
      activeMaterials
    });
  }

  private hideAllMaterials() {
    this.state.activeMaterials.forEach(material => material.Hidden = true);

    this.setState({
      activeMaterials: []
    });
  }

  public render(): JSX.Element {
    const headParts = this.state.activeMaterials.filter(m => m.HeadPart).map(m => m.HeadPart as HeadPart);
    const handleParts = this.state.activeMaterials.filter(m => m.HandlePart).map(m => m.HandlePart as HandlePart);
    const bowParts = this.state.activeMaterials.filter(m => m.BowPart).map(m => m.BowPart as BowPart);
    const bowStringParts = this.state.activeMaterials.filter(m => m.BowStringPart).map(m => m.BowStringPart as BowStringPart);
    const extraParts = this.state.activeMaterials.filter(m => m.ExtraPart).map(m => m.ExtraPart as ExtraPart);
    const fletchingParts = this.state.activeMaterials.filter(m => m.FletchingPart).map(m => m.FletchingPart as FletchingPart);
    const shaftParts = this.state.activeMaterials.filter(m => m.ShaftPart).map(m => m.ShaftPart as ShaftPart);
    return (
      <div className={styles.app}>
      <Router>
        <Header />
        <div className={styles.appBody}>
        <Switch>
          <Route path="/materials">
            <MaterialList showMaterial={this.showMaterial.bind(this)} hideMaterial={this.hideMaterial.bind(this)} materials={this.state.allMaterials} hideAll={this.hideAllMaterials.bind(this)} showAll={this.showAllMaterials.bind(this)}/>
          </Route>
          <Route path="/bowLimbs">
            <GenericList
                addPart={this.addPart.bind(this, "bow")} removePart={this.removePart.bind(this, "bow")} hideMaterial={this.hideMaterial.bind(this)} parts={bowParts} includedParts={this.state.activeParts["bow"]}
                columnInfo={BowColumns}
                dataTransformer={BowDataTransformer}
            />
          </Route>
          <Route path="/bowStrings">
            <GenericList
                addPart={this.addPart.bind(this, "bowString")} removePart={this.removePart.bind(this, "bowString")} hideMaterial={this.hideMaterial.bind(this)} parts={bowStringParts} includedParts={this.state.activeParts["bowString"]}
                columnInfo={BowStringColumns}
                dataTransformer={BowStringDataTransformer}
            />
          </Route>
          <Route path="/extras">
            <GenericList
                addPart={this.addPart.bind(this, "extra")} removePart={this.removePart.bind(this, "extra")} hideMaterial={this.hideMaterial.bind(this)} parts={extraParts} includedParts={this.state.activeParts["extra"]}
                columnInfo={ExtraColumns}
                dataTransformer={ExtraDataTransformer}
            />
          </Route>
          <Route path="/fletchings">
            <GenericList
                addPart={this.addPart.bind(this, "fletching")} removePart={this.removePart.bind(this, "fletching")} hideMaterial={this.hideMaterial.bind(this)} parts={fletchingParts} includedParts={this.state.activeParts["fletching"]}
                columnInfo={FletchingColumns}
                dataTransformer={FletchingDataTransformer}
            />
          </Route>
          <Route path="/handles">
            <GenericList
                addPart={this.addPart.bind(this, "handle")} removePart={this.removePart.bind(this, "handle")} hideMaterial={this.hideMaterial.bind(this)} parts={handleParts} includedParts={this.state.activeParts["handle"]}
                columnInfo={HandleColumns}
                dataTransformer={HandleDataTransformer}
            />
          </Route>
          <Route path="/heads">
            <GenericList
                addPart={this.addPart.bind(this, "head")} removePart={this.removePart.bind(this, "head")} hideMaterial={this.hideMaterial.bind(this)} parts={headParts} includedParts={this.state.activeParts["head"]}
                columnInfo={HeadColumns}
                dataTransformer={HeadDataTransformer}
            />
          </Route>
          <Route path="/shafts">
            <GenericList
                addPart={this.addPart.bind(this, "shaft")} removePart={this.removePart.bind(this, "shaft")} hideMaterial={this.hideMaterial.bind(this)} parts={shaftParts} includedParts={this.state.activeParts["shaft"]}
                columnInfo={ShaftColumns}
                dataTransformer={ShaftDataTransformer}
            />
          </Route>
          <Route path="/toolforge">
            <Toolforge
              partList={{
                head: this.state.activeParts["head"] ? Array.from(this.state.activeParts["head"]?.values()) : [],
                handle: handleParts,
                bow: bowParts,
                bowstring: bowStringParts,
                extra: extraParts,
                fletching: fletchingParts,
                shaft: shaftParts,
              }}
              />
          </Route>
          <Route path="/">
            <Redirect to="/materials"/>
          </Route>
        </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
