import React from "react";
import {submit} from "../redux/actions";
import {connect} from "react-redux";

class Home extends React.Component {

    constructor() {
        super();
        this.state={
            form:{
                name:"",
                title:"",
                brand:""
            },
            complete:""
        }
        this.valueChange=this.valueChange.bind(this);
        this.submit=this.submit.bind(this);
    }

    valueChange(event){
        let newForm = this.state.form;
        const name =event.target.name;

        newForm ={
            ...newForm,
            [name]:event.target.value
        }

        this.setState({
            form:newForm
        })
    }

    submit(){
        console.log(this.state.form);

        this.props.objSubmit(this.state.form);

        //error handling
        this.setState({
            form:{
              name:"",
              title:"",
              brand:""
            },
            complete:"This is completed"
        })
    }

    render() {

        return (
            <div>
                <input name={"name"} type="text" placeholder={"Name..."} value={this.state.form.name} onChange={this.valueChange}/>
                <input name={"title"} type="text" placeholder={"Title..."} value={this.state.form.title} onChange={this.valueChange}/>
                <input name={"brand"} type="text" placeholder={"brand..."} value={this.state.form.brand} onChange={this.valueChange}/>
                <button onClick={this.submit}>Submit</button>
                <h1>{this.state.complete}</h1>
            </div>
        )
    }
}

const mapDispatch=(dispatch)=>{
    return({
        objSubmit:(vl)=> dispatch(submit(vl))
    })
}

export default connect(null, mapDispatch)(Home);