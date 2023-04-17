import Button from "../../Forms/Button";
const Product = ({ productThumbnail, productName, productPrice }) => {

    const configAddToCartBtn = {
        type: 'button'
      };

    return (
        <div>
            <div>
                <img alt='thumb' src={productThumbnail} />
            </div>
            <div className="details">
                <ul>
                    <li>
                        <span className="name">
                            {productName}
                        </span>
                    </li>
                    <li>
                        <span className="price">
                            ${productPrice}
                        </span>
                    </li>
                    <li>
                        <div className="addToCart">
                            <Button {...configAddToCartBtn}>
                                Add to cart
                            </Button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Product;