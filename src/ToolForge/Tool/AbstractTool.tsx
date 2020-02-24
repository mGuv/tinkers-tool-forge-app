import React from "react";
import styles from "../Forge.module.css";
import Part from "../../Materials/Parts/Part";

export interface PartRequirement {
    type: "head" | "extra" | "handle";
    partTexture: string;
    componentTexture: string;
}

interface ToolComponents<T> {
    [key: string]: PartRequirement[]
}

export default abstract class AbstractTool {
    public readonly Name: string;
    protected partRequirements: PartRequirement[] = [];

    public constructor(name: string) {
        this.Name = name;
    }

    public setRequirements(...reqs: PartRequirement[]) {
        this.partRequirements = reqs;
    }

    public getRequirements(): PartRequirement[] {
        return this.partRequirements;
    }

    private renderPart = (requirement: PartRequirement) => {
        const partStyle = {
            backgroundColor: 'rgb(123,123,123)',
            backgroundImage: 'url("/textures/' + requirement.componentTexture + '.png")',
            WebkitMaskImage: 'url("/textures/' + requirement.componentTexture + '.png")'
        }
        return <div style={partStyle} className={styles.part} />;
    };

    private renderPartColored = (requirement: PartRequirement, selectedParts: Map<PartRequirement, Part>) => {
        const partStyle = {
            backgroundColor: selectedParts.get(requirement)?.Material.Color,
            backgroundImage: 'url("/textures/' + requirement.componentTexture + '.png")',
            WebkitMaskImage: 'url("/textures/' + requirement.componentTexture + '.png")'
        }
        return <div style={partStyle} className={styles.part} />;
    };

    public smallPreview() {
        return <div className={styles.tool}>
            {this.partRequirements.map(this.renderPart)}
        </div>;
    }

    public largePreview(selectedParts: Map<PartRequirement, Part>) {
        if (!this.isBuilt(selectedParts)) {
            return null;
        }

        return <div className={styles.tool}>
            {this.partRequirements.map(p => this.renderPartColored(p, selectedParts))}
        </div>;
    }

    abstract getDurability(selectedParts: Map<PartRequirement, Part>): number;

    public isBuilt(selectedParts: Map<PartRequirement, Part>): boolean {
        return (
            this.partRequirements.every(r => selectedParts.has(r))
        );
    }
}
