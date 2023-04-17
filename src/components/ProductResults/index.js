import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsStart } from "../../redux/Products/products.actions";
import Product from "./Product";
import FormSelect from "../Forms/FormSelect";
import { useNavigate, useParams } from "react-router-dom";
const mapState = ({ productsData }) => ({
    products: productsData.products
});

const ProductResults = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(mapState);
    const navigate = useNavigate();
    const { filterType } = useParams();

    const { data } = products;

    useEffect(() => {
        dispatch(
            fetchProductsStart({filterType})
        );
    }, [dispatch,filterType]);

    const handleFilter = (e) => {
        const nextFilter = e.target.value;
        navigate(`/search/${nextFilter}`);
    };

    if (!Array.isArray(data)) return null;
    if (data.length < 1) {
        console.log(products.length)
        return (
            <>
                No search results
            </>
        );
    };

    const configFilters = {
        defaultValue: filterType,
        options: [{
            name: 'Show all',
            value: ''
        }, {
            name: 'Mens',
            value: 'mens'
        }, {
            name: 'Womens',
            value: 'womens'
        }],
        handleChange: handleFilter
    };

    return (
        <>
            <h1>
                Browse Products
            </h1>
            <FormSelect {...configFilters} />
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
                    <Product key={pos} {...configProduct} />
                );
            })}
        </>
    );
};

export default ProductResults;