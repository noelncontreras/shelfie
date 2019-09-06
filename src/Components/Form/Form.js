import React, { Component } from "react";
// import axios from "axios";

import "./Form.css";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: "",
            productName: "",
            price: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        // this.handleAdd = this.handleAdd.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }
    //I couldn't finish this!!! i stopped on step 1 - part 6.
    // handleAdd() {
    //     axios.post("/api/product", {
    //         name: this.state.productName,
    //         price: this.state.price,
    //         img: this.state.imageUrl
    //     }).then(response => {
    //         this.setState({this.props.getRequest})
    //     })
    // }

    //David or Eric:
    //below handleCancel does not work. I'm sure it's an easy fix, but I couldnt get it
    //didnt want to spend more time on it when i can do other stuff.
    //I think using a FORM to make input fields would work better in this case...

    //i had an onClick on "add to Inventory": onClick={() => this.handleAdd()}
    handleCancel() {
        this.setState({imageUrl: "", productName: "", price: 0});
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