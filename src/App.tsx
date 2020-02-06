import React from 'react';
import MaterialService from './Materials/MaterialService';
import Material from './Materials/Material';
import BowPage from './Pages/BowPage';

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

  private sortByModifier()
  {
    let mats:Material[] = Array.from(this.state.materials);
    mats = mats.sort((a:Material, b:Material)=>{
      if(!a.Handle && !b.Handle) {
        return 0;
      }

      if(!b.Handle) {
        return -1;
      }

      if(!a.Handle) {
        return 1;
      }


        if(a.Handle.Modifier === b.Handle.Modifier) {
          return 0;
        }
        return (a.Handle.Modifier < b.Handle.Modifier) ? 1 : -1;
    });

    console.log("setting state");
    this.setState({
      ...this.state,
      materials: mats
    });
  }

  public render(): JSX.Element {
    return (
      <div>
        <BowPage allMaterials={this.state.materials}/>
        {/* <h1>Bow Stats</h1>
        {
          <table>
          <thead>
            <tr>
              <th>Material</th>
              <th>Draw Speed</th>
              <th>Bonus Damage</th>
              <th>Range</th>
            </tr>
          </thead>
          <tbody>
            {
            this.state.materials.map((material, index) => {
                if(material.Bow) {
                  return (<tr>
                    <td>{material.Name}</td>
                    <td>{material.Bow.DrawSpeed}</td>
                    <td>{material.Bow.BonusDamage}</td>
                    <td>{material.Bow.Range}</td>
                  </tr>);
                }
            })
          }
          </tbody>
          </table>
        }
        <h1>Extra Stats</h1>
        {
          <table>
          <thead>
            <tr>
              <th>Material</th>
              <th>Bonus Durability</th>
            </tr>
          </thead>
          <tbody>
            {
            this.state.materials.map((material, index) => {
                if(material.Extra) {
                  return (<tr>
                    <td>{material.Name}</td>
                    <td>{material.Extra.ExtraDurability}</td>
                  </tr>);
                }
            })
          }
          </tbody>
          </table>
        }
        <h1>Fletching Stats</h1>
        {
          <table>
          <thead>
            <tr>
              <th>Material</th>
              <th>Accuracy</th>
              <th>Modifier</th>
            </tr>
          </thead>
          <tbody>
            {
            this.state.materials.map((material, index) => {
                if(material.Fletching) {
                  return (<tr>
                    <td>{material.Name}</td>
                    <td>{material.Fletching.Accuracy}</td>
                    <td>{material.Fletching.Modifier}</td>
                  </tr>);
                }
            })
          }
          </tbody>
          </table>
        }
        <h1>Shaft Stats</h1>
        {
          <table>
          <thead>
            <tr>
              <th>Material</th>
              <th>Bonus Ammo</th>
              <th>Modifier</th>
            </tr>
          </thead>
          <tbody>
            {
            this.state.materials.map((material, index) => {
                if(material.Shaft) {
                  return (<tr>
                    <td>{material.Name}</td>
                    <td>{material.Shaft.BonusAmmo}</td>
                    <td>{material.Shaft.Modifier}</td>
                  </tr>);
                }
            })
          }
          </tbody>
          </table>
        }
        <h1>Head Stats</h1>
        {
          <table>
          <thead>
            <tr>
              <th>Material</th>
              <th>Attack</th>
              <th>Durability</th>
              <th>Harvest Level</th>
              <th>Mining Speed</th>
            </tr>
          </thead>
          <tbody>
            {
            this.state.materials.map((material, index) => {
                if(material.Head) {
                  return (<tr>
                    <td>{material.Name}</td>
                    <td>{material.Head.Attack}</td>
                    <td>{material.Head.Durability}</td>
                    <td>{material.Head.HarvestLevel}</td>
                    <td>{material.Head.MiningSpeed}</td>
                  </tr>);
                }
            })
          }
          </tbody>
          </table>
        }
        <h1>Handle Stats</h1>
        {
          <table>
            <thead>
              <tr>
                <th>Material</th>
                <th>Durability</th>
                <th onClick={this.sortByModifier.bind(this)}>Modifier</th>
              </tr>
            </thead>
            <tbody>
              {
              this.state.materials.map((material, index) => {
                  if(material.Handle) {
                    return (<tr>
                      <td>{material.Name}</td>
                      <td>{material.Handle.Durability}</td>
                      <td>{material.Handle.Modifier}</td>
                    </tr>);
                  }
              })
            }
            </tbody>
            </table>
        } */}
      </div>
    );
  }
}

export default App;
