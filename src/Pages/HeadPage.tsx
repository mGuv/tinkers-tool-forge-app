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

    private sortByAttack(a:Material, b:Material):number {
        if(a.Head?.Attack === b.Head?.Attack) {
            return 0;
        }

        return (a.Head?.Attack < b.Head?.Attack) ? 1 : -1;
    }

    private sortByDurability(a:Material, b:Material):number {
        if(a.Head?.Durability === b.Head?.Durability) {
            return 0;
        }

        return (a.Head?.Durability < b.Head?.Durability) ? 1 : -1;
    }

    private sortByHarvestLevel(a:Material, b:Material):number {
        if(a.Head?.HarvestLevel === b.Head?.HarvestLevel) {
            return 0;
        }

        return (a.Head?.HarvestLevel < b.Head?.HarvestLevel) ? 1 : -1;
    }

    private sortByHarvestSpeed(a:Material, b:Material):number {
        if(a.Head?.MiningSpeed === b.Head?.MiningSpeed) {
            return 0;
        }

        return (a.Head?.MiningSpeed < b.Head?.MiningSpeed) ? 1 : -1;
    }

    public render(): JSX.Element {
        return (
            <div>
                <h1>Head Page</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Material</th>
                            <th onClick={() => {this.orderMaterials(this.sortByAttack)}}>Attack</th>
                            <th onClick={() => {this.orderMaterials(this.sortByDurability)}}>Durability</th>
                            <th onClick={() => {this.orderMaterials(this.sortByHarvestLevel)}}>Harvest Level</th>
                            <th onClick={() => {this.orderMaterials(this.sortByHarvestSpeed)}}>Harvest Speed</th>
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