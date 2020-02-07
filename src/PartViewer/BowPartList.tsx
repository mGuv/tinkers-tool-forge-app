import React from 'react';
import SortableTable from '../SortableTable';
import BowPart from '../Materials/Parts/BowPart';

interface Props {
    bowParts: BowPart[]
}

const BowPartList: React.FunctionComponent<Props> = ({ bowParts }) => (
    <div>
        <h1>Bow Limbs</h1>
        <SortableTable columnNames={["Name", "Draw Speed", "Damage", "Range"]} data={bowParts.map(bowPart => ({
            Name: bowPart.Material.Name,
            "Draw Speed": bowPart.DrawSpeed,
            Damage: bowPart.BonusDamage,
            Range: bowPart.Range
        }))} />
    </div>
)

export default BowPartList;
