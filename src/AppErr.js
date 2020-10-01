import React from 'react';
import logo from './logo.svg';
import './App.css';

const AppErr = (props) => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    <code aria-label={props.errorcode} tabIndex="0">{props.errorcode}</code>
                </p>
                <p>
                    <code aria-label={props.info} tabIndex="0">{props.info}</code>
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
            </a>
            </header>
        </div>
    );
}

export default AppErr;