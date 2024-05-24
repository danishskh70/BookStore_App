import Course from "../component/Course"
import Footer from "../component/Footer"
import Navbar from "../component/Navbar"
const Courses = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
      <Course/>
      </div> 
      <Footer /> 
    </div>
  )
}

export default Courses
 