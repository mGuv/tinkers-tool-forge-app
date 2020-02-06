import InternalPartProps from "./InternalPartProps";
import React from "react";

export default class BasePart extends React.PureComponent<InternalPartProps> {
    public constructor(props: InternalPartProps) {
        super(props);
    }

    public render() {
        const partStyle = {
            ...this.props.style,
            height: '128px',
            width: '128px',
            backgroundColor: '#' + this.props.materialColor,
            backgroundBlendMode: 'multiply',
            backgroundImage: 'url("/textures/parts/' + this.props.partName + '.png")',
            WebkitMaskImage: 'url("/textures/parts/' + this.props.partName + '.png")'
        }
        return <div style={partStyle}>

        </div>;
    }
}
