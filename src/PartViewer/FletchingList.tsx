import React from 'react';
import SortableTable from '../SortableTable';
import FletchingPart from '../Materials/Parts/FletchingPart';

interface Props {
    fletchingParts: FletchingPart[]
}

const FletchingList: React.FunctionComponent<Props> = ({ fletchingParts }) => (
    <div>
        <h1>Fletchings</h1>
        <SortableTable columnNames={["Name", "Accuracy", "Modifer"]} data={fletchingParts.map(fletchingPart => ({
            Name: fletchingPart.Material.Name,
            Accuracy: fletchingPart.Accuracy,
            Modifer: fletchingPart.Modifier
        }))} />
    </div>
)

export default FletchingList;
