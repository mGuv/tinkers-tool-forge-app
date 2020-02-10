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
    private head: PartRequirement<HeadPart>[] = [];
    private extra: PartRequirement<ExtraPart>[] = [];
    private handle: PartRequirement<HandlePart>[] = [];

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

    public smallPreview() {
        return <div className={styles.tool}>
            {this.head.map(this.renderPart)}
            {this.handle.map(this.renderPart)}
            {this.extra.map(this.renderPart)}
        </div>;
    }

    public withPart<T>(component: string, part: T) {

    }
}
