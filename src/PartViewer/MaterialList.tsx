import React, { ChangeEvent } from 'react';
import SortableTable from '../SortableTable';
import Material from '../Materials/Material';

interface Props {
    materials: Material[],
    toggleMaterial: (material:Material) => void,
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
                <div style={{marginTop: "1em", marginBottom: "1em"}}><input onChange={this.updateFilter.bind(this)} autoFocus placeholder="Filter Materials..."/></div>
                <SortableTable columnInfo={[["Colour", false], "Name", ["Visibility", false]]} data={this.props.materials.filter(material => material.Name.indexOf(this.state.materialFilter) >= 0).map(material => ({
                    Colour: <div style={{width: "16px", height: "16px", backgroundColor: material.Color}}/>,
                    Name: material.Name,
                    "Visibility": <i onClick={() => {this.props.toggleMaterial(material)}} className={material.Hidden ? 'fas fa-eye-slash' :'fas fa-eye'}/>
                }))} />
            </div>
        );
    }
}

export default MaterialList;
