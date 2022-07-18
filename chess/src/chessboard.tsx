import React, { useRef, useState } from 'react';
import './chessboard.css';
import Tiles from './tiles';

const horin = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const vertical = ['1', '2', '3', '4', '5', '6', '7', '8']

interface Piece {
    image: string;
    horin: number;
    vertical: number;
}

const initalState : Piece[] = [];

for (let p = 0; p < 2; p++) {
    const type = p === 0 ? "b" :"w";
    const y = p === 0 ? 7 : 0;

    initalState.push({image: `items/knight_${type}.png`, horin: 1 ,vertical: y})
    initalState.push({image: `items/knight_${type}.png`, horin: 5 ,vertical: y})
    initalState.push({image: `items/rook_${type}.png`, horin: 0 ,vertical: y})
    initalState.push({image: `items/rook_${type}.png`, horin: 7 ,vertical: y})
    initalState.push({image: `items/bishop_${type}.png`, horin: 2 ,vertical: y})
    initalState.push({image: `items/bishop_${type}.png`, horin: 6 ,vertical: y})
    initalState.push({image: `items/king_${type}.png`, horin: 4 ,vertical: y})
    initalState.push({image: `items/queen_${type}.png`, horin: 3 ,vertical: y})
}

for (let i = 0; i < 8; i++) {
    initalState.push({image: "items/pawn_w.png", horin: i ,vertical: 1})
}

for (let i = 0; i < 8; i++) {
    initalState.push({image: "items/pawn_b.png", horin: i ,vertical: 6})
}


export default function Chessboard(){

    const [xGrid, setGridX] = useState(0);
    const [yGrid, setGridY] = useState(0);

    const [pieces, setPieces] = useState<Piece[]>(initalState);

    const chessboardRef = useRef<HTMLDivElement>(null);

    let current: HTMLElement | null = null;

    function grab(e: React.MouseEvent){
        const element = e.target as HTMLElement;
        const chessboard = chessboardRef.current;
        if(element.classList.contains('pieces') && chessboard){
            const xGrid = Math.floor((e.clientX - chessboard.offsetLeft) / 100);
            const yGrid = Math.abs(Math.ceil((e.clientY - chessboard.offsetTop - 800) / 100));

            setGridX(xGrid);
            setGridY(yGrid);

            const x = e.clientX - 40
            const y = e.clientY - 40
            element.style.position = "absolute";
            element.style.left = `${x}px`;
            element.style.top = `${y}px`;

            current = element;
        }
    }

    function move(e: React.MouseEvent){
        const chessboard = chessboardRef.current;
        if(current && chessboard){
            const minX = chessboard.offsetLeft - 25;
            const minY = chessboard.offsetTop -25;
            const maxX = chessboard.offsetLeft + chessboard.clientWidth -75;
            const maxY = chessboard.offsetTop + chessboard.clientHeight -75;
            const x = e.clientX - 40
            const y = e.clientY - 40
            current.style.position = "absolute";
            current.style.left = `${x}px`;
            current.style.top = `${y}px`;

            if (x < minX){
                current.style.left = `${minX}px`;
            }else if (x > maxX){
                current.style.left = `${maxX}px`;
            }else{
                current.style.left = `${x}px`;
            }

            if (y < minY){
                current.style.top = `${minY}px`;
            }else if (y > maxY){
                current.style.top = `${maxY}px`;
            }else{
                current.style.top = `${y}px`;
            }
        }

    }

    function down(e: React.MouseEvent){
        const chessboard = chessboardRef.current;
        if (current && chessboard){

            setPieces((value) =>{
                const pieces = value.map((p)=>{
                    if (p.horin === xGrid && p.vertical === yGrid){
                        p.horin = 5;
                        p.vertical = 5;
                    }
                    return p;
                });
                return pieces;
            });
            current = null;
        }
    }


    let board = [];
    for (let i = vertical.length-1; i >=0 ; i--) {
        for (let j = 0; j < horin.length; j++) {
            let num = i+j+2;
            let image = '';

            pieces.forEach(p =>{
                if (p.horin === j && p.vertical === i) {
                    image = p.image
                }
            })

            board.push(<Tiles key={`${i},${j}`} number={num} image={image}/>)        
        }
    }

    return <div className='chessboard' 
                onMouseMove={e => move(e)} 
                onMouseDown={e => grab(e)}
                onMouseUp={e => down(e)}
                ref={chessboardRef}
                >{board}</div>
}
