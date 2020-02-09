import React, { HTMLAttributes } from "react";
import styles from "./Part.module.css"

interface PartProps extends HTMLAttributes<string> {
    partName: string;
    materialColor: string;
}

export default class ToolPart extends React.PureComponent<PartProps> {
    public render() {

        const partStyle = {
            ...this.props.style,
            backgroundColor: this.props.materialColor,
            backgroundImage: 'url("/textures/' + this.props.partName + '.png")',
            WebkitMaskImage: 'url("/textures/' + this.props.partName + '.png")'
        }
        return <div style={partStyle} className={styles.part} data-hex={this.props.materialColor}/>;
    }
}
