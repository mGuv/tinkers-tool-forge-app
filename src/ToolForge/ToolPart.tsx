import React, { HTMLAttributes } from "react";
import styles from "./Part.module.css"

interface PartProps extends HTMLAttributes<string> {
    partName: string;
    materialColor: string;
}

export default class ToolPart extends React.PureComponent<PartProps> {
    public render() {
        const blue = parseInt(this.props.materialColor.slice(0,2), 16);
        const green = parseInt(this.props.materialColor.slice(2,4), 16);
        const red = parseInt(this.props.materialColor.slice(4,6), 16);

        const partStyle = {
            ...this.props.style,
            backgroundColor: 'rgb(' + red + ',' + green + ',' + blue + ')',
            backgroundImage: 'url("/textures/' + this.props.partName + '.png")',
            WebkitMaskImage: 'url("/textures/' + this.props.partName + '.png")'
        }
        return <div style={partStyle} className={styles.part} data-hex={this.props.materialColor}/>;
    }
}
