import React, { Component } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

import "./Form.css";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: "",
            product_name: "",
            price: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    componentDidUpdate(prevProps) {
        if(prevProps!== this.props) {
            this.setState({imageUrl: "", product_name: "", price: 0})
        }
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleAdd() {
        // let {product_name, price, imageUrl} = this.state; <--can use to destructure
        axios
        .post("/api/product", {
            product_name: this.state.product_name,
            price: this.state.price,
            img: this.state.imageUrl
        })
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            alert(`Something went wrong.`)
        })
    }

    //David or Eric:
    //below handleCancel does not work. I'm sure it's an easy fix, but I couldnt get it
    //didn't want to spend more time on it when i can do other stuff.
    //I think using a FORM to make input fields would work better in this case...

    //cancel button does not work
    handleCancel() {
        this.setState({imageUrl: "", product_name: "", price: 0});
    }

    render() {
        return (
            <section className="form-section">
                <div>
                    <img src="https://img.icons8.com/ios/50/000000/no-image.png" alt="not available"/>
                </div>
                <div className="input-box">
                    <label>Image URL:</label>
                    <input 
                    name="imageUrl"
                    value={this.state.imageUrl}
                    placeholder="Image URL" 
                    onChange={this.handleChange}/>
                    <br />
                    <label>Product Name:</label>
                    <input 
                    value={this.state.product_name}
                    name="product_name" 
                    placeholder="Product Name" 
                    onChange={this.handleChange}/>
                    <br />
                    <label>Price:</label>
                    <input 
                    value={this.state.price}
                    name="price" 
                    placeholder="Price" 
                    onChange={this.handleChange}/>
                </div>
                <div className="form-buttons">
                    <Link to="/"><button onClick={this.handleCancel}>Cancel</button></Link>
                    <Link to="/"><button onClick={this.handleAdd}>{this.props.match.params.id ? "Edit Item" : "Add to Inventory"}</button></Link>
                </div>
            </section>
        )
    }
}