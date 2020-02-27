import React from 'react';
import HeadPart from '../Materials/Parts/HeadPart';
import Material from '../Materials/Material';
import Part from '../Materials/Parts/Part';
import GenericList from './GenericList';

interface Props {
    parts: HeadPart[],
    hideMaterial: (material:Material) => void,
    addPart: (part:Part) => void,
    removePart: (part: Part) => void
    includedParts: Set<Part> | undefined
}

interface headPartData {
    Name: string,
    Attack: number,
    Durability: number,
    "Harvest Level": number,
    "Harvest Speed": number,
    Traits: string
}

const columns: (keyof headPartData | [keyof headPartData, boolean])[] = ["Name", "Attack", "Durability", "Harvest Level", "Harvest Speed", "Traits"];
const dataTransformer = (part: HeadPart) => ({
    Name: part.Material.Name,
    Attack: part.Attack,
    Durability: part.Durability,
    "Harvest Level": part.HarvestLevel,
    "Harvest Speed": part.MiningSpeed,
    Traits: part.Traits.join(", ")
});

const HeadList: React.FunctionComponent<Props> = (props) => (
    <GenericList
        {...props}
        columnInfo={columns}
        dataTransformer={dataTransformer}
    />
)

export default HeadList;
