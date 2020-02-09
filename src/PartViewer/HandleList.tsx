import React from 'react';
import SortableTable from '../SortableTable';
import HandlePart from '../Materials/Parts/HandlePart';

interface Props {
    handleParts: HandlePart[],
}

const HandleList: React.FunctionComponent<Props> = ({ handleParts }) => (
    <div>
        <SortableTable columnInfo={["Name", "Durability", "Modifier", "Traits"]} data={handleParts.map(handlePart => ({
            Name: handlePart.Material.Name,
            Durability: handlePart.Durability,
            Modifier: handlePart.Modifier,
            Traits: handlePart.Traits.join(", "),
        }))} />
    </div>
)

export default HandleList;
