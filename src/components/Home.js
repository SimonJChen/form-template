import React from "react";

class Home extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <input type="text" placeholder={"Name..."}/>
                <input type="text" placeholder={"Title..."}/>
                <input type="text" placeholder={"Name..."}/>
                <button>Submit</button>
            </div>
        )
    }
}

export default Home;