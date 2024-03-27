import './style.css'
import leaves from '../../assets/leaves.svg'


type MediumCardProps = {
    text?: string;
    image?: string;
    altImage?: string;
}

const MediumCard = (mediumCardProps: MediumCardProps) => {
    return (
        <section className='medium-card'>
            <img className='leaves-img' src={leaves} />
            <div className='medium-card-content'>
                <img className='medium-card-image' src={mediumCardProps.image} alt={mediumCardProps.altImage} />
                <h2 className='medium-card-text'>{mediumCardProps.text}</h2>
            </div>
            
        </section>

    )
}

export default MediumCard