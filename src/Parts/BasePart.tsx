import InternalPartProps from "./InternalPartProps";
import React from "react";
import styles from "./Part.module.css"

export default class BasePart extends React.PureComponent<InternalPartProps> {
    public constructor(props: InternalPartProps) {
        super(props);
    }

    public render() {

        const partStyle = {
            ...this.props.style,
            backgroundColor: this.props.materialColor,
            backgroundImage: 'url("/textures/' + this.props.partName + '.png")',
            WebkitMaskImage: 'url("/textures/' + this.props.partName + '.png")'
        }
        return <div style={partStyle} className={styles.part} data-hex={this.props.materialColor}>

        </div>;
    }
}
