import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:4000/user/login", userInfo);
      toast.success('Login Successfully!');
      if (res.data.user) {
        document.getElementById("my_modal_3").close();
      setTimeout(() => {
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      
      window.location.reload();
      }, 2000);
    
      }
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message);
        setTimeout(() => {
          
        }, 2000);
      } else {
        alert("");
        toast.error('An error occurred. Please try again. : ');
      }
    }
  };
  return (
    <div>
      <Toaster />
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={()=>document.getElementById("my_modal_3").close()}
            >✕</Link>

            <h3 className="font-bold text-lg">Login</h3>
            <div className="mt-4 space-y-2">
              <span>Email</span><br />
              <input
                className="w-80 px-3 py-1 border rounded-md outline-none"  type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                {...register("email", { required: true })} />
              <br />
              {errors.email && <span className="text-sm text-red-500" >This field is required</span>}
            </div>
            <div className="mt-4 space-y-2">
              <span>Password</span><br />
              <input className="w-80 px-3 py-1 border rounded-md outline-none" type="password"
                name="password"
                id="password"
                placeholder="Enter Your Password"
                {...register("password", { required: true })} />

              {errors.password && <span className="text-sm text-red-500" >This field is required</span>}
            </div>
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 cursor-pointer text-white px-5 py-1 border rounded-md hover:bg-pink-600 duration-200 ">Login</button>
              
              <p>Not Registered ? <Link to="/signup" className="underline text-blue-500 cursor-pointer">Sign Up</Link></p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  )
}

export default Login;