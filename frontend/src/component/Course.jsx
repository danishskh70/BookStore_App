import Cards from "./Cards"
import list from '../../public/list.json'
import { Link } from "react-router-dom"
const Course = () => {
  return (
   <>
   <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
    <div className="pt-32  items-center justify-center text-center">
      <h1 className=" text-2xl  md:text-4xl">Were delighted you come <span className="text-pink-500">Here :)</span> </h1>
      <p className="mt-12">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla culpa expedita porro similique voluptatibus at voluptate quibusdam aperiam asperiores id quas ab, omnis nostrum beatae blanditiis aspernatur vel? Repudiandae quisquam alias maiores ipsa et pariatur! Alias, earum exercitationem? Cumque, aliquam.</p>
     <Link to="/">
     <button className="mt-6 btn btn-secondary px-3 py-3 hover:bg-pink-500 duration-300">Back</button>
     </Link>
    </div>
    <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
      {list.map((item)=>(
        <Cards key={item.id} item={item}/>
      ))}
    </div>
   </div>
   </>
  )
}

export default Course
  