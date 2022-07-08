import './tiles.css';

interface Props{
    number: number;
    image?: string;
}


export default function Tiles({number, image}: Props){
    if (number % 2 === 0) {
        return <div className='whitetiles'>
            {image &&
            <div className='pieces' style={{backgroundImage: `url(${image})`}}></div>
            }
        </div>
    }else{
        return <div className='blacktiles'>
            {image &&
            <div className='pieces' style={{backgroundImage: `url(${image})`}}></div>
            }
        </div>
    }
}