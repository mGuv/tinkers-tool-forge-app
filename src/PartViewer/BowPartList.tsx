import React from 'react';
import SortableTable from '../SortableTable';
import BowPart from '../Materials/Parts/BowPart';
import Button from '../Button';
import Material from '../Materials/Material';

interface Props {
    bowParts: BowPart[],
    hideMaterial: (material:Material) => void,
    addBowPart: (bowPart:BowPart) => void,
    removeBowPart: (bowPart: BowPart) => void
}

const BowPartList: React.FunctionComponent<Props> = ({ bowParts, hideMaterial, addBowPart, removeBowPart }) => (
    <div>
        <SortableTable columnInfo={["Name", "Draw Speed", "Damage", "Range", "Traits", ["", false]]} data={bowParts.map(bowPart => ({
            Name: bowPart.Material.Name,
            "Draw Speed": bowPart.DrawSpeed,
            Damage: bowPart.BonusDamage,
            Range: bowPart.Range,
            Traits: bowPart.Traits.join(", "),
            "": <div>
                    <Button depressed={bowPart.Included} label="Include" onClick={() => {addBowPart(bowPart)}}/>
                    <Button depressed={!bowPart.Included} label="Exclude" onClick={() => {removeBowPart(bowPart)}}/>
                    <Button label="Remove" onClick={()=>{removeBowPart(bowPart); hideMaterial(bowPart.Material)}}/>
                </div>
        }))} />
    </div>
)

export default BowPartList;
