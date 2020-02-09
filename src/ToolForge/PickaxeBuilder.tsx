import React from "react";
import HeadPart from "../Materials/Parts/HeadPart";
import PickaxeHead from "../Parts/Tool/Pickaxe/Head";
import HandlePart from "../Materials/Parts/HandlePart";
import ExtraPart from "../Materials/Parts/ExtraPart";
import Toolrod from "../Parts/Toolrod";
import Binding from "../Parts/Binding";
import Preview from "../Parts/Tool/Pickaxe/Preview";
import { Link } from "react-router-dom";

import styles from "./Builder.module.css";

interface BuilderState {
    selectedHead?: HeadPart;
    selectedHandle?: HandlePart;
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
        let toolInformation = <React.Fragment />;

        if (this.state.selectedHead && this.state.selectedBinding && this.state.selectedHandle) {
            const head = this.state.selectedHead;
            const binding = this.state.selectedBinding;
            const handle = this.state.selectedHandle
            const overallDurability = (head.Durability + binding.ExtraDurability) * handle.Modifier + handle.Durability;

            toolInformation = <div>
                <Preview
                    headColor={head.Material.Color}
                    bindingColor={binding.Material.Color}
                    handleColor={handle.Material.Color}
                />

                <h3>Mining Speed</h3>
                {head.MiningSpeed}

                <h3>Mining Level</h3>
                {head.HarvestLevel}

                <h3>Attack</h3>
                {head.Attack}

                <h3>Durability</h3>
                <dl>
                    <dt>Head</dt>
                    <dd>{head.Durability}</dd>
                    <dt>Binding</dt>
                    <dd>{binding.ExtraDurability}</dd>
                    <dt>Handle</dt>
                    <dd>{handle.Durability}</dd>
                    <dt>Modifier</dt>
                    <dd>{handle.Modifier}</dd>
                </dl>
                <strong>Overall: </strong> {overallDurability}

                <h3>Traits</h3>
                <ul>
                    {head.Traits.map(s => <li>{s}</li>)}
                    {binding.Traits.map(s => <li>{s}</li>)}
                    {handle.Traits.map(s => <li>{s}</li>)}
                </ul>
            </div>;
        }

        return <div className={styles.content}>

            <Link to="/toolforge/hammer">Hammer Builder</Link>

            <h2>Pickaxe</h2>

            <div className={styles.page}>
                <div className={styles.builder}>
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

                    {this.state.selectedHead ? <PickaxeHead materialColor={this.state.selectedHead.Material.Color} /> : ''}

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

                    {this.state.selectedHandle ? <Toolrod materialColor={this.state.selectedHandle.Material.Color} /> : ''}


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

                    {this.state.selectedBinding ? <Binding materialColor={this.state.selectedBinding.Material.Color} /> : ''}

                </div>
                    <div className={styles.preview}>
                        {toolInformation}
                    </div>
                </div>
            </div>;
        }
    }
