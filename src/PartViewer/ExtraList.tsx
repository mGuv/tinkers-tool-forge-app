import React from 'react';
import SortableTable from '../SortableTable';
import ExtraPart from '../Materials/Parts/ExtraPart';
import Material from '../Materials/Material';
import Button from '../Button';

interface Props {
    extraParts: ExtraPart[],
    hideMaterial: (material:Material) => void
}

const ExtraList: React.FunctionComponent<Props> = ({ extraParts, hideMaterial }) => (
    <div>
        <SortableTable columnInfo={["Name", "Extra Durability", "Traits", ["", false]]} data={extraParts.map(extraPart => ({
            Name: extraPart.Material.Name,
            "Extra Durability": extraPart.ExtraDurability,
            Traits: extraPart.Traits.join(", "),
            "": <Button label="Hide" onClick={()=>{hideMaterial(extraPart.Material)}}/>
        }))} />
    </div>
)

export default ExtraList;
