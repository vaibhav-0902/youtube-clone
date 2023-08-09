import React from 'react';
import PageNotFoundImage from "../../Assets/404.png";

const PageNotFound = () => {
    return (
        <div className="flex bg-black justify-center h-full">
            <div className='flex  items-center'>
                <img className='img-fluid max-h-[620px]' src={PageNotFoundImage} alt="this not found too XD" />
            </div>
        </div>
    )
}

export default PageNotFound;