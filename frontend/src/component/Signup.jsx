import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import Login from "./Login"

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <div className="flex h-screen items-center justify-center  ">
      <div className="w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

            <h3 className="font-bold text-lg">Signup</h3>
            {/*  */}
            <div className="mt-4 space-y-2">
              <span>Name</span><br />
              <input className="w-80 px-3 py-1 border rounded-md outline-none"
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Fullname"
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && <span className="text-sm text-red-500" >This field is required</span>}
            </div>
            {/*  */}
            <div className="mt-4 space-y-2">
              <span>Email</span><br />
              <input className="w-80 px-3 py-1 border rounded-md outline-none"
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                {...register("email", { required: true })} />
              <br />
              {errors.email && <span className="text-sm text-red-500" >This field is required</span>}
            </div>
            {/* Password */}
            <div className="mt-4 space-y-2">
              <span>Password</span><br />
              <input className="w-80 px-3 py-1 border rounded-md outline-none"
                type="password"
                name="password"
                id="password"
                placeholder="Enter Your Password"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && <span className="text-sm text-red-500" >This field is required</span>}
            </div>
            {/* login */}
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white px-5 py-1 border rounded-md hover:bg-pink-600 duration-200 text-white">Signup</button>
              <p className="text-xl">Have account ? <button to="/" className="underline text-blue-500 cursor-pointer" onClick={() => document.getElementById("my_modal_3").showModal()}>Login</button></p>
            </div><Login />{" "}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
