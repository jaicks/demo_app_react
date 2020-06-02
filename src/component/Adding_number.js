import React, { Component } from 'react'

class Form_add extends Component {
    constructor(props){
        super();
        this.state = {
            first_number: "",
            second_number: "",
            adding: "",
            Minus:"",
            Multiply:"",
            Divide:"",
            percentage:""
        }

    }

    componentWillMount(){
        console.log("This is an Example of Will Mount Lifecycle")
        this.setState({percentage: "This is percentage"})
    }


    componentDidMount(){
        console.log("This is an Example of Did Mount Lifecycle")
    }

    handleFirst = (e) => {
        console.log(e.target.value)
        this.setState({ first_number: e.target.value })
    }
    handleSecond = (e) => {
        console.log(e.target.value)
        this.setState({ second_number: e.target.value })
    }

    handleadd = (e) => {
        console.log(this.state.first_number +  this.state.second_number )
        let addValue = Number(this.state.first_number) + Number(this.state.second_number)
        this.setState({ adding: addValue })
    }
    handleminus = (e) => {
        console.log(this.state.first_number +  this.state.second_number )
        let minusValue = Number(this.state.first_number) - Number(this.state.second_number)
        this.setState({ Minus: minusValue })
    }
    handlemultiply = (e) => {
        console.log(this.state.first_number +  this.state.second_number )
        let multiplyValue = Number(this.state.first_number) * Number(this.state.second_number)
        this.setState({ Multiply: multiplyValue })
    }
    handledivide = (e) => {
        console.log(this.state.first_number +  this.state.second_number )
        let divideValue = Number(this.state.first_number) % Number(this.state.second_number)
        this.setState({ Divide: divideValue })
    }
    render() {
        console.log("This is render")
        console.log(this.state.percentage)
        return (
            <div>
                <h2 > Calculator</h2>
                <div className="form-group">
                    <label for ="first_number" className="sr-only">First Number</label>
                    <input className="form-control" placeholder="Enter First Number" onChange={(e) => { this.handleFirst(e) }} />
                    </div>
                <div className="form-group">
                    <label for =" second_number" className="sr-only"> Second Number</label>
                    <input className="form-control " placeholder="Enter Second Number" onChange={(e) => { this.handleSecond(e) }} />
                    </div>
                    <div className ="form-group">
                <button className ="btn btn-primary mr-1" onClick = {this.handleadd}>Add</button>
                <button className ="btn btn-primary mr-1" onClick = {this.handleminus}>Minus</button>
                <button className ="btn btn-primary mr-1" onClick = {this.handlemultiply}>Multiply</button>
                <button className ="btn btn-primary mr-1" onClick = {this.handledivide}>Divide</button>
                </div>
            <div className = "list_container">

            <div className="list-name">{this.state.first_number}</div>
            <div className="list-name">{this.state.second_number}</div>
            <div className="list-name">{this.state.adding}</div>
            <div className="list-name">{this.state.Minus}</div>
            <div className="list-name">{this.state.Multiply}</div>
            <div className="list-name">{this.state.Divide}</div>

    
            </div>
            </div>

        )
    }
}

export default Form_add;