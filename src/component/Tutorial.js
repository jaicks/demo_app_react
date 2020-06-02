import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';

class Tutorial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initial_value: 0,
        }
    }
    handleClick_add_click =()=>{
        console.log("handleClick_add_click")
        if(this.state.initial_value<10){
            this.setState({initial_value: this.state.initial_value + 1})
        }
        
    }

    handleClick_minus_click=()=>{
        if(this.state.initial_value>0){
            this.setState({initial_value:this.state.initial_value - 1 })
        }
    }
    render() {
        return (
            <div>
                <div>{this.props.state}</div>
                <button className="btn btn-primary mr-2 mb-3" onClick= {this.handleClick_add_click}>
                    <AddIcon/>
                </button>
                <button className="btn btn-primary mb-3 " onClick= {this.handleClick_minus_click}>
                    <RemoveRoundedIcon/>
                </button>
                <div >
                    {this.state.initial_value}</div>
                
                {/* <div>{this.state.initial_value}</div> */}
            </div>
        )
    }
}

export default Tutorial;