import React from "react";
import BasePart from "../../BasePart";
import PartProps from "../../PartProps";

export default class Back extends React.PureComponent<PartProps> {
    public constructor(props: PartProps) {
        super(props);
    }

    public render() {
        return <BasePart materialColor={this.props.materialColor} partName="hammer/back"/>;
    }
}
