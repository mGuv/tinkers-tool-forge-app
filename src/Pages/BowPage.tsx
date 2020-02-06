import React from 'react';
import Material from '../Materials/Material';
import Page from './Page';
import PageProps from './PageProps';
import PageState from './PageState';
import PickaxeHead from '../Parts/PickaxeHead';
import BowLimb from '../Parts/BowLimb';

class BowPage extends Page<PageProps, PageState>
{
    public constructor(props: PageProps) {
        super(props, (m:Material) => {return m.Bow !== undefined});
    }

    private sortByDrawSpeed(a:Material, b:Material):number {
        if(a.Bow?.DrawSpeed === b.Bow?.DrawSpeed) {
            return 0;
        }

        return (a.Bow?.DrawSpeed < b.Bow?.DrawSpeed) ? 1 : -1;
    }

    private sortByDamage(a:Material, b:Material):number {
        if(a.Bow?.BonusDamage === b.Bow?.BonusDamage) {
            return 0;
        }

        return (a.Bow?.BonusDamage < b.Bow?.BonusDamage) ? 1 : -1;
    }

    private sortByRange(a:Material, b:Material):number {
        if(a.Bow?.Range === b.Bow?.Range) {
            return 0;
        }

        return (a.Bow?.Range < b.Bow?.Range) ? 1 : -1;
    }

    public render(): JSX.Element {
        return (
            <div>
                <h1>Bow Page</h1>
                <table>
                    <thead>
                        <tr>
                            <th onClick={() => {this.orderMaterials(this.sortByName)}}>Material</th>
                            <th onClick={() => {this.orderMaterials(this.sortByDrawSpeed)}}>Draw Speed</th>
                            <th onClick={() => {this.orderMaterials(this.sortByDamage)}}>Damage</th>
                            <th onClick={() => {this.orderMaterials(this.sortByRange)}}>Range</th>
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
