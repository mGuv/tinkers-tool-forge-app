import React from "react";
import styles from "../Forge.module.css";
import Part from "../../Materials/Parts/Part";
import HeadPart from "../../Materials/Parts/HeadPart";
import ExtraPart from "../../Materials/Parts/ExtraPart";
import HandlePart from "../../Materials/Parts/HandlePart";

interface PartRequirement<T> {
    part?: T;
    partTexture: string;
    componentTexture: string;
}

interface ToolComponents<T> {
    [key: string]: PartRequirement<T>[]
}

export default abstract class AbstractTool {
    public readonly Name: string;
    protected head: PartRequirement<HeadPart>[] = [];
    protected extra: PartRequirement<ExtraPart>[] = [];
    protected handle: PartRequirement<HandlePart>[] = [];

    public constructor(name: string) {
        this.Name = name;
    }

    public setHead(...heads: PartRequirement<HeadPart>[]) {
        this.head = heads;
    }
    public setExtra(...extra: PartRequirement<ExtraPart>[]) {
        this.extra = extra;
    }
    public setHandle(...handle: PartRequirement<HandlePart>[]) {
        this.handle = handle;
    }

    public getPartList(): ToolComponents<Part> {
        return {
            head: this.head,
            handle: this.handle,
            extra: this.extra,
        };
    }

    private renderPart = (requirement: PartRequirement<Part>) => {
        const partStyle = {
            backgroundColor: 'rgb(123,123,123)',
            backgroundImage: 'url("/textures/' + requirement.componentTexture + '.png")',
            WebkitMaskImage: 'url("/textures/' + requirement.componentTexture + '.png")'
        }
        return <div style={partStyle} className={styles.part} />;
    };

    private renderPartColored = (requirement: PartRequirement<Part>) => {
        const partStyle = {
            backgroundColor: requirement.part?.Material.Color,
            backgroundImage: 'url("/textures/' + requirement.componentTexture + '.png")',
            WebkitMaskImage: 'url("/textures/' + requirement.componentTexture + '.png")'
        }
        return <div style={partStyle} className={styles.part} />;
    };

    public smallPreview() {
        return <div className={styles.tool}>
            {this.head.map(this.renderPart)}
            {this.handle.map(this.renderPart)}
            {this.extra.map(this.renderPart)}
        </div>;
    }

    public largePreview() {
        return <div className={styles.tool}>
            {this.head.map(this.renderPartColored)}
            {this.handle.map(this.renderPartColored)}
            {this.extra.map(this.renderPartColored)}
        </div>;
    }

    public replaceHead(component: PartRequirement<Part>, part: HeadPart) {
        for (const index in this.head) {
            if (this.head[index] === component) {
                this.head[index].part = part;
            }
        }
    }

    public replaceHandle(component: PartRequirement<Part>, part: HandlePart) {
        for (const index in this.handle) {
            if (this.handle[index] === component) {
                this.handle[index].part = part;
            }
        }
    }

    public replaceExtra(component: PartRequirement<Part>, part: ExtraPart) {
        for (const index in this.extra) {
            if (this.extra[index] === component) {
                this.extra[index].part = part;
            }
        }
    }

    abstract getDurability(): number;
}
