import React from "react";
import HeadPart from "../Materials/Parts/HeadPart";
import HandlePart from "../Materials/Parts/HandlePart";
import BowPart from "../Materials/Parts/BowPart";
import BowStringPart from "../Materials/Parts/BowStringPart";
import ExtraPart from "../Materials/Parts/ExtraPart";
import FletchingPart from "../Materials/Parts/FletchingPart";
import ShaftPart from "../Materials/Parts/ShaftPart";

import PickaxePreview from "../Parts/Tool/Pickaxe/Preview";
import HammerPreview from "../Parts/Tool/Hammer/Preview";

import classNames from 'classnames';
import styles from "./Forge.module.css";

interface ToolforgeProps {
    headParts: HeadPart[]
    handleParts: HandlePart[]
    bowParts: BowPart[]
    bowStringParts: BowStringPart[]
    extraParts: ExtraPart[]
    fletchingParts: FletchingPart[]
    shaftParts: ShaftPart[]
}

interface ToolforgeState {

}

export default class Toolforge extends React.Component<ToolforgeProps>
{
    render() {
        return <div className={styles.forge}>
            <div className={styles.toolSelector}>
                <div className={classNames(
                    styles.tool,
                    styles.selected
                )}>
                    <PickaxePreview
                        headColor="FF0000"
                        handleColor="00FF00"
                        bindingColor="0000FF"
                    />
                </div>
                <div className={styles.tool}>
                    <HammerPreview
                        headColor="FF0000"
                        handleColor="00FF00"
                        topColor="0000FF"
                        bottomColor="0000FF"
                    />
                </div>
            </div>

            <div className={styles.builder}>

            </div>

            <div className={styles.topInfo}>
                <h2>Pickaxe</h2>
                
                Durability: 950/950<br/>
                Mining Level: Obsidian<br/>
                Mining Speed: 3.6<br/>
                Attack: 5.7<br/>
                Modifiers: 3<br/>
            </div>

            <div className={styles.bottomInfo}>
                <h2>Traits</h2>

                Cheap
            </div>
        </div>;
    }
}
