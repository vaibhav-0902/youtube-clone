import React from 'react'
import moment from 'moment/moment'

const VideoLength = ({ time }) => {

    const videoLengthValue = moment().startOf("day").seconds(time).format("H:mm:ss");

    return (
        <div className="absolute bottom-2 right-2 py-1 px-2 text-white bg-black bg-opacity-50 text-xs rounded-md">
            {videoLengthValue}
        </div>
    )
}

export default VideoLength