import './style.css'
import Button from '../Button'
import { Link } from 'react-router-dom'

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


                    <Link id='link' to={"/cadastro"}>
                        <Button id='button-below-text' variant={buttonVariant} text={buttonText} onClick={() => { }} />
                    </Link>
                </div>

                <div className='image-button'>
                    <img src={image} alt={altImage} />


                    <Link id='link' to={"/cadastro"}>
                        <Button id='button-below-image' variant={buttonVariant} text={buttonText} onClick={() => { }} />
                    </Link>
                </div>
            </div>
        </section>

    )
}

export default TextImageButton