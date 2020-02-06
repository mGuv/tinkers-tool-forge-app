import React from 'react';
import MaterialService from './Materials/MaterialService';
import Material from './Materials/Material';
import BowPage from './Pages/BowPage';
import PageProps from './Pages/PageProps';
import HeadPage from './Pages/HeadPage';

interface Props {

}

interface State {
  materials: Material[],
  selectedPage: React.ComponentType<PageProps>
}

class App extends React.PureComponent<Props, State> {

  private pages:React.ComponentType<PageProps>[];

  public constructor(props: Props) {
    super(props);
    this.pages=[
      BowPage,
      HeadPage
    ];
    this.state = {
      materials: MaterialService.GetInstance().GetAll(),
      selectedPage: this.pages[0]
    };

  }

  public render(): JSX.Element {
    return (
      <div>
        {
          <this.state.selectedPage allMaterials={this.state.materials}/>
        }
      </div>
    );
  }
}

export default App;
