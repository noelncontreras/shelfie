import React, { Component } from "react";
import {Link} from "react-router-dom";
import axios from "axios";

import "./Form.css";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: "",
            name: "",
            price: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        // this.handleAdd = this.handleAdd.bind(this);
    }

    componentDidMount() {
        if(this.props.match.params) {
            const {id} = this.props.match.params;
            axios
                .get(`/api/products/${id}`)
                .then(response => {
                    this.setState({
                        img: response.data[0].img, 
                        name: response.data[0].name, 
                        price: response.data[0].price
                    })
                })
        }
    }

    componentDidUpdate(prevProps) {
        if(prevProps!== this.props) {
            this.setState({img: "", name: "", price: 0})
        }
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    // handleAdd() {
    //     // let {product_name, price, imageUrl} = this.state; <--can use to destructure
    //     axios
    //     .post("/api/product", {
    //         product_name: this.state.product_name,
    //         price: this.state.price,
    //         img: this.state.imageUrl
    //     })
    //     .then(response => {
    //         console.log(response)
    //     })
    //     .catch(err => {
    //         alert(`Something went wrong.`)
    //     })
    // }

    handleAddOrEdit = () => {
        const {img, name, price} = this.state;
        if (this.props.match.params.id){
            const {id} = this.props.match.params;
            let editedItem = {img: img, name: name, price: price}
        axios
            .put(`/api/product/${id}`, editedItem)
        } else {
            let addedItem = {img: img, name: name, price: price}
        axios
            .post("/api/product", addedItem)
            this.handleCancel()
        }
    }

    handleCancel() {
        this.setState({img: "", name: "", price: 0});
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
                    name="img"
                    value={this.state.img}
                    placeholder="Image URL" 
                    onChange={this.handleChange}/>
                    <br />
                    <label>Product Name:</label>
                    <input 
                    value={this.state.name}
                    name="name" 
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
                    <button onClick={this.handleCancel}>Cancel</button>
                    <Link to="/"><button onClick={this.handleAddOrEdit}>{this.props.match.params.id ? "Edit Item" : "Add to Inventory"}</button></Link>
                </div>
            </section>
        )
    }
}