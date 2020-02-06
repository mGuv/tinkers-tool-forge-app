import React from "react";
import BasePart from "./BasePart";
import PartProps from "./PartProps";

export default class BowLimb extends React.PureComponent<PartProps> {
    public constructor(props: PartProps) {
        super(props);
    }

    public render() {
        return <div style={{position:'relative', width:'128px', height: '128px'}}>
            <BasePart style={{position:'absolute', top: 0, left: 0}} materialColor={this.props.materialColor} partName="limb_bottom"/>
            <BasePart style={{position:'absolute', top: 0, left: 0}} materialColor={this.props.materialColor} partName="limb_top"/>
        </div>;
    }
}
