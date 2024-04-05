import React from "react";

class UserClass extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count2:0,
        }
    }
    render() {
        const { name, location } = this.props;
        const { count, count2 } = this.state;
        return <>
            <div>
                <h1> { name }</h1>
                <p>  Location : {location}</p>
                <p>  contact  : @eshasharmaa</p>
                <p> count: {count}</p>
                <p> count2 :{count2} </p>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1,
                        count2: this.state.count2 - 1
                })}}>  increment </button>
            </div>
        </>
    }
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/Esha-Sharmaa");
        const json = await data.json();
    }
}
export default UserClass;