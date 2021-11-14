import React from 'react'
import BoardPixel from './BoardPixel';

interface pixel{
    value: number;
    id: string;
  }

interface Props {
    board: pixel[][]
}


const Board: React.FC<Props> = ({ board }) => {

    return <React.Fragment >{
        board.map(row => row.map(pixel => {
            return <BoardPixel pixel = {pixel.value} key = {pixel.id}   />
        }))
    }
    </React.Fragment>
}

export default Board;
