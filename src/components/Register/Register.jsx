import { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../providers/AuthProvider";

const Register = () => {
    const { createUser } = useContext(authContext);

    const handleRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        // create user in firebase
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="mt-10">
            <h2 className="text-center mb-5 text-3xl font-semibold">Please register!</h2>
            <form onSubmit={handleRegister} action="" className="relative w-4/12 mx-auto">
                <label htmlFor="name">Name</label>
                <br />
                <input id="name" className="border-gray-300 border w-full mb-4 p-2 rounded" type="text" name="name" placeholder="enter your name" required />
                <br />
                <label htmlFor="email">Email</label>
                <br />
                <input id="email" className="border-gray-300 border w-full mb-4 p-2 rounded" type="email" name="email" placeholder="enter your email" required />
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
                <input className="btn btn-primary mt-3" type="submit" value="Register" />
            </form>
            <p className="text-center mt-4">
                Already have an account? <Link to="/login" className="link text-blue-600">
                    Please login!
                </Link>
            </p>
        </div>
    );
};

export default Register;