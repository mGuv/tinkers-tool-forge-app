import React from 'react';
import Material from '../Materials/Material';
import Page from './Page';
import PageProps from './PageProps';
import PageState from './PageState';

class BowStringPage extends Page<PageProps, PageState>
{
    public constructor(props: PageProps) {
        super(props, (m:Material) => {return m.BowString !== undefined});
    }

    private sortByModifier(a:Material, b:Material):number {
        if(a.BowString?.Modifier === b.BowString?.Modifier) {
            return 0;
        }

        return (a.BowString?.Modifier < b.BowString?.Modifier) ? 1 : -1;
    }

    public render(): JSX.Element {
        return (
            <div>
                <h1>Bowstring Page</h1>
                <table>
                    <thead>
                        <tr>
                            <th onClick={() => {this.orderMaterials(this.sortByName)}}>Material</th>
                            <th onClick={() => {this.orderMaterials(this.sortByModifier)}}>Modifier</th>                         
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.pageMaterials.map((m: Material) => {
                                    return (
                                        <tr>
                                            <td>{m.Name}</td>
                                            <td>{m.BowString?.Modifier}</td>                                            
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

export default BowStringPage;