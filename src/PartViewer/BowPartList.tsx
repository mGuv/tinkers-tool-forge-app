import React from 'react';
import SortableTable from '../SortableTable';
import BowPart from '../Materials/Parts/BowPart';
import Button from '../Button';
import Material from '../Materials/Material';

interface Props {
    bowParts: BowPart[],
    hideMaterial: (material:Material) => void
}

const BowPartList: React.FunctionComponent<Props> = ({ bowParts, hideMaterial }) => (
    <div>
        <SortableTable columnInfo={["Name", "Draw Speed", "Damage", "Range", "Traits", ["", false]]} data={bowParts.map(bowPart => ({
            Name: bowPart.Material.Name,
            "Draw Speed": bowPart.DrawSpeed,
            Damage: bowPart.BonusDamage,
            Range: bowPart.Range,
            Traits: bowPart.Traits.join(", "),
            "": <Button label="Hide" onClick={()=>{hideMaterial(bowPart.Material)}}/>
        }))} />
    </div>
)

export default BowPartList;
