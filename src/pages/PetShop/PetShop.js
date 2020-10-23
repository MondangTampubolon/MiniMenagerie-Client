/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import axios from "../../helpers/axios"

import Pagination from '../../components/Pagination'
import ProductCard from '../../components/ProductCard/ProductCard';
import {
    container,
    head_bg,
    sortFilter,
    // shopText,
} from './PetShop.styles'
import head_bg_img from '../../assets/bg_shop.png'

const PetShop = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sort, setSort] = useState('newest');
    const [filter, setFilter] = useState('all');

    const [currentProduct, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(9);


    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await axios.get("/product");
            localStorage.setItem(
                "products",
                JSON.stringify(response.data.result)
            );
            setProducts(response.data.result);
            setTimeout(() => setLoading(false), 3000);
        };

        getProducts();
    }, []);



    //get current products
    const indexOfLastProduct = currentProduct * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    //handle sorting product
    const handleChangeSort = (event) => {
        setSort(event.target.value)
    }

    const getSort = async () => {
        if (sort === "newest" && filter === "all") {
            let url = `http://localhost:8000/product`;
            const response = await axios.get(url)
            setProducts(response.data.result)
        } else if (sort === "newest" && filter === "catfood") {
            let url = `http://localhost:8000/product/filter?search=${filter}`;
            const response = await axios.get(url)
            setProducts(response.data.result)
        } else if (sort === "newest" && filter === "dogfood") {
            let url = `http://localhost:8000/product/filter?search=${filter}`;
            const response = await axios.get(url)
            setProducts(response.data.result)
        } else if (sort === "newest" && filter === "acc") {
            let url = `http://localhost:8000/product/filter?search=${filter}`;
            const response = await axios.get(url)
            setProducts(response.data.result)
        } else if (sort === "newest" && filter === "vitdrugs") {
            let url = `http://localhost:8000/product/filter?search=${filter}`;
            const response = await axios.get(url)
            setProducts(response.data.result)
        } else if (sort === "price-desc" && filter === "all") {
            let url = `http://localhost:8000/sortProductHighToLow`;
            const response = await axios.get(url)
            setProducts(response.data.sorted)
        } else if (sort === "price-desc" && filter === "catfood") {
            let url = `http://localhost:8000/sortProductHighToLow?filter=${filter}`;
            const response = await axios.get(url)
            setProducts(response.data.sorted)
        } else if (sort === "price-desc" && filter === "dogfood") {
            let url = `http://localhost:8000/sortProductHighToLow?filter=${filter}`;
            const response = await axios.get(url)
            setProducts(response.data.sorted)
        } else if (sort === "price-desc" && filter === "acc") {
            let url = `http://localhost:8000/sortProductHighToLow?filter=${filter}`;
            const response = await axios.get(url)
            setProducts(response.data.sorted)
        } else if (sort === "price-desc" && filter === "vitdrugs") {
            let url = `http://localhost:8000/sortProductHighToLow?filter=${filter}`;
            const response = await axios.get(url)
            setProducts(response.data.sorted)
        } else if (sort === "price-asc" && filter === "all") {
            let url = `http://localhost:8000/sortProductLowToHigh`;
            const response = await axios.get(url)
            setProducts(response.data.sorted)
        } else if (sort === "price-asc" && filter === "catfood") {
            let url = `http://localhost:8000/sortProductLowToHigh?filter=${filter}`;
            const response = await axios.get(url)
            setProducts(response.data.sorted)
        } else if (sort === "price-asc" && filter === "dogfood") {
            let url = `http://localhost:8000/sortProductLowToHigh?filter=${filter}`;
            const response = await axios.get(url)
            setProducts(response.data.sorted)
        } else if (sort === "price-asc" && filter === "acc") {
            let url = `http://localhost:8000/sortProductLowToHigh?filter=${filter}`;
            const response = await axios.get(url)
            setProducts(response.data.sorted)
        } else if (sort === "price-asc" && filter === "vitdrugs") {
            let url = `http://localhost:8000/sortProductLowToHigh?filter=${filter}`;
            const response = await axios.get(url)
            setProducts(response.data.sorted)
        }
    }

    //handle filter product
    const handleChangeFilter = (event) => {
        setFilter(event.target.value)
    }

    return (
        <div>
            {/* Head Background */}
            <Container fluid css={container}>
                <Row>
                    <img style={{ position: "relative", textAlign: "center" }} css={head_bg} src={head_bg_img} alt="banner" />
                    {/* <div css={shopText}>
                        Buy Necessities For <br/> Your New Best Friend
                        <p style={{fontSize:"30px", fontWeight:"500"}}>at Mini Menagerie One Stop Shop!</p>
                    </div> */}
                </Row>
            </Container>
            {/* End of Head Background */}

            {/* Product List */}
            <Container css={container} style={{alignItems:"center"}}>
                    <div style={{marginLeft:"18px"}}>
                        <p>{products.length} results</p>
                    </div>
                    <div>
                    <Col css={sortFilter}>
                        <p>Sort By</p>
                        <Form.Group as={Col} controlId="formGridSort">
                            <Form.Control as="select" defaultValue="Newest" onChange={handleChangeSort} onClick={getSort}>
                                <option value="newest">Newest</option>

                                <option value="price-desc">Price (High to Low)</option>
                                <option value="price-asc">Price (Low to High)</option>
                            </Form.Control>
                        </Form.Group>


                        <p>Filter By</p>
                        <Form.Group as={Col} controlId="formGridFilter">

                            <Form.Control as="select" defaultValue="Newest" onChange={handleChangeFilter} onClick={getSort}>
                                <option value="all">All</option>

                                <option value="catfood">Cat Food</option>
                                <option value="dogfood">Dog Food</option>
                                <option value="acc">Accessories</option>
                                <option value="vitdrugs">Vitamin</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    </div>
            </Container>

            <Container css={container}>
                <Row>
                    <ProductCard products={currentProducts} loading={loading} />
                </Row>
            </Container>

            <div>
                <Pagination
                    productsPerPage={productsPerPage}
                    totalProducts={products.length}
                    paginate={paginate}
                />
            </div>
            {/* End of Product List */}
        </div>
    );
};

export default PetShop;
