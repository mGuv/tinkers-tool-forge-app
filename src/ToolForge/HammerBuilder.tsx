import React from "react";
import HeadPart from "../Materials/Parts/HeadPart";
import HandlePart from "../Materials/Parts/HandlePart";
import Head from "../Parts/Tool/Hammer/Head";
import Preview from "../Parts/Tool/Hammer/Preview";
import { Link } from "react-router-dom";
import LargePlate from "../Parts/LargePlate";
import ToughToolrod from "../Parts/ToughToolrod";

import styles from "./Forge.module.css";

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
        let toolInformation = <React.Fragment />;

        if (this.state.selectedHead && this.state.selectedTopPlate && this.state.selectedBottomPlate && this.state.selectedHandle) {
            const head = this.state.selectedHead;
            const plate1 = this.state.selectedTopPlate;
            const plate2 = this.state.selectedBottomPlate;
            const handle = this.state.selectedHandle
            const overallDurability = (
                ((head.Durability * 2 + plate1.Durability + plate2.Durability) / 4) * handle.Modifier + handle.Durability
            ) * 2.5;

            toolInformation = <div>
                <Preview
                    headColor={head.Material.Color}
                    topColor={plate1.Material.Color}
                    bottomColor={plate2.Material.Color}
                    handleColor={handle.Material.Color}
                />

                <h3>Mining Speed</h3>
                {(head.MiningSpeed * 2 + plate1.MiningSpeed + plate2.MiningSpeed) / 4}

                <h3>Mining Level</h3>
                {head.HarvestLevel}

                <h3>Attack</h3>
                {(head.Attack * 2 + plate1.Attack + plate2.Attack) / 4}

                <h3>Durability</h3>
                <dl>
                    <dt>Head</dt>
                    <dd>{head.Durability}</dd>
                    <dt>Front Plate</dt>
                    <dd>{plate1.Durability}</dd>
                    <dt>Back Plate</dt>
                    <dd>{plate2.Durability}</dd>
                    <dt>Handle</dt>
                    <dd>{handle.Durability}</dd>
                    <dt>Modifier</dt>
                    <dd>{handle.Modifier}</dd>
                </dl>
                <strong>Overall: </strong> {overallDurability}

                <h3>Traits</h3>
                <ul>
                    {head.Traits.map(s => <li>{s}</li>)}
                    {plate1.Traits.map(s => <li>{s}</li>)}
                    {plate2.Traits.map(s => <li>{s}</li>)}
                    {handle.Traits.map(s => <li>{s}</li>)}
                </ul>
            </div>;
        }

        return <div className={styles.content}>
            <Link to="/toolforge">Pickaxe Builder</Link>

            <h2>Hammer</h2>

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

                    {this.state.selectedHead ? <Head materialColor={this.state.selectedHead.Material.Color} /> : ''}

                    <br />

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

                    {this.state.selectedTopPlate ? <LargePlate materialColor={this.state.selectedTopPlate.Material.Color} /> : ''}

                    <br />

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

                    {this.state.selectedBottomPlate ? <LargePlate materialColor={this.state.selectedBottomPlate.Material.Color} /> : ''}

                    <br />

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

                    {this.state.selectedHandle ? <ToughToolrod materialColor={this.state.selectedHandle.Material.Color} /> : ''}
                </div>

                <div className={styles.preview}>
                    {toolInformation}
                </div>
            </div>
        </div>;
    }
}
