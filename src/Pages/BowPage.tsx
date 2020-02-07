import React from 'react';
import SortablePage from './SortablePage';
import BowPart from '../Materials/Parts/BowPart';

interface Props {
    bowParts: BowPart[]
}

const BowPage: React.FunctionComponent<Props> = ({ bowParts }) => (
    <div>
        <h1>Bow Page</h1>
        <SortablePage columnNames={["Name", "Draw Speed", "Damage", "Range"]} data={bowParts.map(bowPart => ({
            Name: bowPart.Material.Name,
            "Draw Speed": bowPart.DrawSpeed,
            Damage: bowPart.BonusDamage,
            Range: bowPart.Range
        }))} />
    </div>
)

export default BowPage;
