import React from "react";

class UserClass extends React.Component{
    constructor(props) {
        super(props);
        console.log(this);
        this.state = {
            count: 0
        }
    }
    render() {
        const { name, location } = this.props;
        const { count } = this.state;
        return <>
            <div>
                <h1> { name }</h1>
                <p>  Location : {location}</p>
                <p>  contact  : @eshasharmaa</p>
                <p> count: { count }</p>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                })}}>  increment </button>
            </div>
        </>
    }
}
export default UserClass;