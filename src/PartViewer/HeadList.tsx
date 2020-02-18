import React from 'react';
import SortableTable from '../SortableTable';
import HeadPart from '../Materials/Parts/HeadPart';
import Material from '../Materials/Material';
import Button from '../Button';

interface Props {
    headParts: HeadPart[],
    hideMaterial: (material:Material) => void
}

const HeadList: React.FunctionComponent<Props> = ({ headParts, hideMaterial }) => (
    <div>
        <SortableTable columnInfo={["Name", "Attack", "Durability", "Harvest Level", "Harvest Speed", "Traits", ["", false]]} data={headParts.map(headPart => ({
            Name: headPart.Material.Name,
            Attack: headPart.Attack,
            Durability: headPart.Durability,
            "Harvest Level": headPart.HarvestLevel,
            "Harvest Speed": headPart.MiningSpeed,
            Traits: headPart.Traits.join(", "),
            "": <Button label="Hide" onClick={()=>{hideMaterial(headPart.Material)}}/>
        }))} />
    </div>
)

export default HeadList;
