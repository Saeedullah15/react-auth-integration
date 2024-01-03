import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../../providers/AuthProvider";

const Login = () => {
    const { signInUser } = useContext(authContext);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                navigate("/");
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div className="mt-10">
            <h2 className="text-center mb-5 text-3xl font-semibold">Please login!</h2>
            <form onSubmit={handleLogin} action="" className="relative w-4/12 mx-auto">
                <label htmlFor="email">Email</label>
                <br />
                <input
                    id="email"
                    className="border-gray-300 border w-full mb-4 p-2 rounded"
                    type="email"
                    name="email"
                    placeholder="enter your email"
                    required
                />
                <br />
                <label htmlFor="password">Password</label>
                <br />
                <input
                    id="password"
                    className="border-gray-300 border w-full p-2 rounded"
                    type="password"
                    name="password"
                    placeholder="enter your password"
                    required
                />
                <br />
                <input className="btn btn-primary mt-3" type="submit" value="Login" />
            </form>
            <p className="text-center mt-4">
                Do not have an account? <Link to="/register" className="link text-blue-600">
                    Please register!
                </Link>
            </p>
        </div>
    );
};

export default Login;