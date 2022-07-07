import './tiles.css';

interface Props{
    number: number;
    image?: string;
}


export default function Tiles({number, image}: Props){
    if (number % 2 === 0) {
        return <div className='whitetiles'><img src={image} alt=''/></div>
    }else{
        return <div className='blacktiles'><img src={image} alt='' /></div>
    }
}