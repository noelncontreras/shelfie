import React from "react";
import {Link} from "react-router-dom";


export default function Product(props) {
        return (
            <div className="dashboard-items">
                <div>
                    <img alt="selling item" src={props.url} />
                    <h2>{props.name}</h2>
                    <h3>{`$${props.price}`}</h3>
                </div>
                <div>
                    <Link to="/"><button onClick={() => props.handleDelete(props.id)}>Delete</button></Link>
                    <Link to={`/add/${props.id}`}><button>Edit</button></Link>
                </div>
            </div>
        )
}