import React from 'react';
import SortableTable from '../SortableTable';
import Material from '../Materials/Material';


interface Props {
    materials: Material[],
    toggleMaterial: (material:Material) => void,
}

const MaterialList: React.FunctionComponent<Props> = ({ materials, toggleMaterial }) => (
    <div>
        <SortableTable columnInfo={[["Colour", false], "Name", ["Visibility", false]]} data={materials.map(material => ({
            Colour: <div style={{width: "16px", height: "16px", backgroundColor: "#" + material.Color}}/>,
            Name: material.Name,
            "Visibility": <i onClick={() => {toggleMaterial(material)}} className={material.Hidden ? 'fas fa-eye-slash' :'fas fa-eye'}/>
        }))} />
    </div>
)

export default MaterialList;
