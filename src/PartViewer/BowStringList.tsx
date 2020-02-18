import React from 'react';
import SortableTable from '../SortableTable';
import BowStringPart from '../Materials/Parts/BowStringPart';
import Material from '../Materials/Material';
import Button from '../Button';

interface Props {
    bowStringParts: BowStringPart[],
    hideMaterial: (material:Material) => void
}

const BowStringList: React.FunctionComponent<Props> = ({ bowStringParts, hideMaterial }) => (
    <div>
        <SortableTable columnInfo={["Name", "Modifier", "Traits", ["", false]]} data={bowStringParts.map(bowStringPart => ({
            Name: bowStringPart.Material.Name,
            Modifier: bowStringPart.Modifier,
            Traits: bowStringPart.Traits.join(", "),
            "": <Button label="Remove" onClick={()=>{hideMaterial(bowStringPart.Material)}}/>
        }))} />
    </div>
)

export default BowStringList;
