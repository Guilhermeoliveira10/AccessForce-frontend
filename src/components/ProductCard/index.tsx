import './style.css'

type ProductCardProps = {
    leftHeaderImg?: string,
    rightHeaderImg?: string,
    text?: string,
    cardImage?: string
    altImage?: string[];
}

const ProductCard = (productCardProps: ProductCardProps) => {
    return (
        <div className='card'>
            <div className='card-header'>
                <img
                    className='card-header-image'
                    src={productCardProps.leftHeaderImg} alt={productCardProps.altImage ? productCardProps.altImage[0] : ''} />
                <img id='card-header-icon' src={productCardProps.rightHeaderImg} alt={productCardProps.altImage ? productCardProps.altImage[1] : ''} />
            </div>

            <h1 id='card-text'>{productCardProps.text}</h1>

            <img id='card-image' src={productCardProps.cardImage}
                alt={productCardProps.altImage ? productCardProps.altImage[2] : ''} />

        </div>
    )
}

export default ProductCard