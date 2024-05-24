import Contact from "../component/Contact"
import Footer from "../component/Footer"
import Navbar from "../component/Navbar"

const Contacts = () => {
  return (
    <>
     <Navbar/>
      <div className="min-h-screen">
      <Contact/>
      </div> 
      <Footer/> 
    </>
  )
}

export default Contacts
