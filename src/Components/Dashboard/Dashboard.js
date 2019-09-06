import React, { Component } from "react";

import "./Dashboard.css";

export default class Dashboard extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {

    //     }
    // }

    render(props) {
        const inventoryMapped = this.props.inventory.map((item, i) => {
            return (
                <div key={i} className="dashboard-items">
                    <img alt="selling item" src={item.imageUrl} />
                    <h2>{item.name}</h2>
                    <h2>{`$${item.price}`}</h2>
                </div>
            )            
        })
        return (
            <div>
                {inventoryMapped}
            </div>
        )
    }
}