import React from "react";
import HeadPart from "../Materials/Parts/HeadPart";
import PickaxeHead from "../Parts/Tool/Pickaxe/Head";
import HandlePart from "../Materials/Parts/HandlePart";
import ExtraPart from "../Materials/Parts/ExtraPart";
import Toolrod from "../Parts/Toolrod";
import Binding from "../Parts/Binding";
import Preview from "../Parts/Tool/Pickaxe/Preview";
import { Link } from "react-router-dom";

interface BuilderState {
    selectedHead?: HeadPart;
    selectedToolrod?: HandlePart;
    selectedBinding?: ExtraPart;
}

interface BuilderProps {
    headParts: HeadPart[];
    handleParts: HandlePart[];
    bindingParts: ExtraPart[];
}

export default class PickaxeBuilder extends React.Component<BuilderProps, BuilderState> {
    public constructor(props: BuilderProps) {
        super(props);
        this.state = {};
    }
    public render() {
        let toolInformation = <React.Fragment/>;

        if (this.state.selectedHead && this.state.selectedBinding && this.state.selectedToolrod) {
            toolInformation = <div>
                <Preview
                    headColor={this.state.selectedHead.Material.Color}
                    handleColor={this.state.selectedToolrod.Material.Color}
                    bindingColor={this.state.selectedBinding.Material.Color}
                    />
            </div>;
        }

        return <div>
            <h1>Tool Forge</h1>

            <Link to="/toolforge/hammer">Hammer Builder</Link>

            <h2>Pickaxe</h2>
            
            <select onChange={(e) => {
                this.setState({
                    ...this.state,
                    selectedHead: this.props.headParts.filter(head => head.Material.Name === e.currentTarget.value)[0]
                })
            }}>
                <option>--</option>
                {this.props.headParts.map(head => {
                    const name = head.Material.Name;
                    return <option value={name} key={name}>{name}</option>
                })}
            </select>

            {this.state.selectedHead ? <PickaxeHead materialColor={this.state.selectedHead.Material.Color}/> : ''}

            <select onChange={(e) => {
                this.setState({
                    ...this.state,
                    selectedToolrod: this.props.handleParts.filter(handle => handle.Material.Name === e.currentTarget.value)[0]
                })
            }}>
                <option>--</option>
                {this.props.handleParts.map(handle => {
                    const name = handle.Material.Name;
                    return <option value={name} key={name}>{name}</option>
                })}
            </select>

            {this.state.selectedToolrod ? <Toolrod materialColor={this.state.selectedToolrod.Material.Color}/> : ''}


            <select onChange={(e) => {
                this.setState({
                    ...this.state,
                    selectedBinding: this.props.bindingParts.filter(binding => binding.Material.Name === e.currentTarget.value)[0]
                })
            }}>
                <option>--</option>
                {this.props.bindingParts.map(binding => {
                    const name = binding.Material.Name;
                    return <option value={name} key={name}>{name}</option>
                })}
            </select>

            {this.state.selectedBinding ? <Binding materialColor={this.state.selectedBinding.Material.Color}/> : ''}


            {toolInformation}
        </div>;
    }
}
