import React from 'react';
import SortableTable from '../SortableTable';
import BowStringPart from '../Materials/Parts/BowStringPart';
import Material from '../Materials/Material';

interface Props {
    bowStringParts: BowStringPart[],
    hideMaterial: (material:Material) => void
}

const BowStringList: React.FunctionComponent<Props> = ({ bowStringParts, hideMaterial }) => (
    <div>
        <h1>Bow Strings</h1>
        <SortableTable columnNames={["Name", "Modifier", "Traits", "Actions"]} data={bowStringParts.map(bowStringPart => ({
            Name: bowStringPart.Material.Name,
            Modifier: bowStringPart.Modifier,
            Traits: bowStringPart.Traits.join(", "),
            Actions: <div onClick={() => {hideMaterial(bowStringPart.Material)}}>hide</div>
        }))} />
    </div>
)

export default BowStringList;
