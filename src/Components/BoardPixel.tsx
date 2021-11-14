import React from 'react'



interface Props{
    pixel: number
}

const BoardPixel: React.FC<Props> = ({pixel}) => {
    //console.log(pixel)

    if(pixel !==0){
        return (
            <span  className = {"snake"}>
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
