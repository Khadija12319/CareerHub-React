import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h4>oops!!!</h4>
            <Link to="/">Go back to home</Link>
        </div>
    );
};

export default ErrorPage;