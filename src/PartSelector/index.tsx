import React from "react";
import Part from "../Materials/Parts/Part";

import styles from './styles.module.css';

interface Content<TPart> {
    label: string,
    value: (part:TPart) => JSX.Element
}

interface Props<TPart extends Part> {
    parts:TPart[],
    selectPart: (part:TPart) => void,
    content: (part:TPart) => JSX.Element
}

interface State {
    isOpen: boolean
}

class PartSelector<TPart extends Part> extends React.PureComponent<Props<TPart>, State> 
{    
    public constructor(props:Props<TPart>)
    {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    private toggle() {
        this.setState(prevState => ({
            isOpen: !prevState.isOpen
        }));
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
    

    public render()
    {
        return (
            <div tabIndex={0} onBlur={this.close.bind(this)} onClick={this.toggle.bind(this)} className={styles.container}>
                {this.props.children}
                {
                    this.state.isOpen && (<div className={styles.partList}> {this.props.parts.map(p => {
                        return (<div className={styles.partRow} onClick={(ev) => {ev.stopPropagation(); this.onItemSelected(p)}}>
                            <div style={{gridColumn: "span 1", width: "16px", height:"16px", backgroundColor: p.Material.Color}}></div><div style={{gridColumn: "span 1"}}>{p.Material.Name}</div>
                            {
                                this.props.content(p)
                            }
                            </div>
                        )}
                    )}</div>)
                }
            </div>
        )
    }
}

export default PartSelector;
