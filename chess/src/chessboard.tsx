import './chessboard.css';
import React from 'react';

const horin = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const vertical = ['1', '2', '3', '4', '5', '6', '7', '8']

export default function Chessboard(){
    let board = [];
    for (let i = vertical.length-1; i >=0 ; i--) {
        for (let j = 0; j < horin.length; j++) {
            let num = i+j+2;

            if (num % 2 === 0) {
                board.push(<div className='blacktiles'></div>)
            }else{
                board.push(<div className='whitetiles'></div>)
            }
            
        }
    }

    return <div className='chessboard'>{board}</div>
}
