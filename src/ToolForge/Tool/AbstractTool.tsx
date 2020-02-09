import React from "react";
import styles from "../Forge.module.css";

interface PartRequirement {
    materialType: string;
    part: string;
    component: string;
}

export default abstract class AbstractTool {
    public readonly Name: string;
    private partRequirements: PartRequirement[];

    public constructor(name: string, ...partRequirements: PartRequirement[]) {
        this.Name = name;
        this.partRequirements = partRequirements;
    }

    public getPartList(): PartRequirement[] {
        return this.partRequirements;
    }

    public smallPreview() {
        return <div className={styles.tool}>
            {this.partRequirements.map((requirement) => {
                const partStyle = {
                    backgroundColor: 'rgb(123,123,123)',
                    backgroundImage: 'url("/textures/' + requirement.component + '.png")',
                    WebkitMaskImage: 'url("/textures/' + requirement.component + '.png")'
                }
                return <div style={partStyle} className={styles.part}/>;
            })}
        </div>;
    }
}
