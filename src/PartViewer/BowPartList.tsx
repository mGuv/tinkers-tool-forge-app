import React from 'react';
import SortableTable from '../SortableTable';
import BowPart from '../Materials/Parts/BowPart';

interface Props {
    bowParts: BowPart[],
}

const BowPartList: React.FunctionComponent<Props> = ({ bowParts }) => (
    <div>
        <SortableTable columnInfo={["Name", "Draw Speed", "Damage", "Range", "Traits"]} data={bowParts.map(bowPart => ({
            Name: bowPart.Material.Name,
            "Draw Speed": bowPart.DrawSpeed,
            Damage: bowPart.BonusDamage,
            Range: bowPart.Range,
            Traits: bowPart.Traits.join(", "),
        }))} />
    </div>
)

export default BowPartList;
