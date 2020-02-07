import React from 'react';
import SortableTable from '../SortableTable';
import HeadPart from '../Materials/Parts/HeadPart';
import Material from '../Materials/Material';

interface Props {
    headParts: HeadPart[],
    hideMaterial: (material:Material) => void
}

const HeadList: React.FunctionComponent<Props> = ({ headParts, hideMaterial }) => (
    <div>
        <h1>Heads</h1>
        <SortableTable columnNames={["Name", "Attack", "Durability", "Harvest Level", "Harvest Speed", "Traits", "Actions"]} data={headParts.map(headPart => ({
            Name: headPart.Material.Name,
            Attack: headPart.Attack,
            Durability: headPart.Durability,
            "Harvest Level": headPart.HarvestLevel,
            "Harvest Speed": headPart.MiningSpeed,
            Traits: headPart.Traits.join(", "),
            Actions: <div onClick={() => {hideMaterial(headPart.Material)}}>hide</div>
        }))} />
    </div>
)

export default HeadList;
