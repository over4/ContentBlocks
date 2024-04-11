import React from "react";
import "./video.css"

function VideoPlayer(){
    //const link  = "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7138671077232181248"
    //https://www.youtube.com/watch?v=QTX5k52kWeI
    //const link = "https://www.youtube.com/embed/QTX5k52kWeI?si=-U8fQfABZ0hcynzm"
    return (
        <div className = "video-wrapper">
            <div className = "video-text">
                <h1>More Information</h1>
                <div className = "video-gradient"></div>
            </div>
            <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/QTX5k52kWeI?si=-U8fQfABZ0hcynzm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    )
}
export default VideoPlayer