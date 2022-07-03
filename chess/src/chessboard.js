import React from 'react'
import './chessboard.css'

const vartical = ['a','b','c','d','e','f','g','h']
const horin = ['1','2','3','4','5','6','7','8']

export default function Chessboard(){
    let board = [];
    for (let i = vartical.length-1; i >=0; i--) {
        for (let j = 0; j < horin.length; j++) {
            const num = i +j + 2;
            if (num % 2 === 0) {
                board.push(<div className='whitetiles'>{vartical[j]}{horin[i]}</div>)
            }else{
                board.push(<div className='blacktiles'>{vartical[j]}{horin[i]}</div>)
            }
        }
    }

    return <div className='chessboard'>{board}</div>
}