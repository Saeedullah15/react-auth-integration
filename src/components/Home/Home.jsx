import { useContext } from "react";
import { authContext } from "../../providers/AuthProvider";

const Home = () => {
    const authInfo = useContext(authContext);
    console.log(authInfo);

    return (
        <div>
            <h2 className="text-black font-bold text-center text-4xl mt-24">Welcome to React Auth Integration!!</h2>
            <h2 className="text-black font-bold text-center text-4xl mt-24">{authInfo.name}</h2>
        </div>
    );
};

export default Home;