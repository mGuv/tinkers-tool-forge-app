import React from 'react';
import SortablePage from '../SortableTable/SortableTable';
import BowPart from '../Materials/Parts/BowPart';

interface Props {
    bowParts: BowPart[]
}

const BowPartList: React.FunctionComponent<Props> = ({ bowParts }) => (
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

export default BowPartList;
