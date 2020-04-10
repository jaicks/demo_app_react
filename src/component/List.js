import React, { Component } from 'react';
class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    name: "Nishant",
                    email: "nishant@gmail.com",
                    city: "Bangalore"
                },

                {
                    name: "Jaicky",
                    email: "jaicky@gmail.com",
                    city: "Bihar"
                },

                {
                    name: "Amit",
                    email: "amit@gmail.com",
                    city: "Kolkata"
                },

                {
                    name: "Shankar",
                    email: "shankar@gmail.com",
                    city: "Pune"
                }

            ]

        }
    }
    render() {

        //list.forEach((data,index) =>{})

        console.log(this.state.list);
        return (
            <div>
                {this.state.list.map((data, index) => {
                    return (
                        <div className="list_container">
                            <div className="profile">

                            </div>
                            <div className="list-name">
                                {data.name}
                            </div>
                            <div className="list-email">
                                <p>{data.email}</p></div>
                            <div className="list-city">{data.city}</div>
                        </div>
                    );
                })}
            </div>

        )
    }
}

export default List;