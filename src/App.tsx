import React from 'react';
import MaterialService from './Materials/MaterialService';
import Material from './Materials/Material';
import BowPage from './Pages/BowPage';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import HeadPage from './Pages/HeadPage';
import {Header} from './Header';
import ToolBuilderPage from './Pages/ToolBuilderPage';
import BowStringPage from './Pages/BowStringPage';
import ExtraPage from './Pages/ExtraPage';
import FlethcingPage from './Pages/FletchingPage';
import HandlePage from './Pages/HandlePage';
import ShaftPage from './Pages/ShaftPage';

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

  public render(): JSX.Element {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/bow">
            <BowPage allMaterials={this.state.materials}/>
          </Route>
          <Route path="/bowstring">
            <BowStringPage allMaterials={this.state.materials}/>
          </Route>
          <Route path="/extra">
            <ExtraPage allMaterials={this.state.materials}/>
          </Route>
          <Route path="/fletching">
            <FlethcingPage allMaterials={this.state.materials}/>
          </Route>
          <Route path="/handle">
            <HandlePage allMaterials={this.state.materials}/>
          </Route>
          <Route path="/head">
            <HeadPage allMaterials={this.state.materials}/>
          </Route>
          <Route path="/shaft">
            <ShaftPage allMaterials={this.state.materials}/>
          </Route>
          <Route path="/tool-builder">
            <ToolBuilderPage allMaterials={this.state.materials}/>
          </Route>
          <Route path="/">
            <Redirect to="/bow"/>
          </Route>
        </Switch>
      </Router>
      
    );
  }
}

export default App;
