import React from 'react';
import SortableTable from '../SortableTable';
import FletchingPart from '../Materials/Parts/FletchingPart';
import Material from '../Materials/Material';
import Button from '../Button';

interface Props {
    fletchingParts: FletchingPart[],
    hideMaterial: (material:Material) => void
}

const FletchingList: React.FunctionComponent<Props> = ({ fletchingParts, hideMaterial }) => (
    <div>
        <SortableTable columnInfo={["Name", "Accuracy", "Modifer", "Traits", ["", false]]} data={fletchingParts.map(fletchingPart => ({
            Name: fletchingPart.Material.Name,
            Accuracy: fletchingPart.Accuracy,
            Modifer: fletchingPart.Modifier,
            Traits: fletchingPart.Traits.join(", "),
            "": <Button label="Remove" onClick={()=>{hideMaterial(fletchingPart.Material)}}/>
        }))} />
    </div>
)

export default FletchingList;
