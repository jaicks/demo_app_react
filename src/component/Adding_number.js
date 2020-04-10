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
                <div>Enter First Number:<input placeholder="Enter First Number" onChange={(e) => { this.handleFirst(e) }} /></div>
                <div>Enter Second Number:<input placeholder="Enter Second Number" onChange={(e) => { this.handleSecond(e) }} /></div>
                <button onClick = {this.handleadd}>Add</button>
                <button onClick = {this.handleminus}>Minus</button>
                <button onClick = {this.handlemultiply}>Multiply</button>
                <button onClick = {this.handledivide}>Divide</button>
            <div>
                <p>{this.state.first_number}</p>
                <p>{this.state.second_number}</p>
                <p>{this.state.adding}</p>
                <p>{this.state.Minus}</p>
                <p>{this.state.Multiply}</p>
                <p>{this.state.Divide}</p>
            </div>
            </div>

        )
    }
}

export default Form_add;