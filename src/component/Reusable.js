import React, { PureComponent } from 'react'

class Reusable extends PureComponent {
    constructor(props){
        super();
        this.state={
            // initial_name: "React is Awesome"

        }
    }
    render() {
        return (
            <div>
                {"Hi" + " " +this.props.name}
            </div>
        )
    }
}

export default Reusable;
