import React from "react";
import HeadPart from "../Materials/Parts/HeadPart";
import HandlePart from "../Materials/Parts/HandlePart";
import Head from "../Parts/Tool/Hammer/Head";
import Preview from "../Parts/Tool/Hammer/Preview";
import { Link } from "react-router-dom";
import LargePlate from "../Parts/LargePlate";
import ToughToolrod from "../Parts/ToughToolrod";

interface BuilderState {
    selectedHead?: HeadPart;
    selectedTopPlate?: HeadPart;
    selectedBottomPlate?: HeadPart;
    selectedHandle?: HandlePart;
}

interface BuilderProps {
    headParts: HeadPart[];
    handleParts: HandlePart[];
}

export default class HammerBuilder extends React.Component<BuilderProps, BuilderState> {
    public constructor(props: BuilderProps) {
        super(props);
        this.state = {};
    }
    public render() {
        let toolInformation = <React.Fragment/>;

        if (this.state.selectedHead && this.state.selectedTopPlate && this.state.selectedBottomPlate && this.state.selectedHandle) {
            toolInformation = <div>
                <Preview
                    headColor={this.state.selectedHead.Material.Color}
                    topColor={this.state.selectedTopPlate.Material.Color}
                    bottomColor={this.state.selectedBottomPlate.Material.Color}
                    handleColor={this.state.selectedHandle.Material.Color}
                    />
            </div>;
        }

        return <div>
            <h1>Tool Forge</h1>

            <Link to="/toolforge">Pickaxe Builder</Link>

            <h2>Hammer</h2>
            
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

            {this.state.selectedHead ? <Head materialColor={this.state.selectedHead.Material.Color}/> : ''}

            <br/>

            <select onChange={(e) => {
                this.setState({
                    ...this.state,
                    selectedTopPlate: this.props.headParts.filter(head => head.Material.Name === e.currentTarget.value)[0]
                })
            }}>
                <option>--</option>
                {this.props.headParts.map(head => {
                    const name = head.Material.Name;
                    return <option value={name} key={name}>{name}</option>
                })}
            </select>

            {this.state.selectedTopPlate ? <LargePlate materialColor={this.state.selectedTopPlate.Material.Color}/> : ''}

            <br/>

            <select onChange={(e) => {
                this.setState({
                    ...this.state,
                    selectedBottomPlate: this.props.headParts.filter(head => head.Material.Name === e.currentTarget.value)[0]
                })
            }}>
                <option>--</option>
                {this.props.headParts.map(head => {
                    const name = head.Material.Name;
                    return <option value={name} key={name}>{name}</option>
                })}
            </select>

            {this.state.selectedBottomPlate ? <LargePlate materialColor={this.state.selectedBottomPlate.Material.Color}/> : ''}

            <br/>

            <select onChange={(e) => {
                this.setState({
                    ...this.state,
                    selectedHandle: this.props.handleParts.filter(handle => handle.Material.Name === e.currentTarget.value)[0]
                })
            }}>
                <option>--</option>
                {this.props.handleParts.map(handle => {
                    const name = handle.Material.Name;
                    return <option value={name} key={name}>{name}</option>
                })}
            </select>

            {this.state.selectedHandle ? <ToughToolrod materialColor={this.state.selectedHandle.Material.Color}/> : ''}


            {toolInformation}
        </div>;
    }
}
