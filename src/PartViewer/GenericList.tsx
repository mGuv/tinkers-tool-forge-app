import React from 'react';
import SortableTable from '../SortableTable';
import Material from '../Materials/Material';
import Button from '../Button';
import Part from '../Materials/Parts/Part';

interface Props<T extends Part, U> {
    parts: T[],
    hideMaterial: (material:Material) => void,
    addPart: (part:Part) => void,
    removePart: (part: Part) => void
    includedParts: Set<Part> | undefined
    columnInfo: ([keyof U, boolean] | keyof U)[]
    dataTransformer: (part: T) => U
}

class GenericList<T extends Part, U> extends React.PureComponent<Props<T, U>> {
    render() {
        return (
            <div>
                <SortableTable columnInfo={[...this.props.columnInfo, ["", false]]} data={this.props.parts.map(part => ({...this.props.dataTransformer(part), 
                    "": <div>
                    <Button depressed={this.props.includedParts?.has(part)} label="Include" onClick={() => {this.props.addPart(part)}}/>
                    <Button depressed={!this.props.includedParts?.has(part)} label="Exclude" onClick={() => {this.props.removePart(part)}}/>
                    <Button label="Remove" onClick={()=>{this.props.removePart(part); this.props.hideMaterial(part.Material)}}/>
                </div>
                }))} />
            </div>
        );
    }
}

export default GenericList;
