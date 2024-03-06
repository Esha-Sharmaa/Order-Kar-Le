import User from "./User";
import UserClass from "./UserClass";
const About = () => {
    return (
        <div> 
            About us
            <User name={"Esha Sharma (Function) "} location={ "Gwalior"} />
            <UserClass name={"Esha Sharma (class)"} location={ "Gwalior"} />
        </div>
    )
}
export default About;