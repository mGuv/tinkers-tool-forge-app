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
import Toolforge from './ToolForge/Toolforge';

require("typeface-minecraft");

interface Props {

}

interface State {
  materials: Material[],
}

class App extends React.PureComponent<Props, State> {

  public constructor(props: Props) {
    super(props);

    this.state = {
      materials: MaterialService.GetInstance().GetAll(),
    };
  }

  private hideMaterial(material:Material) {
    const materials:Material[] = Array.from(this.state.materials);
    materials.splice(materials.indexOf(material), 1);

    this.setState({
      ...this.state,
      materials 
    });
  }

  public render(): JSX.Element {
    const headParts = this.state.materials.filter(m => m.HeadPart).map(m => m.HeadPart as HeadPart);
    const handleParts = this.state.materials.filter(m => m.HandlePart).map(m => m.HandlePart as HandlePart);
    const bowParts = this.state.materials.filter(m => m.BowPart).map(m => m.BowPart as BowPart);
    const bowStringParts = this.state.materials.filter(m => m.BowStringPart).map(m => m.BowStringPart as BowStringPart);
    const extraParts = this.state.materials.filter(m => m.ExtraPart).map(m => m.ExtraPart as ExtraPart);
    const fletchingParts = this.state.materials.filter(m => m.FletchingPart).map(m => m.FletchingPart as FletchingPart);
    const shaftParts = this.state.materials.filter(m => m.ShaftPart).map(m => m.ShaftPart as ShaftPart);
    return (
      <div className={styles.app}>
      <Router>
        <Header />
        <div className={styles.appBody}>
        <Switch>
          <Route path="/bowLimbs">
            <BowPartList hideMaterial={this.hideMaterial.bind(this)} bowParts={bowParts}/>
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
            <HeadList hideMaterial={this.hideMaterial.bind(this)} headParts={headParts}/>
          </Route>
          <Route path="/shafts">
            <ShaftList hideMaterial={this.hideMaterial.bind(this)} shaftParts={shaftParts}/>
          </Route>
          <Route path="/toolforge" exact={true}>
            <Toolforge
              headParts={headParts}
              handleParts={handleParts}
              bowParts={bowParts}
              bowStringParts={bowStringParts}
              extraParts={extraParts}
              fletchingParts={fletchingParts}
              shaftParts={shaftParts}
              />
          </Route>
          <Route path="/toolforge/pickaxe" exact={true}>
            <PickaxeBuilder
              headParts={headParts}
              handleParts={handleParts}
              bindingParts={extraParts}
              />
          </Route>
          <Route path="/toolforge/hammer">
            <HammerBuilder
              headParts={headParts}
              handleParts={handleParts}
              />
          </Route>
          <Route path="/">
            <Redirect to="/bowLimbs"/>
          </Route>
        </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
