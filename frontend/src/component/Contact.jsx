import { useForm } from "react-hook-form"
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <>
      <div>
      <div className="flex h-screen items-center justify-center  ">
      <div className="w-[650px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
           

            <h3 className="font-bold text-4xl">Contact Us</h3>
            {/*  */}
            <div className="mt-4 space-y-3">
              <span>Name</span><br />
              <input className="w-80 px-3 py-2 border rounded-md outline-none"
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name"
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && <span className="text-sm text-red-500" >This field is required</span>}
            </div>
            {/*  */}
            <div className="mt-10 space-y-2">
              <span>Email Adress</span><br />
              <input className="w-80 px-3 py-2 border rounded-md outline-none"
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email Address"
                {...register("email", { required: true })} />
              <br />
              {errors.email && <span className="text-sm text-red-500" >This field is required</span>}
            </div>
            {/* Password */}
            <div className="mt-10 space-y-2">
              <span>Message</span><br />
              <input className="w-80 px-3 py-2 border rounded-md outline-none"
                type="text"
                name="massage"
                id="massage"
                placeholder="Enter Your massage"
                {...register("massage", { required: true })}
              />
              <br />
              {errors.massage && <span className="text-sm text-red-500" >This field is required</span>}
            </div>
            {/* login */}
            <div className="mt-12">
              <button className="bg-blue-500 text-white px-5 py-2 border rounded-md hover:bg-blue-600 duration-200 text-white">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>

      </div>
    </>
  )
}

export default Contact
