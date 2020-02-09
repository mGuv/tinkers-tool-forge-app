import React from 'react';
import SortableTable from '../SortableTable';
import BowStringPart from '../Materials/Parts/BowStringPart';

interface Props {
    bowStringParts: BowStringPart[],
}

const BowStringList: React.FunctionComponent<Props> = ({ bowStringParts }) => (
    <div>
        <SortableTable columnInfo={["Name", "Modifier", "Traits"]} data={bowStringParts.map(bowStringPart => ({
            Name: bowStringPart.Material.Name,
            Modifier: bowStringPart.Modifier,
            Traits: bowStringPart.Traits.join(", "),
        }))} />
    </div>
)

export default BowStringList;
