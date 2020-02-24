import React, { useState } from "react";

import AbstractTool, { PartRequirement } from "./Tool/AbstractTool";
import Pickaxe from "./Tool/Pickaxe";
import Hammer from "./Tool/Hammer";
import Shuriken from "./Tool/Shuriken";
import Part from "../Materials/Parts/Part";
import PartSelector from "../PartSelector";
import ToolPart from "./ToolPart";
import RenderPartListContent from "./PartListContent";

import styles from "./Forge.module.css";


interface ToolforgeProps {
    partList: { [key: string]: Part[] };
}

interface ToolIconProps {
    onClick: (() => void);
    preview: JSX.Element;
}

const ToolIcon: React.FunctionComponent<ToolIconProps> = ({onClick,  preview}) => (
    <div className={styles.toolIcon} onClick={onClick}>
        {preview}
    </div>
)

interface ToolTopInfoProps {
    tool: AbstractTool
    selectedParts: Map<PartRequirement, Part>
}

const ToolTopInfo: React.FunctionComponent<ToolTopInfoProps> = ({tool, selectedParts}) =>(
    <>
        <h2>{tool.Name}</h2>
        <div>Durability: {tool.getDurability(selectedParts)}</div>
        <div>Mining Level: Obsidian</div>
        <div>Mining Speed: 3.6</div>
        <div>Attack: 5.7</div>
        <div>Modifiers: 3</div>
    </>
)

const ToolTopInfoEmpty: React.FunctionComponent = () => (
    <>
        <h2>No Tool Selected</h2>
        <p>Select a tool to build</p>
    </>
)

const toolOptions = [
    new Pickaxe(),
    new Hammer(),
    new Shuriken()
]

const Toolforge: React.FunctionComponent<ToolforgeProps> = ({partList}) => {

    const [selectedTool, setSelectedTool] = useState<AbstractTool | null>(null);
    const [selectedParts, setSelectedParts] = useState<Map<PartRequirement, Part>>(new Map());
    const updateSelectedParts = (partRequirement: PartRequirement, part: Part) => setSelectedParts(new Map(selectedParts.set(partRequirement, part)))

    const partPickers = selectedTool && buildPartPickers(selectedTool, partList, selectedParts, updateSelectedParts);

    const toolSelectors =
        <div className={styles.toolSelector}>
            {toolOptions.map(tool => 
                <ToolIcon onClick={() => setSelectedTool(tool)} preview={tool.smallPreview()}/>)
            }
        </div>

    const toolInfo =
        <>
            <div className={styles.topInfo}>
                {selectedTool ? <ToolTopInfo tool={selectedTool} selectedParts={selectedParts}/> : <ToolTopInfoEmpty/>}
            </div>
            <div className={styles.bottomInfo}>
                <h2>Traits</h2>
                Cheap

                {selectedTool && selectedTool.largePreview(selectedParts)}
            </div>
        </>

    return (
        <div className={styles.forge}>
            {toolSelectors}

            <div className={styles.builder}>
                {partPickers}
            </div>

            {toolInfo}
        </div>
    );
}

function buildPartPickers(selectedTool: AbstractTool, partList: { [key: string]: Part[] }, selectedParts: Map<PartRequirement, Part>, setSelectedPart: (req: PartRequirement, part: Part) => void ) {
    return <>
        {selectedTool.getRequirements().map(c => 
            <PartSelector
                parts={partList[c.type]}
                selectPart={(p) => {
                    setSelectedPart(c, p);
                }}
                content={RenderPartListContent(c)}><ToolPart partName={c.partTexture} materialColor={selectedParts.get(c)?.Material.Color || '#8b8b8b'} scale={2} /></PartSelector>
        )}
    </>;
}

export default Toolforge;
