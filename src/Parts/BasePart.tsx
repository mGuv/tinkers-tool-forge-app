import InternalPartProps from "./InternalPartProps";
import React from "react";

export default class BasePart extends React.PureComponent<InternalPartProps> {
    public constructor(props: InternalPartProps) {
        super(props);
    }

    public render() {
        const blue = parseInt(this.props.materialColor.slice(0,2), 16);
        const green = parseInt(this.props.materialColor.slice(2,4), 16);
        const red = parseInt(this.props.materialColor.slice(4,6), 16);

        const partStyle = {
            ...this.props.style,
            height: '128px',
            width: '128px',
            backgroundColor: 'rgb(' + red + ',' + green + ',' + blue + ')',
            backgroundBlendMode: 'multiply',
            backgroundImage: 'url("/textures/parts/' + this.props.partName + '.png")',
            WebkitMaskImage: 'url("/textures/parts/' + this.props.partName + '.png")'
        }
        return <div style={partStyle} data-hex={this.props.materialColor}>

        </div>;
    }
}
