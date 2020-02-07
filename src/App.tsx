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
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/bowLimbs">
            <BowPartList hideMaterial={this.hideMaterial.bind(this)} bowParts={this.state.materials.filter(m => m.BowPart).map(m => m.BowPart as BowPart)}/>
          </Route>
          <Route path="/bowStrings">
            <BowStringList hideMaterial={this.hideMaterial.bind(this)} bowStringParts={this.state.materials.filter(m => m.BowStringPart).map(m => m.BowStringPart as BowStringPart)}/>
          </Route>
          <Route path="/extras">
            <ExtraList hideMaterial={this.hideMaterial.bind(this)} extraParts={this.state.materials.filter(m => m.ExtraPart).map(m => m.ExtraPart as ExtraPart)}/>
          </Route>
          <Route path="/fletchings">
            <FletchingList hideMaterial={this.hideMaterial.bind(this)} fletchingParts={this.state.materials.filter(m => m.FletchingPart).map(m => m.FletchingPart as FletchingPart)}/>
          </Route>
          <Route path="/handles">
            <HandleList hideMaterial={this.hideMaterial.bind(this)} handleParts={this.state.materials.filter(m => m.HandlePart).map(m => m.HandlePart as HandlePart)}/>
          </Route>
          <Route path="/heads">
            <HeadList hideMaterial={this.hideMaterial.bind(this)} headParts={this.state.materials.filter(m => m.HeadPart).map(m => m.HeadPart as HeadPart)}/>
          </Route>
          <Route path="/shafts">
            <ShaftList hideMaterial={this.hideMaterial.bind(this)} shaftParts={this.state.materials.filter(m => m.ShaftPart).map(m => m.ShaftPart as ShaftPart)}/>
          </Route>
          <Route path="/">
            <Redirect to="/bowLimbs"/>
          </Route>
        </Switch>
      </Router>
      
    );
  }
}

export default App;
