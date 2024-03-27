import './style.css'
import Button from '../Button'

type TextImageButtonProps = {
    text?: string;
    image?: string;
    altImage?: string;
    buttonVariant: "primary" | "secondary";
    buttonText: string;

}

const TextImageButton = ({ text, image, altImage, buttonVariant, buttonText }: TextImageButtonProps) => {
    return (
        <section className='section'>
            <div className='text-image-button'>
                <div className="text-button">
                    <h2>{text}</h2>
                    <Button id='button-below-text' variant={buttonVariant} text={buttonText} onClick={() => { }} />
                </div>
                
                <div className='image-button'>
                    <img src={image} alt={altImage} />
                    <Button id='button-below-image' variant={buttonVariant} text={buttonText} onClick={() => { }} />
                </div>
            </div>
        </section>

    )
}

export default TextImageButton