import React from "react";
import Head from "./Head";
import Handle from "./Handle";
import Front from "./Front";
import Back from "./Back";
import styles from "../../Part.module.css"

interface PickaxeProps {
    headColor: string;
    handleColor: string;
    topColor: string;
    bottomColor: string;
}

export default class Preview extends React.PureComponent<PickaxeProps> {
    public render() {
        return <div className={styles.tool}>
            <Handle materialColor={this.props.handleColor}/>
            <Head materialColor={this.props.headColor}/>
            <Front materialColor={this.props.topColor}/>
            <Back materialColor={this.props.bottomColor}/>
        </div>;
    }
}
