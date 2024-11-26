import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';


const Signup = () => {
  const navigate = useNavigate();
  const location =useLocation()
  const from=location.state?.from?.pathname || "/"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:4000/user/signup", userInfo);
      
      if (res.data.user) {
        toast.success(res.data.message)
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        navigate(from,{replace:true})
      }
    } catch (err) {
      const errorMessage = err.response?.data.message || "An error occurred. Please try again.";
      toast.error(errorMessage);
    }
  };

  const openLoginModal = () => document.getElementById("loginModal").close().navigate("/");

  const closeSignupModal = () => {
    document.getElementById("signupModal").close();
    navigate("/"); 
  };

  return (
    <div className="flex h-[400px] items-center justify-center">
      <Toaster />
      <div className="w-[600px]">
        <dialog id="signupModal" className="modal-box" open>
          <form onSubmit={handleSubmit(onSubmit)}>
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={closeSignupModal}
            >
              ✕
            </button>

            <h3 className="font-bold text-lg text-center">Signup</h3>

            <div className="mt-4">
              <div className="space-y-1">
                <label htmlFor="nameInput" className="block text-sm font-medium">
                  Name
                </label>
                <input
                  id="nameInput"
                  name="name"
                  type="text"
                  placeholder="Enter Your Fullname"
                  className="w-full px-3 py-2 border rounded-md outline-none"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-sm text-red-500">This field is required</span>
                )}
              </div>

              <div className="space-y-1 mt-4">
                <label htmlFor="emailInput" className="block text-sm font-medium">
                  Email
                </label>
                <input
                  id="emailInput"
                  name="email"
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full px-3 py-2 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">This field is required</span>
                )}
              </div>

              <div className="space-y-1 mt-4">
                <label htmlFor="passwordInput" className="block text-sm font-medium">
                  Password
                </label>
                <input
                  id="passwordInput"
                  name="password"
                  type="password"
                  placeholder="Enter Your Password"
                  className="w-full px-3 py-2 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-sm text-red-500">This field is required</span>
                )}
              </div>
            </div>

            <div className="flex flex-row items-center mt-6">
              <button
                type="submit"
                className="bg-pink-500 text-white w-40 m-5 py-2 rounded-md hover:bg-pink-600 transition duration-200"
              >
                Signup
              </button>
              <p className="mt-1 text-lg text-center">
                Have an account?{" "}
                <button
                  type="button"
                  className="underline text-blue-500 cursor-pointer"
                  onClick={openLoginModal}
                >
                  Login
                </button>
              </p>
            </div>
          </form>
        </dialog>
      </div>
    </div>
  );
};

export default Signup;