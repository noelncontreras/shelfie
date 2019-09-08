import React from "react";
import {Link} from "react-router-dom";

import "./Product.css";


export default function Product(props) {
        return (
            <div className="item-container">
                <div>
                    <img alt="selling item" src={props.img} />
                    <h2>{props.name}</h2>
                    <h3>{`$${props.price}`}</h3>
                </div>
                <div>
                    <Link to="/"><button onClick={() => props.handleDelete(props.id)}>Delete</button></Link>
                    <Link to={`/edit/${props.id}`}><button onClick={() => props.handleEdit(props.id)}>Edit</button></Link>
                </div>
            </div>
        )
}