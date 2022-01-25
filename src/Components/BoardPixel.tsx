import React from 'react'



interface Props{
    pixel: number
}

const BoardPixel: React.FC<Props> = ({pixel}) => {
    //console.log(pixel)

    if(pixel ===1){
        return (
            <span  className = {"snake"}>
                {/*pixel*/} 
            </span >
        )
    }else if (pixel ===2){
        return (
            <span  className = {"food"}>
                {/*pixel*/} 
            </span >
        )
    }
    return (
        <span  className = {"pixel"}>
            {/*pixel*/} 
        </span >
    )
}

export default BoardPixel;
