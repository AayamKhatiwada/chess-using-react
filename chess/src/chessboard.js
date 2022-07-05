import React from 'react'
import './chessboard.css'

const vartical = ['a','b','c','d','e','f','g','h']
const horin = ['1','2','3','4','5','6','7','8']

export default function Chessboard(){
    let board = [];
    for (let i = vartical.length-1; i >=0; i--) {
        for (let j = 0; j < horin.length; j++) {
            const num = i +j + 2;
            if (num % 2 === 0){
                board.push(<div className="blacktiles"></div>)
            }else{
                board.push(<div className="whitetiles"></div>)
            }
        }
    }

    function pieces(i,j){
        if (j ==='2' && i === '1'){
            return board.push(<img src='items/pawn_b.png'  alt='pieces' />)
        }
        return 
    }

    return <div className='chessboard'>{board}</div>
}