import React from "react"
const Audio = ({ videoSrcURL, videoTitle, ...props }) => (
    <div className="video">
        <iframe
            src={videoSrcURL}
            title={videoTitle}
            width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay"
        />
    </div>
)
export default Audio