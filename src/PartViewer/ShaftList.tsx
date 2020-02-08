import React from 'react';
import SortableTable from '../SortableTable';
import ShaftPart from '../Materials/Parts/ShaftPart';
import Material from '../Materials/Material';

interface Props {
    shaftParts:ShaftPart[],
    hideMaterial: (material:Material) => void
}

const ShaftList: React.FunctionComponent<Props> = ({ shaftParts, hideMaterial }) => (
    <div>
        <h1>Shafts</h1>
        <SortableTable columnInfo={["Name", "Bonus Ammo", "Modifier", "Traits", ["Actions", false]]} data={shaftParts.map(shaftPart => ({
            Name: shaftPart.Material.Name,
            "Bonus Ammo": shaftPart.BonusAmmo,
            Modifier: shaftPart.Modifier,
            Traits: shaftPart.Traits.join(", "),
            Actions: <div onClick={() => {hideMaterial(shaftPart.Material)}}>hide</div>
        }))} />
    </div>
)

export default ShaftList;
