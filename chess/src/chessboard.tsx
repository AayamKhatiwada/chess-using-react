import './chessboard.css';
import Tiles from './tiles';

const horin = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
const vertical = ['1', '2', '3', '4', '5', '6', '7', '8']

interface Piece {
    image: string;
    horin: number;
    vertical: number;
}

const pieces: Piece[] = [];

for (let p = 0; p < 2; p++) {
    const type = p === 0 ? "b" :"w";
    const y = p === 0 ? 7 : 0;

    pieces.push({image: `items/knight_${type}.png`, horin: 1 ,vertical: y})
    pieces.push({image: `items/knight_${type}.png`, horin: 5 ,vertical: y})
    pieces.push({image: `items/rook_${type}.png`, horin: 0 ,vertical: y})
    pieces.push({image: `items/rook_${type}.png`, horin: 7 ,vertical: y})
    pieces.push({image: `items/bishop_${type}.png`, horin: 2 ,vertical: y})
    pieces.push({image: `items/bishop_${type}.png`, horin: 6 ,vertical: y})
    pieces.push({image: `items/king_${type}.png`, horin: 4 ,vertical: y})
    pieces.push({image: `items/queen_${type}.png`, horin: 3 ,vertical: y})
}

for (let i = 0; i < 8; i++) {
    pieces.push({image: "items/pawn_w.png", horin: i ,vertical: 1})
}

for (let i = 0; i < 8; i++) {
    pieces.push({image: "items/pawn_b.png", horin: i ,vertical: 6})
}


export default function Chessboard(){
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

            board.push(<Tiles number={num} image={image}/>)        
        }
    }

    return <div className='chessboard'>{board}</div>
}
