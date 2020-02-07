import React from 'react';
import SortableTable from '../SortableTable';
import HeadPart from '../Materials/Parts/HeadPart';

interface Props {
    headParts: HeadPart[]
}

const HeadList: React.FunctionComponent<Props> = ({ headParts }) => (
    <div>
        <h1>Heads</h1>
        <SortableTable columnNames={["Name", "Attack", "Durability", "Harvest Level", "Harvest Speed", "Traits"]} data={headParts.map(headPart => ({
            Name: headPart.Material.Name,
            Attack: headPart.Attack,
            Durability: headPart.Durability,
            "Harvest Level": headPart.HarvestLevel,
            "Harvest Speed": headPart.MiningSpeed,
            Traits: headPart.Traits.join(", ")
        }))} />
    </div>
)

export default HeadList;
