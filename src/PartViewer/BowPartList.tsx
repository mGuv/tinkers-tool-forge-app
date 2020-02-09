import React from 'react';
import SortableTable from '../SortableTable';
import BowPart from '../Materials/Parts/BowPart';
import Material from '../Materials/Material';

interface Props {
    bowParts: BowPart[],
    hideMaterial: (material:Material) => void
}

const BowPartList: React.FunctionComponent<Props> = ({ bowParts, hideMaterial }) => (
    <div>
        <SortableTable columnInfo={["Name", "Draw Speed", "Damage", "Range", "Traits", ["Actions", false]]} data={bowParts.map(bowPart => ({
            Name: bowPart.Material.Name,
            "Draw Speed": bowPart.DrawSpeed,
            Damage: bowPart.BonusDamage,
            Range: bowPart.Range,
            Traits: bowPart.Traits.join(", "),
            Actions: <div onClick={() => {hideMaterial(bowPart.Material)}}>hide</div>
        }))} />
    </div>
)

export default BowPartList;
