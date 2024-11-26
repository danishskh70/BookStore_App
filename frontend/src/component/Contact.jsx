import { useForm } from "react-hook-form";
import contact from "../../public/contact.png";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex items-center justify-center h-screen w-screen  overflow-hidden " >
      <div
        className="relative  rounded-lg shadow-xl w-[80%] max-w-[1000px] h-[100%] min-h-[1000px] p-5"
        style={{
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* Image Section */}
        <div className="absolute top-0 left-0 h-[75%] w-[75%] rounded-tl-lg overflow-hidden">
          <img
            src={contact}
            alt="Contact"
            className="h-full w-full object-cover transform scale-100"
          />
        </div>

        {/* Form Section */}
        <div
          className="absolute bottom-0 right-0 pt-10 pr-10 pb-0 pl-10 w-[55%] h-[61%] bg-white bg-opacity-90 rounded-br-lg"
          style={{
            transform: "translateY(-90px)", // Moves the form up slightly more
          }}
        >
          <h3 className="font-extrabold text-4xl text-gray-800 mb-6">Contact Us</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name Field */}
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700"
              >
                Name
              </label>
              <input
                className="w-full px-6 py-4 border border-gray-300 rounded-lg shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                className="w-full px-6 py-4 border border-gray-300 rounded-lg shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email Address"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                className="w-full px-6 py-4 border border-gray-300 rounded-lg shadow-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                name="message"
                id="message"
                placeholder="Enter Your Message"
                rows="4"
                {...register("message", { required: true })}
              ></textarea>
              {errors.message && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg shadow-xl hover:bg-blue-700 duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
