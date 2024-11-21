
// https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20
import '../../App.css'
import { IoArrowForwardCircle } from "react-icons/io5";
import React, { useEffect, useState } from 'react'
import { IoArrowBackCircle } from "react-icons/io5";
const ImageSlider = () => {
const [getimages, setgetImages] = useState([]);

const [images, setImages] = useState(0);
  useEffect(()=>{
    const fetchData = async()=>{
      try{
        let data = await fetch("https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20")
       
        
      let images = await data.json();
      setgetImages(images.photos);
      
      
      }
      catch( error){
        console.log(error);
      }
    }
   fetchData(); 
  },[])

  function moveForward(){
    if(images===getimages.length-1){
      setImages(0);
    } else{
      setImages(images+1);
    }
  }
  
  function moveBackward() {
    if (images === 0) {
      setImages(getimages.length-1);
    } else {
      setImages(images -1);
    }
  }
  return (
    <div className="container">
      <h1>ImageSlider </h1>

      <div className="image-area">
        <IoArrowBackCircle
          className="arrow left"
          size={80}
          onClick={() => {
            moveBackward();
          }}
        />
        <div className="image-div">
          {getimages.map((image, ind) =>
            ind === images ? (
              <img className="image-slider-img" src={image.url} alt="" />
            ) : null
          )}
          <div className="buttons">
            {getimages.map((_, ind) => (
              <button
                className={
                  images === ind ? "current-indicator" : "back-indicator"
                }
              ></button>
            ))}
          </div>
          <IoArrowForwardCircle
            className="arrow right"
            onClick={() => {
              moveForward();
            }}
            size={80}
          />
        </div>
      </div>
    </div>
  );
}

export default ImageSlider