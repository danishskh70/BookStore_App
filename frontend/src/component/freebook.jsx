import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import axios from 'axios';
import { useEffect, useState } from 'react';

const freebook = () => {
  const [Book,setBook]=useState([])
  useEffect(()=>{
   const getBook =async()=>{
    try {
    const res = await axios.get("https://bookstore-app-61ty.onrender.com/book");
    console.log(res.data)
     setBook(res.data.filter((data)=>data.category==="free"))
    } catch (error) {
      console.log(error)
    }
   }
   getBook();
  },[]) 
  var settings = {
    dots: true,  
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 py-5 px-4'>
    <div>
    <h1 className='font-semibold text-xl pb-2 pt-2'>Free Offered Courses</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat beatae earum, ipsa nostrum, perspiciatis magni blanditiis aperiam sit consequuntur itaque aspernatur temporibus fuga?</p>
    </div>
   
   <div >
   <Slider {...settings}>
  {Book.map((item)=>(
    <Cards item={item} key={item.id}/>
  ))}
</Slider>
   </div>
   </div>
   </>
  )
}

export default freebook
     