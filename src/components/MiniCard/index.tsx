import './style.css'
import leaves from '../../assets/leaves.svg'

const MiniCard = ({img}: {img: string}) => {
    return (
        <div className='mini-card'>
            <img width={50} className='leaves-img' src={leaves} />
            <img src={img} alt="" />
        </div>
    )
}

export default MiniCard