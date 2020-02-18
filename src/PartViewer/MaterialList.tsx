import React, { ChangeEvent } from 'react';
import SortableTable from '../SortableTable';
import Material from '../Materials/Material';
import Button from '../Button';

interface Props {
    materials: Material[],
    hideMaterial: (material:Material) => void,
    showMaterial: (material:Material) => void,
    showAll: () => void,
    hideAll: () => void
}

interface State {
    materialFilter:string,
}

class MaterialList extends React.PureComponent<Props, State> {
    public constructor(props:Props) {
        super(props);

        this.state = {
            materialFilter: ""
        };
    }

    private updateFilter(event:ChangeEvent<HTMLInputElement>) {
        event.stopPropagation();

        this.setState({
            ...this.state,
            materialFilter: event.target.value
        });
    }

    public render() {
        return (
            <div>
                <div style={{display: 'flex', marginTop: "1em", marginBottom: "1em"}}><input style={{marginRight: '1em'}} onChange={this.updateFilter.bind(this)} autoFocus placeholder="Filter Materials..."/><input style={{marginRight: '1em'}} type="button" value="Show All" onClick={this.props.showAll}/><input style={{marginRight: '1em'}} type="button" value="Hide All" onClick={this.props.hideAll}/></div>
                <SortableTable columnInfo={[["Colour", false], "Name", ["", false]]} data={this.props.materials.filter(material => material.Name.indexOf(this.state.materialFilter) >= 0).map(material => ({
                    Colour: <div style={{width: "16px", height: "16px", backgroundColor: material.Color}}/>,
                    Name: material.Name,
                    "": <div>
                            <Button label="Show" depressed={!material.Hidden} onClick={() => {this.props.showMaterial(material)}} />
                            <Button label="Hide" depressed={material.Hidden} onClick={() => {this.props.hideMaterial(material)}} />
                        </div>
                }))} />
            </div>
        );
    }
}

export default MaterialList;
