import React from "react";
import {connect} from "react-redux";

function Items(props) {

    return (
        <div>
            <h1>Items</h1>
            {props.items.map((itm, idx) =>
                <div key={idx}>
                    <h1>{itm.name}</h1>
                    <h1>{itm.brand}</h1>
                    <h1>{itm.title}</h1>
                </div>
            )}
        </div>
    )

}

const mapStateToProps=(state)=>{
    return{
        items: state.items
    }
}

export default connect(mapStateToProps)(Items);