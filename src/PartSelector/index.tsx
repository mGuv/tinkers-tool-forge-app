import React from "react";
import Part from "../Materials/Parts/Part";

import styles from './styles.module.css';


interface Props<TPart extends Part , TData> {
    parts:TPart[],
    headers: (keyof TData)[],
    data: (part:TPart) => TData[],
    selectPart: (part:Part) => void
}

interface State {
    isOpen: boolean
}

class PartSelector<TPart extends Part, TData> extends React.PureComponent<Props<TPart, TData>, State> 
{    
    public constructor(props:Props<TPart, TData>)
    {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    private open() {
        this.setState({
            isOpen: true
        });
    }

    private close() {
        this.setState({
            isOpen: false
        });
    }

    private onItemSelected(part: TPart) {
        this.props.selectPart(part);
        this.close();
    }
    

    public render(): JSX.Element
    {
        return (
            <div tabIndex={0} onBlur={this.close.bind(this)} onFocus={this.open.bind(this)}>
                <div>Material Picker</div>
                <div>
                {
                    this.state.isOpen ? (<div className={styles.partList}> {this.props.parts.map(p => {
                        return (<div className={styles.partRow} onClick={() => {this.onItemSelected(p)}}>
                            <div style={{gridColumn: "span 1", width: "16px", height:"16px", backgroundColor: p.Material.Color}}></div><div style={{gridColumn: "span 1"}}>{p.Material.Name}</div>
                            {this.props.data(p).map(d => 
                                this.props.headers.map(h =>
                                    <div style={{gridColumn: "span 1"}}>{h}: {d[h]}</div>)
                            )}
                            </div>
                        )}
                    )}</div>) : <React.Fragment/>
                }
                </div>
            </div>
        )
    }
}

export default PartSelector;