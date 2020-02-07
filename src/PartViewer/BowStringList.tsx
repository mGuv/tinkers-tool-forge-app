import React from 'react';
import SortableTable from '../SortableTable';
import BowStringPart from '../Materials/Parts/BowStringPart';

interface Props {
    bowStringParts: BowStringPart[]
}

const BowStringList: React.FunctionComponent<Props> = ({ bowStringParts }) => (
    <div>
        <h1>Bow Strings</h1>
        <SortableTable columnNames={["Name", "Modifier"]} data={bowStringParts.map(bowStringPart => ({
            Name: bowStringPart.Material.Name,
            Modifier: bowStringPart.Modifier
        }))} />
    </div>
)

export default BowStringList;
