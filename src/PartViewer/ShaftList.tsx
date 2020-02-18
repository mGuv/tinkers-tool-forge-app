import React from 'react';
import SortableTable from '../SortableTable';
import ShaftPart from '../Materials/Parts/ShaftPart';
import Material from '../Materials/Material';
import Button from '../Button';

interface Props {
    shaftParts:ShaftPart[],
    hideMaterial: (material:Material) => void
}

const ShaftList: React.FunctionComponent<Props> = ({ shaftParts, hideMaterial }) => (
    <div>
        <SortableTable columnInfo={["Name", "Bonus Ammo", "Modifier", "Traits", ["", false]]} data={shaftParts.map(shaftPart => ({
            Name: shaftPart.Material.Name,
            "Bonus Ammo": shaftPart.BonusAmmo,
            Modifier: shaftPart.Modifier,
            Traits: shaftPart.Traits.join(", "),
            "": <Button label="Hide" onClick={()=>{hideMaterial(shaftPart.Material)}}/>
        }))} />
    </div>
)

export default ShaftList;
