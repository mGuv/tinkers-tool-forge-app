import React, { RefObject } from "react";
import Part from "../Materials/Parts/Part";

import styles from './styles.module.css';

interface Content<TPart> {
    label: string,
    value: (part:TPart) => JSX.Element
}

interface Props<TPart extends Part> {
    parts:TPart[],
    selectPart: (part:TPart) => void,
    content: Content<TPart>[]
}

interface State {
    isOpen: boolean
}

class PartSelector<TPart extends Part> extends React.PureComponent<Props<TPart>, State> 
{    
    private containerRef: RefObject<HTMLDivElement>;

    public constructor(props:Props<TPart>)
    {
        super(props);
        this.state = {
            isOpen: false
        }

        this.containerRef = React.createRef<HTMLDivElement>();
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
        this.containerRef.current?.blur();
    }

    private onItemSelected(part: TPart) {
        this.props.selectPart(part);
        this.close();
    }
    

    public render(): JSX.Element
    {
        return (
            <div ref={this.containerRef} tabIndex={0} onBlur={this.close.bind(this)} onFocus={this.open.bind(this)} className={styles.container}>
                {this.props.children}
                {
                    this.state.isOpen ? (<div className={styles.partList}> {this.props.parts.map(p => {
                        return (<div className={styles.partRow} onClick={() => {this.onItemSelected(p)}}>
                            <div style={{gridColumn: "span 1", width: "16px", height:"16px", backgroundColor: p.Material.Color}}></div><div style={{gridColumn: "span 1"}}>{p.Material.Name}</div>
                            {
                                this.props.content.map(c => <div style={{gridColumn: "span 1"}}>{c.label}: {c.value(p)}</div>)
                            }
                            </div>
                        )}
                    )}</div>) : <React.Fragment/>
                }
            </div>
        )
    }
}

export default PartSelector;
