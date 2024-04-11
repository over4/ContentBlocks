import React from "react";
import { useState, useEffect} from "react";
import './carousel.css'

function Carousel(){
    const [caroState,setCaroState] = useState(0)
    const [autoPlay,setAutoPlay] = useState(true)
    let timeOut = null
    useEffect(()=>{
        timeOut = autoPlay && setTimeout(() => {
            setCaroState(caroState < images.length - 1 ? caroState + 1 : 0)
        }, 2500);
    })
    let images = [
        {
            image: "https://app.contentblocks.com/svgs/VIDEOLESSON.png",
            header: "Preview Lesson From a Course",
        },
        {
            image: "https://app.contentblocks.com/svgs/SECTIONBLOCKS.png",
            header: "Give a Free Resource",
        },
        {
            image: "https://app.contentblocks.com/svgs/MINICOURSE.png",
            header: "Offer a Free Mini Course",
        }
    ]
    return (
        <div className = "carousel" onMouseEnter={()=>{setAutoPlay(false); clearTimeout(timeOut)}} onMouseLeave = {()=>{setAutoPlay(true); clearTimeout(timeOut)}}>
            <div className = "carousel_wrapper" >
                {images.map((ele,index) => {
                    return (
                        <div key = {index} className = {index==caroState ? "carousel_card carousel_card-active" : "carousel_card"}>
                            <div className = "image-wrapper" >
                                <div className="carousel_arrow_left" onClick={() => setCaroState(caroState > 0 ? caroState - 1 : images.length - 1)}> &lsaquo; </div>
                                <img className = "card_image" src={ele.image}></img>
                                <div className="carousel_arrow_right" onClick={() => setCaroState(caroState < images.length - 1 ? caroState + 1 : 0)}> &rsaquo; </div>
                            </div>
                            <div className = "carousel_pagination">
                                {images.map((ele,index) => {
                                    return (
                                    <div key= {index} className = {index == caroState ? "pagination_dot pagination_dot-active" : "pagination_dot"} onClick = {()=> setCaroState(index)}></div>
                                    )
                                })}
                            </div>
                            <div className = "card_text">
                                <h2>{ele.header}</h2>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Carousel