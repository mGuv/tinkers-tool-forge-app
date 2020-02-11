import React, { HTMLAttributes } from "react";
import styles from "./Forge.module.css"

interface PartProps extends HTMLAttributes<string> {
    partName: string;
    materialColor: string;
    scale?: number;
}

export default class ToolPart extends React.PureComponent<PartProps> {
    public render() {
        const scale = this.props.scale ? this.props.scale : 1;

        const partStyle = {
            ...this.props.style,
            backgroundColor: this.props.materialColor,
            backgroundImage: 'url("/textures/' + this.props.partName + '.png")',
            WebkitMaskImage: 'url("/textures/' + this.props.partName + '.png")'
        }
        return <div style={{
                transform: 'scale(' + scale + ')',
                transformOrigin:'top left',
                height: (32 * scale).toString() + 'px',
                width: (32 * scale).toString() + 'px',
                display: 'inline-block',
            }}>
            <div style={partStyle} className={styles.part} data-hex={this.props.materialColor}/>
        </div>;
    }
}
