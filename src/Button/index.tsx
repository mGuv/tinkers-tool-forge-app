import React from 'react';
import styles from './styles.module.css';

interface Props {
    label:string,
    onClick: ()=>void,
    depressed?:boolean
}

const Button: React.FunctionComponent<Props> = ({ label, onClick, depressed }) => {
    let classes:string[] = [styles['button']];

    if(depressed) {
        classes.push(styles['button-depressed'])

        return <input type='button' value={label} className={classes.join(" ")}/>

    } else {
        return <input type='button' value={label} onClick={onClick} className={classes.join(" ")}/>
    }

}

export default Button;