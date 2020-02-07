import React from 'react';
import SortableTable from '../SortableTable';
import ExtraPart from '../Materials/Parts/ExtraPart';

interface Props {
    extraParts: ExtraPart[]
}

const ExtraList: React.FunctionComponent<Props> = ({ extraParts }) => (
    <div>
        <h1>Extras</h1>
        <SortableTable columnNames={["Name", "Extra Durability"]} data={extraParts.map(extraPart => ({
            Name: extraPart.Material.Name,
            "Extra Durability": extraPart.ExtraDurability
        }))} />
    </div>
)

export default ExtraList;
