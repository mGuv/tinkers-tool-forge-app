import React from 'react';
import SortableTable from '../SortableTable';
import HandlePart from '../Materials/Parts/HandlePart';
import Material from '../Materials/Material';
import Button from '../Button';

interface Props {
    handleParts: HandlePart[],
    hideMaterial: (material:Material) => void
}

const HandleList: React.FunctionComponent<Props> = ({ handleParts, hideMaterial }) => (
    <div>
        <SortableTable columnInfo={["Name", "Durability", "Modifier", "Traits", ["", false]]} data={handleParts.map(handlePart => ({
            Name: handlePart.Material.Name,
            Durability: handlePart.Durability,
            Modifier: handlePart.Modifier,
            Traits: handlePart.Traits.join(", "),
            "": <Button label="Remove" onClick={()=>{hideMaterial(handlePart.Material)}}/>
        }))} />
    </div>
)

export default HandleList;
