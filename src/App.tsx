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
import HeadList from './PartViewer/HeadList';
import HeadPart from './Materials/Parts/HeadPart';
import ShaftList from './PartViewer/ShaftList';
import ShaftPart from './Materials/Parts/ShaftPart';
import PickaxeBuilder from './ToolForge/PickaxeBuilder';
import HammerBuilder from './ToolForge/HammerBuilder';
import styles from './App.module.css';
import MaterialList from './PartViewer/MaterialList';

require("typeface-minecraft");

interface Props {

}

interface State {
  allMaterials: Material[],
  activeMaterials: Material[],
}

class App extends React.PureComponent<Props, State> {

  public constructor(props: Props) {
    super(props);

    this.state = {
      allMaterials: MaterialService.GetInstance().GetAll(),
      activeMaterials: MaterialService.GetInstance().GetAll(),
    };
  }

  private toggleMaterial(material:Material) {
    material.Hidden = !material.Hidden;
    const activeMaterials:Material[] = Array.from(this.state.activeMaterials);

    if(!material.Hidden) {
      activeMaterials.push(material);
    } else {
      activeMaterials.splice(activeMaterials.indexOf(material), 1);
    }
    
    this.setState({
      ...this.state,
      activeMaterials 
    });
    
  }

  public render(): JSX.Element {
    const headParts = this.state.activeMaterials.filter(m => m.HeadPart).map(m => m.HeadPart as HeadPart);
    const handleParts = this.state.activeMaterials.filter(m => m.HandlePart).map(m => m.HandlePart as HandlePart);
    return (
      <div className={styles.app}>
      <Router>
        <Header />
        <div>
        <Switch>
          <Route path="/materials">
            <MaterialList materials={this.state.allMaterials} toggleMaterial={this.toggleMaterial.bind(this)}/>
          </Route>
          <Route path="/bowLimbs">
            <BowPartList bowParts={this.state.activeMaterials.filter(m => m.BowPart).map(m => m.BowPart as BowPart)}/>
          </Route>
          <Route path="/bowStrings">
            <BowStringList bowStringParts={this.state.activeMaterials.filter(m => m.BowStringPart).map(m => m.BowStringPart as BowStringPart)}/>
          </Route>
          <Route path="/extras">
            <ExtraList extraParts={this.state.activeMaterials.filter(m => m.ExtraPart).map(m => m.ExtraPart as ExtraPart)}/>
          </Route>
          <Route path="/fletchings">
            <FletchingList fletchingParts={this.state.activeMaterials.filter(m => m.FletchingPart).map(m => m.FletchingPart as FletchingPart)}/>
          </Route>
          <Route path="/handles">
            <HandleList handleParts={handleParts}/>
          </Route>
          <Route path="/heads">
            <HeadList headParts={headParts}/>
          </Route>
          <Route path="/shafts">
            <ShaftList shaftParts={this.state.activeMaterials.filter(m => m.ShaftPart).map(m => m.ShaftPart as ShaftPart)}/>
          </Route>
          <Route path="/toolforge" exact={true}>
            <PickaxeBuilder
              headParts={headParts}
              handleParts={handleParts}
              bindingParts={this.state.activeMaterials.filter(m => m.ExtraPart).map(m => m.ExtraPart as ExtraPart)}
              />
          </Route>
          <Route path="/toolforge/hammer">
            <HammerBuilder
              headParts={headParts}
              handleParts={handleParts}
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
