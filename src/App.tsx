import React from 'react';
import MaterialService from './Materials/MaterialService';
import Material from './Materials/Material';
import BowPage from './Pages/BowPage';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

interface Props {

}

interface State {
  materials: Material[]
  selectedMaterial?: string
}

class App extends React.PureComponent<Props, State> {

  public constructor(props: Props) {
    super(props);
    this.state = {
      materials: MaterialService.GetInstance().GetAll()
    };

  }

  public render(): JSX.Element {
    return (
      <Router>
        <Switch>
          <Route path="/bow">
            <BowPage allMaterials={this.state.materials}/>
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
