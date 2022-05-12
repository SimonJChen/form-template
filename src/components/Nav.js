import React from "react";
import {Link} from "react-router-dom";

class Nav extends React.Component {
    constructor() {
        super();
    }

    render(){
        return(
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/items"}>Items</Link>
            </nav>
        )
    }
}

export default Nav