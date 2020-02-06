import React from 'react';
import Material from '../Materials/Material';
import Page from './Page';
import PageProps from './PageProps';
import PageState from './PageState';

class ShaftPage extends Page<PageProps, PageState>
{
    public constructor(props: PageProps) {
        super(props, (m:Material) => {return m.Head !== undefined});
    }

    public render(): JSX.Element {
        return (
            <div>
                <h1>Shaft Page</h1>
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
                            this.state.pageMaterials.map((m: Material) => {
                                    return (
                                        <tr>
                                            <td>{m.Name}</td>
                                            <td>{m.Shaft?.BonusAmmo}</td>
                                            <td>{m.Shaft?.Modifier}</td>
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

export default ShaftPage;