import React from 'react';
import MaterialService from './Materials/MaterialService';
import Material from './Materials/Material';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {Header} from './Header';
import BowPart from './Materials/Parts/BowPart';
import BowPartList from './PartViewer/BowPartList';

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
            <BowPartList bowParts={this.state.materials.filter(m => m.BowPart).map(m => m.BowPart as BowPart)}/>
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
