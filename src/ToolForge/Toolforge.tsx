import React, { useState } from "react";

import AbstractTool, { PartRequirement } from "./Tool/AbstractTool";
import Pickaxe from "./Tool/Pickaxe";
import Hammer from "./Tool/Hammer";
import Shuriken from "./Tool/Shuriken";
import Part from "../Materials/Parts/Part";

import styles from "./Forge.module.css";
import PartSelector from "../PartSelector";
import HeadPart from "../Materials/Parts/HeadPart";
import ToolPart from "./ToolPart";
import HandlePart from "../Materials/Parts/HandlePart";
import ExtraPart from "../Materials/Parts/ExtraPart";

interface ToolforgeProps {
    partList: { [key: string]: Part[] };
}

interface ToolforgeState {
    selectedTool?: AbstractTool;
    switcher: boolean;
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

function buildPartPickers(selectedTool: AbstractTool, partList: { [key: string]: Part[] }, selectedParts: Map<PartRequirement, Part>, setSelectedParts: (req: PartRequirement, part: Part) => void ) {
    return <>
        {selectedTool.getRequirements().map(c => {
            switch (c.type) {
                case "HEAD":
                    return <PartSelector
                        parts={partList.head as HeadPart[]}
                        selectPart={(p) => {
                            setSelectedParts(c, p);
                        }}
                        content={[
                            { label: "Attack", value: p => <span>{p.Attack.toString()}</span> },
                            { label: "Durability", value: p => <span>{p.Durability.toString()}</span> },
                            { label: "Preview", value: p => <ToolPart partName={c.partTexture} materialColor={p.Material.Color} /> },
                        ]}><ToolPart partName={c.partTexture} materialColor={selectedParts.get(c)?.Material.Color || '#8b8b8b'} scale={2} /></PartSelector>;
                case "HANDLE":
                    return <PartSelector
                        parts={partList.handle as HandlePart[]}
                        selectPart={(p) => {
                            setSelectedParts(c, p);
                        }}
                        content={[
                            { label: "Durability", value: p => <span>{p.Durability.toString()}</span> },
                            { label: "Modifier", value: p => <span>{p.Modifier.toString()}</span> },
                            { label: "Preview", value: p => <ToolPart partName={c.partTexture} materialColor={p.Material.Color} /> },
                        ]}><ToolPart partName={c.partTexture} materialColor={selectedParts.get(c)?.Material.Color || '#8b8b8b'} scale={2} /></PartSelector>;
                case "EXTRA":
                    return <PartSelector
                        parts={partList.extra as ExtraPart[]}
                        selectPart={(p) => {
                            setSelectedParts(c, p);
                        }}
                        content={[
                            { label: "Durability", value: p => <span>{p.ExtraDurability.toString()}</span> },
                            { label: "Preview", value: p => <ToolPart partName={c.partTexture} materialColor={p.Material.Color} /> },
                        ]}><ToolPart partName={c.partTexture} materialColor={selectedParts.get(c)?.Material.Color || '#8b8b8b'} scale={2} /></PartSelector>;
            }
            
            return null;
        })}
    </>;
}

export default Toolforge;
