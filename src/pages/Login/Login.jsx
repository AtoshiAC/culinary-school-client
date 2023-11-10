import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const [disabled, setDisabled] = useState(true);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false);
        }
        else {
            setDisabled(true)
        }
    }

    return (
      <>
        <Helmet>
          <title>Culinary School | Login</title>
        </Helmet>
        <div className="hero min-h-screen bg-gray-300">
          <div className="hero-content flex-col md:flex-row-reverse">
            <div className="text-center md:w-1/2 lg:text-left text-black">
              <h1 className="text-5xl font-bold">Culinary School</h1>
              <p className="py-6">
                Welcome to Taste & Learn Culinary School! We are dedicated to
                providing a comprehensive culinary education and igniting a
                passion for cooking. Our mission is to empower aspiring chefs
                with the skills, knowledge, and cultural understanding necessary
                to excel in the world of gastronomy.
              </p>
            </div>
            <div className="card md:w-1/2 max-w-sm shadow-2xl bg-slate-100 text-black">
              <h1 className="text-5xl text-center mt-3 font-bold">
                Login now!
              </h1>
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered w-3/4"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered w-3/4"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <LoadCanvasTemplate />
                  </label>
                  <input
                    onBlur={handleValidateCaptcha}
                    type="text"
                    name="captcha"
                    placeholder="type the captcha above"
                    className="input input-bordered w-3/4"
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    disabled={false}
                    className="btn btn-primary w-3/4"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <p className="text-center ">
                <small>
                  New Here? <Link to="/signup">Create an account</Link>{" "}
                </small>
              </p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </>
    );
};

export default Login;