import React from 'react';
import SortableTable from '../SortableTable';
import ShaftPart from '../Materials/Parts/ShaftPart';

interface Props {
    shaftParts:ShaftPart[],
}

const ShaftList: React.FunctionComponent<Props> = ({ shaftParts }) => (
    <div>
        <SortableTable columnInfo={["Name", "Bonus Ammo", "Modifier", "Traits"]} data={shaftParts.map(shaftPart => ({
            Name: shaftPart.Material.Name,
            "Bonus Ammo": shaftPart.BonusAmmo,
            Modifier: shaftPart.Modifier,
            Traits: shaftPart.Traits.join(", "),
        }))} />
    </div>
)

export default ShaftList;
