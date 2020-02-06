import PageProps from "./PageProps";
import React from "react";
import Material from "../Materials/Material";
import PickaxeHead from "../Parts/PickaxeHead";

interface BuilderState {
    selectedHead?: Material;
    selectedToolrod?: Material;
    selectedBinding?: Material;
}

export default class ToolBuilderPage extends React.Component<PageProps, BuilderState> {
    public constructor(props: PageProps) {
        super(props);
        this.state = {};
    }
    public render() {
        return <div>
            <h1>Tool Builder</h1>
            
            <select onChange={(e) => {
                this.setState({
                    ...this.state,
                    selectedHead: this.props.allMaterials.filter(m => m.Name === e.currentTarget.value)[0]
                })
            }}>
                <option>--</option>
                {this.props.allMaterials.filter(m => typeof m.Head !== 'undefined').map(m => <option value={m.Name} key={m.Name}>{m.Name}</option>)}
            </select>

            {this.state.selectedHead ? <PickaxeHead materialColor={this.state.selectedHead.Color}/> : ''}
        </div>;
    }
}
