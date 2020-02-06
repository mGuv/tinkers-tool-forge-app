import React from 'react';
import Material from '../Materials/Material';
import Page from './Page';
import PageProps from './PageProps';
import PageState from './PageState';
import SortablePage from './SortablePage';

class BowPage extends Page<PageProps, PageState>
{
    public constructor(props: PageProps) {
        super(props, (m:Material) => {return m.Bow !== undefined});
    }

    public render(): JSX.Element {
        return (
            <div>
                <h1>Bow Page</h1>
                <SortablePage columnNames={["Name", "Draw Speed", "Damage", "Range"]} data={this.state.pageMaterials.map(mat => ({
                    Name: mat.Name,
                    "Draw Speed": mat.Bow?.DrawSpeed,
                    Damage: mat.Bow?.BonusDamage,
                    Range: mat.Bow?.Range
                }))}/>
            </div>
        );
    }
}

export default BowPage;
