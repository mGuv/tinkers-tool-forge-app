import React from 'react';
import MaterialService from './Materials/MaterialService';
import Material from './Materials/Material';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {Header} from './Header';
import BowPart from './Materials/Parts/BowPart';
import BowPartList from './PartViewer/BowPartList';
import BowStringList from './PartViewer/BowStringList';
import BowStringPart from './Materials/Parts/BowStringPart';
import ExtraList from './PartViewer/ExtraList';
import ExtraPart from './Materials/Parts/ExtraPart';
import FletchingList from './PartViewer/FletchingList';
import FletchingPart from './Materials/Parts/FletchingPart';
import HandleList from './PartViewer/HandleList';
import HandlePart from './Materials/Parts/HandlePart';
import {columns as HeadColumns, dataTransformer as HeadDataTransformer} from './PartViewer/HeadList';
import HeadPart from './Materials/Parts/HeadPart';
import ShaftList from './PartViewer/ShaftList';
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
  activeBowParts: BowPart[],
  activeBowStringParts: BowStringPart[],
  activeExtraParts: ExtraPart[],
  activeFletchlingParts: FletchingPart[],
  activeHandleParts: HandlePart[],
  activeHeadParts:HeadPart[],
  activeShaftParts:ShaftPart[],
  activeParts: { [key: string]: Set<Part> }
}

class App extends React.PureComponent<Props, State> {

  public constructor(props: Props) {
    super(props);

    this.state = {
      allMaterials: MaterialService.GetInstance().GetAll(),
      activeMaterials: MaterialService.GetInstance().GetAll(),
      activeBowParts: [],
      activeBowStringParts: [],
      activeExtraParts: [],
      activeFletchlingParts: [],
      activeHandleParts: [],
      activeHeadParts: [],
      activeShaftParts: [],
      activeParts: {}
    };
  }

  private addBowPart(bowPart:BowPart) {
    if(bowPart.Included) {
      return;
    }

    bowPart.Included = true;
    const activeBowParts:BowPart[] = Array.from(this.state.activeBowParts);
    activeBowParts.push(bowPart);
    this.setState({
      activeBowParts
    });
  }

  private removeHeadPart(headPart:HeadPart) {
    if(!headPart.Included) {
      return;
    }

    headPart.Included = false;
    const activeHeadParts:HeadPart[] = Array.from(this.state.activeHeadParts);
    activeHeadParts.splice(activeHeadParts.indexOf(headPart), 1);
    this.setState({
      activeHeadParts
    });
  }

  private addHeadPart(headPart:HeadPart) {
    if(headPart.Included) {
      return;
    }

    headPart.Included = true;
    const activeHeadParts:HeadPart[] = Array.from(this.state.activeHeadParts);
    activeHeadParts.push(headPart);
    this.setState({
      activeHeadParts
    });
  }

  private removeBowPart(bowPart:BowPart) {
    if(!bowPart.Included) {
      return;
    }

    bowPart.Included = false;
    const activeBowParts:BowPart[] = Array.from(this.state.activeBowParts);
    activeBowParts.splice(activeBowParts.indexOf(bowPart), 1);
    this.setState({
      activeBowParts
    });
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
            <BowPartList addBowPart={this.addBowPart.bind(this)} removeBowPart={this.removeBowPart.bind(this)} hideMaterial={this.hideMaterial.bind(this)} bowParts={bowParts}/>
          </Route>
          <Route path="/bowStrings">
            <BowStringList hideMaterial={this.hideMaterial.bind(this)} bowStringParts={bowStringParts}/>
          </Route>
          <Route path="/extras">
            <ExtraList hideMaterial={this.hideMaterial.bind(this)} extraParts={extraParts}/>
          </Route>
          <Route path="/fletchings">
            <FletchingList hideMaterial={this.hideMaterial.bind(this)} fletchingParts={fletchingParts}/>
          </Route>
          <Route path="/handles">
            <HandleList hideMaterial={this.hideMaterial.bind(this)} handleParts={handleParts}/>
          </Route>
          <Route path="/heads">
            <GenericList
                addPart={this.addPart.bind(this, "head")} removePart={this.removePart.bind(this, "head")} hideMaterial={this.hideMaterial.bind(this)} parts={headParts} includedParts={this.state.activeParts["head"]}
                columnInfo={HeadColumns}
                dataTransformer={HeadDataTransformer}
            />
            {/* <HeadList addPart={this.addPart.bind(this, "head")} removePart={this.removePart.bind(this, "head")} hideMaterial={this.hideMaterial.bind(this)} parts={headParts} includedParts={this.state.activeParts["head"]}/> */}
          </Route>
          <Route path="/shafts">
            <ShaftList hideMaterial={this.hideMaterial.bind(this)} shaftParts={shaftParts}/>
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
