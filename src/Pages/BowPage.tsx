import React from 'react';
import Material from '../Materials/Material';
import Page from './Page';
import PageProps from './PageProps';
import PageState from './PageState';
import PickaxeHead from '../Parts/PickaxeHead';

class BowPage extends Page<PageProps, PageState>
{
    public constructor(props: PageProps) {
        super(props, (m:Material) => {return m.Bow !== undefined});
    }

    public render(): JSX.Element {
        return (
            <div>
                <h1>Bow Page</h1>
                <PickaxeHead materialColor="#FF0000FF"/>
                <PickaxeHead materialColor="#00FF00FF"/>
                <PickaxeHead materialColor="#00FF0020"/>
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
                                    return (
                                        <tr>
                                            <td>{m.Name}</td>
                                            <td>{m.Bow?.DrawSpeed}</td>
                                            <td>{m.Bow?.BonusDamage}</td>
                                            <td>{m.Bow?.Range}</td>
                                        </tr>
                                    );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default BowPage;
