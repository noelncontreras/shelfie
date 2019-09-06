import React, { Component } from "react";
import {Link} from "react-router-dom";

import "./Header.css";

export default class Header extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <>
                <header className ="header-bar">
                    <h1>SHELFIE</h1>
                    <nav>
                        <div className="header-links">
                            <Link to='/'><button>Dashboard</button></Link>
                            <Link to='/add'><button>Add Inventory</button></Link>
                        </div>
                    </nav>
                </header>
            </>
        )
    }
}