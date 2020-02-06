import InternalPartProps from "./InternalPartProps";
import React from "react";

export default class BasePart extends React.PureComponent<InternalPartProps> {
    public render() {
        const partStyle = {
            height: '128px',
            width: '128px',
            backgroundColor: this.props.materialColor,
            backgroundBlendMode: 'multiply',
            backgroundImage: 'url("/textures/parts/pickaxe_head.png")',
            WebkitMaskImage: 'url("/textures/parts/pickaxe_head.png")'
        }
        return <div style={partStyle}>

        </div>;
    }
}
