import React from 'react';
import Material from '../Materials/Material';
import Page from './Page';
import PageProps from './PageProps';
import PageState from './PageState';

class HandlePage extends Page<PageProps, PageState>
{
    public constructor(props: PageProps) {
        super(props, (m:Material) => {return m.Handle !== undefined});
    }

    public render(): JSX.Element {
        return (
            <div>
                <h1>Handle Page</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Material</th>
                            <th>Durability</th>
                            <th>Modifier</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.pageMaterials.map((m: Material) => {
                                    return (
                                        <tr>
                                            <td>{m.Name}</td>
                                            <td>{m.Handle?.Durability}</td>
                                            <td>{m.Handle?.Modifier}</td>
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

export default HandlePage;