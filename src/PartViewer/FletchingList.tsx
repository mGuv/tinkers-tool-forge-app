import React from 'react';
import SortableTable from '../SortableTable';
import FletchingPart from '../Materials/Parts/FletchingPart';
import Material from '../Materials/Material';

interface Props {
    fletchingParts: FletchingPart[],
    hideMaterial: (material:Material) => void
}

const FletchingList: React.FunctionComponent<Props> = ({ fletchingParts, hideMaterial }) => (
    <div>
        <h1>Fletchings</h1>
        <SortableTable columnNames={["Name", "Accuracy", "Modifer", "Traits", "Actions"]} data={fletchingParts.map(fletchingPart => ({
            Name: fletchingPart.Material.Name,
            Accuracy: fletchingPart.Accuracy,
            Modifer: fletchingPart.Modifier,
            Traits: fletchingPart.Traits.join(", "),
            Actions: <div onClick={() => {hideMaterial(fletchingPart.Material)}}>hide</div>
        }))} />
    </div>
)

export default FletchingList;
