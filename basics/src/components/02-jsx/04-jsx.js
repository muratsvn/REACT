import React from 'react'
import styles from "../03-styles/04-external-module.css";

const Jsx4 = () => {
    const names = ["Maria Rodriguez", "Michael Chen", "Sarah Kim", "Ahmed Hassan", "Sarah Kim"];
    const cities = ["Miami", "Toronto", "Seoul", "Cairo"];

    // const nameInfo = names.map((name, index) => {
    //     return <div>{name}</div>
    // });

    const nameInfo = names.map((name, index) => <div>{name}</div>)

    const check = true;

    return (
        <div>
            <ul className='{styles.externalModuleStyling}'>
                {
                    names.map((name, index) => <li key={index}>{name}</li>)
                }
            </ul>
            <select>
                {
                    cities.map((city, index) => <option key={index}>{city}</option>)
                }
            </select>
        </div>
    )
}

export default Jsx4;