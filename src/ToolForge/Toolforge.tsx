import React from "react";

import AbstractTool from "./Tool/AbstractTool";
import Pickaxe from "./Tool/Pickaxe";
import Hammer from "./Tool/Hammer";
import Shortbow from "./Tool/Shortbow";
import Part from "../Materials/Parts/Part";

import styles from "./Forge.module.css";

interface ToolforgeProps {
    partList: {[key: string]: Part[]};
}

interface ToolforgeState {
    selectedTool?: AbstractTool
}

export default class Toolforge extends React.Component<ToolforgeProps, ToolforgeState>
{
    private toolOptions: AbstractTool[] = [
        new Pickaxe(),
        new Hammer(),
        new Shortbow(),
    ];

    public constructor(props: ToolforgeProps) {
        super(props);

        this.state = {};
    }

    public render() {
        return <div className={styles.forge}>
            <div className={styles.toolSelector}>
                {this.toolOptions.map((tool) => {
                    return <div className={styles.toolIcon} onClick={() => this.setState({...this.state, selectedTool: tool})}>
                        {tool.smallPreview()}
                    </div>;
                })}
            </div>

            <div className={styles.builder}>
                {this.state.selectedTool ? this.state.selectedTool.getPartList().map((p) => {
                    return <div className={styles.partPicker}>
                        <select>
                            <option>--</option>
                            {(this.props.partList[p.materialType]).map((m) => <option>{m.Material.Name}</option>)}
                        </select>
                    </div>;
                }) : ''}
            </div>

            <div className={styles.topInfo}>
                {this.state.selectedTool ? (<React.Fragment>
                    <h2>{this.state.selectedTool.Name}</h2>
                
                    Durability: 950/950<br/>
                    Mining Level: Obsidian<br/>
                    Mining Speed: 3.6<br/>
                    Attack: 5.7<br/>
                    Modifiers: 3<br/>
                </React.Fragment>) : <React.Fragment>
                    <h2>No Tool Selected</h2>

                    <p>Select a tool to build</p>
                </React.Fragment>}
            </div>

            <div className={styles.bottomInfo}>
                <h2>Traits</h2>

                Cheap
            </div>
        </div>;
    }

    // public placeholder() {
    //     const overallDurability = (
    //         ((head.Durability * 2 + plate1.Durability + plate2.Durability) / 4) * handle.Modifier + handle.Durability
    //     ) * 2.5;

    //     toolInformation = <div>
    //         <Preview
    //             headColor={head.Material.Color}
    //             topColor={plate1.Material.Color}
    //             bottomColor={plate2.Material.Color}
    //             handleColor={handle.Material.Color}
    //         />

    //         <h3>Mining Speed</h3>
    //         {(head.MiningSpeed * 2 + plate1.MiningSpeed + plate2.MiningSpeed) / 4}

    //         <h3>Mining Level</h3>
    //         {head.HarvestLevel}

    //         <h3>Attack</h3>
    //         {(head.Attack * 2 + plate1.Attack + plate2.Attack) / 4}

    //         <h3>Durability</h3>
    //         <dl>
    //             <dt>Head</dt>
    //             <dd>{head.Durability}</dd>
    //             <dt>Front Plate</dt>
    //             <dd>{plate1.Durability}</dd>
    //             <dt>Back Plate</dt>
    //             <dd>{plate2.Durability}</dd>
    //             <dt>Handle</dt>
    //             <dd>{handle.Durability}</dd>
    //             <dt>Modifier</dt>
    //             <dd>{handle.Modifier}</dd>
    //         </dl>
    //         <strong>Overall: </strong> {overallDurability}

    //         <h3>Traits</h3>
    //         <ul>
    //             {head.Traits.map(s => <li>{s}</li>)}
    //             {plate1.Traits.map(s => <li>{s}</li>)}
    //             {plate2.Traits.map(s => <li>{s}</li>)}
    //             {handle.Traits.map(s => <li>{s}</li>)}
    //         </ul>
    //     </div>;
    // }
}
