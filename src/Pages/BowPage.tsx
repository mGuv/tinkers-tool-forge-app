import React from 'react';
import Material from '../Materials/Material';
import Page from './Page';
import PageProps from './PageProps';
import PageState from './PageState';


interface Props extends PageProps
{

}

interface State extends PageState
{

}

class BowPage extends Page<Props, State>
{
    public constructor(props: Props) {
        super(props, (m:Material) => {return m.Bow !== undefined});
    }

    public render(): JSX.Element {
        return (
            <div>
                <h1>Bow Page</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Material</th>
                            <th>Draw Speed</th>
                            <th>Damage</th>
                            <th>Range</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.pageMaterials.map((m: Material) => {
                                if(m.Bow) {
                                    return (
                                   
                                        <tr>
                                            <td>{m.Name}</td>
                                            <td>{m.Bow.DrawSpeed}</td>
                                            <td>{m.Bow.BonusDamage}</td>
                                            <td>{m.Bow.Range}</td>
                                        </tr>
                                    );
                                }
                                else {
                                    return <React.Fragment/>
                                }
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default BowPage;