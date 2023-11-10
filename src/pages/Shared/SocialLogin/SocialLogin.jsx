import { useContext } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const { googleSignIn, signInWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('https://culinary-siyf.onrender.com/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }

    const handlesignInWithGithub = () => {
        signInWithGithub()
        .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('https://culinary-siyf.onrender.com/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
        }

    return (
      <div>
        <div className="divider"></div>
        <div className="w-full text-center my-4">
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-circle btn-outline"
          >
            <FaGoogle></FaGoogle>
          </button>
        </div>
        <div className="w-full text-center my-4 ">
          <button
            onClick={handlesignInWithGithub}
            className="btn btn-circle btn-outline"
          >
            <FaGithub></FaGithub>
          </button>
        </div>
      </div>
    );
};

export default SocialLogin;