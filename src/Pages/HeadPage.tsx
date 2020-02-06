import React from 'react';
import Material from '../Materials/Material';
import Page from './Page';
import PageProps from './PageProps';
import PageState from './PageState';

class HeadPage extends Page<PageProps, PageState>
{
    public constructor(props: PageProps) {
        super(props, (m:Material) => {return m.Head !== undefined});
    }

    /**
     * public readonly Attack:number;
    public readonly Durability:number;
    public readonly HarvestLevel:number;
    public readonly MiningSpeed:number;
     */
    public render(): JSX.Element {
        return (
            <div>
                <h1>Head Page</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Material</th>
                            <th>Attack</th>
                            <th>Durability</th>
                            <th>Harvest Level</th>
                            <th>Harvest Speed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.pageMaterials.map((m: Material) => {
                                    return (
                                        <tr>
                                            <td>{m.Name}</td>
                                            <td>{m.Head?.Attack}</td>
                                            <td>{m.Head?.Durability}</td>
                                            <td>{m.Head?.HarvestLevel}</td>
                                            <td>{m.Head?.MiningSpeed}</td>
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

export default HeadPage;