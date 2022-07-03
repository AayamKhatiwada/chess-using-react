import React from 'react'
import './chessboard.css'

const horin = ['a','b','c','d','e','f','g','h']
const vartical = ['1','2','3','4','5','6','7','8']

export default function Chessboard(){
    let board = [];
    for (let i = 0; i < horin.length; i++) {
        for (let j = 0; j < vartical.length; j++) {
            board.push(<span>{horin[i]}{vartical[j]}</span>)
        }
    }

    return <div className='chessboard'>{board}</div>
}