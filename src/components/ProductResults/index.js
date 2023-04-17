import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsStart } from "../../redux/Products/products.actions";
import Product from "./Product";
const mapState = ({ productsData }) => ({
    products: productsData.products
});

const ProductResults = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(mapState);

    const {data} = products;

    useEffect(() => {
        dispatch(
            fetchProductsStart()
        );
    }, [dispatch]);

    if (!Array.isArray(data)) return null;
    if (data.length < 1) {
        console.log(products.length)
        return (
            <>
                No search results
            </>
        );
    };

    return (
        <>
            <h1>
                Browse Products
            </h1>
            {data.map((product, pos) => {
                const { productThumbnail, productName, productPrice } = product;
                if (!productThumbnail || !productName ||
                    typeof productPrice === 'undefined') return null;
                    const configProduct = {
                        productThumbnail,
                        productName,
                        productPrice
                      };
                return (
                    <Product key={pos} {...configProduct}/>
                );
            })}
        </>
    );
};

export default ProductResults;