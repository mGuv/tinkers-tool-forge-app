import React from 'react';
import SortableTable from '../SortableTable';
import ExtraPart from '../Materials/Parts/ExtraPart';
import Material from '../Materials/Material';

interface Props {
    extraParts: ExtraPart[],
    hideMaterial: (material:Material) => void
}

const ExtraList: React.FunctionComponent<Props> = ({ extraParts, hideMaterial }) => (
    <div>
        <h1>Extras</h1>
        <SortableTable columnNames={["Name", "Extra Durability", "Traits", "Actions"]} data={extraParts.map(extraPart => ({
            Name: extraPart.Material.Name,
            "Extra Durability": extraPart.ExtraDurability,
            Traits: extraPart.Traits.join(", "),
            Actions: <div onClick={() => {hideMaterial(extraPart.Material)}}>hide</div>
        }))} />
    </div>
)

export default ExtraList;
