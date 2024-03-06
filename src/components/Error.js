import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    return (
        <div>
            <h1> opps !!!</h1> 
            <h2> something went wrong </h2>
            <h3> {err.status} : { err.statusText}</h3>
        </div>
    );
}

export default Error;
