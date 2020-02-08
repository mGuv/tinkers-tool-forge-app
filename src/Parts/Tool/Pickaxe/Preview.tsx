import React from "react";
import Head from "./Head";
import Handle from "./Handle";
import Binding from "./Binding";
import styles from "../../Part.module.css";

interface PickaxeProps {
    headColor: string;
    handleColor: string;
    bindingColor: string;
}

export default class Preview extends React.PureComponent<PickaxeProps> {
    public render() {
        return <div className={styles.tool}>
            <Head materialColor={this.props.headColor}/>
            <Handle materialColor={this.props.handleColor}/>
            <Binding materialColor={this.props.bindingColor}/>
        </div>;
    }
}
