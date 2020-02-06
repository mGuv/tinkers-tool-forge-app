import React from 'react';
import Material from '../Materials/Material';
import Page from './Page';
import PageProps from './PageProps';
import PageState from './PageState';

class FlethcingPage extends Page<PageProps, PageState>
{
    public constructor(props: PageProps) {
        super(props, (m:Material) => {return m.Fletching !== undefined});
    }

    public render(): JSX.Element {
        return (
            <div>
                <h1>Fletching Page</h1>
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
                            this.state.pageMaterials.map((m: Material) => {
                                    return (
                                        <tr>
                                            <td>{m.Name}</td>
                                            <td>{m.Fletching?.Accuracy}</td>
                                            <td>{m.Fletching?.Modifier}</td>
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

export default FlethcingPage;