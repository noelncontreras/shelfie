import React, { Component } from "react";
import Product from "../Product/Product";
import axios from "axios";

import "./Dashboard.css";


export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inventory: []
        }
    }

    componentDidMount() {
        axios
            .get("/api/inventory")
            .then(response => this.setState({inventory: response.data}))
            .catch(error => alert(`You have an ${error}`))
    }

    handleDelete = id => {
        axios
            .delete(`/api/product/${id}`);
        axios
            .get("/api/inventory")    
            .then(response => {
                this.setState({inventory: response.data})
            })
    }

    handleEdit = id => {
        axios
            .put(`/api/product/${id}`);
        axios
            .get("api/inventory")
            .then(response => {
                this.setState({inventory: response.data})
            })
    }

    render() {
        return (
            <div className="dashboard-items">
                {this.state.inventory.map(item => {
                    return (
                        <Product
                            img={item.img}
                            name={item.name}
                            price={item.price}
                            id={item.id}
                            handleDelete={this.handleDelete}
                            handleEdit = {this.handleEdit}
                            key={item.id} />
                    )
                })}
            </div>
        )
    }
}