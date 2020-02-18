import React from 'react';
import SortableTable from '../SortableTable';
import HeadPart from '../Materials/Parts/HeadPart';
import Material from '../Materials/Material';
import Button from '../Button';

interface Props {
    headParts: HeadPart[],
    hideMaterial: (material:Material) => void,
    addHeadPart: (headPart:HeadPart) => void,
    removeHeadPart: (headPart: HeadPart) => void
}

const HeadList: React.FunctionComponent<Props> = ({ headParts, hideMaterial, addHeadPart, removeHeadPart }) => (
    <div>
        <SortableTable columnInfo={["Name", "Attack", "Durability", "Harvest Level", "Harvest Speed", "Traits", ["", false]]} data={headParts.map(headPart => ({
            Name: headPart.Material.Name,
            Attack: headPart.Attack,
            Durability: headPart.Durability,
            "Harvest Level": headPart.HarvestLevel,
            "Harvest Speed": headPart.MiningSpeed,
            Traits: headPart.Traits.join(", "),
            "": <div>
            <Button depressed={headPart.Included} label="Include" onClick={() => {addHeadPart(headPart)}}/>
            <Button depressed={!headPart.Included} label="Exclude" onClick={() => {removeHeadPart(headPart)}}/>
            <Button label="Remove" onClick={()=>{removeHeadPart(headPart); hideMaterial(headPart.Material)}}/>
        </div>
        }))} />
    </div>
)

export default HeadList;
