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
            height: (32 * scale) + 'px',
            width: (32 * scale) + 'px',
            margin: '5px',
        }}><div style={{
                transform: 'scale(' + scale + ')',
                transformOrigin:'top left',
                display: 'inline-block',
                backgroundColor: '#8b8b8b',
                borderRight: '1px solid white',
                borderLeft: '1px solid #373737',
                borderTop: '1px solid #373737',
                borderBottom: '1px solid white',
            }}>
            <div style={partStyle} className={styles.part} data-hex={this.props.materialColor}/>
            </div>
        </div>;
    }
}
