import React, { Component } from "react";

import "./Form.css";

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            imageUrl: "",
            productname: "",
            price: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleCancel() {
        
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
                    placeholder="Image URL" 
                    onChange={this.handleChange}/>
                    <br />
                    <label>Product Name:</label>
                    <input 
                    name="productName" 
                    placeholder="Product Name" 
                    onChange={this.handleChange}/>
                    <br />
                    <label>Price:</label>
                    <input 
                    name="price" 
                    placeholder="Price" 
                    onChange={this.handleChange}/>
                </div>
                <div className="form-buttons">
                    <button onClick={() => this.handleCancel()}>Cancel</button>
                    <button>Add to Inventory</button>
                </div>
            </section>
        )
    }
}