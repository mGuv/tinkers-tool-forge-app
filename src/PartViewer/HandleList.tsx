import React from 'react';
import SortableTable from '../SortableTable';
import HandlePart from '../Materials/Parts/HandlePart';
import Material from '../Materials/Material';

interface Props {
    handleParts: HandlePart[],
    hideMaterial: (material:Material) => void
}

const HandleList: React.FunctionComponent<Props> = ({ handleParts, hideMaterial }) => (
    <div>
        <h1>Handles</h1>
        <SortableTable columnInfo={["Name", "Durability", "Modifier", "Traits", ["Actions", false]]} data={handleParts.map(handlePart => ({
            Name: handlePart.Material.Name,
            Durability: handlePart.Durability,
            Modifier: handlePart.Modifier,
            Traits: handlePart.Traits.join(", "),
            Actions: <div onClick={() => {hideMaterial(handlePart.Material)}}>hide</div>
        }))} />
    </div>
)

export default HandleList;
