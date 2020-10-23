/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useEffect } from "react";
import axios from "../../helpers/axios";
import { Button } from "react-bootstrap";

import { button } from "./success.styles";

const Success = () => {
    // const getCart = () => {
    //     const cart = JSON.parse(localStorage.getItem("cartProduct"));
    //     let product = cart.map((item) => {
    //         return item._id;
    //     });
    //     console.log(product);
    //     return product;
    // };
    // const getUser = () => {
    //     const user = JSON.parse(localStorage.getItem("user"));
    //     const userId = user.idUser._id;
    //     console.log(userId);
    //     return userId;
    // };
    // const getTotalPrice = () => {
    //     const cart = JSON.parse(localStorage.getItem("cartProduct"));
    //     let totalPrice = cart
    //         .map((item) => parseInt(item.price))
    //         .reduce((a, b) => a + b, 0);
    //     return totalPrice;
    // };
    // const getIdTrans = () => {
    //     const id_trans = localStorage.getItem("id_trans");
    //     return id_trans;
    // };

    // const addNewTransaction = async () => {
    //     let userId = await getUser();
    //     let totalPrice = await getTotalPrice();
    //     let newTrans = await axios.post("transaction/create", {
    //         idUser: userId,
    //         totalPrice: totalPrice,
    //     });
    //     if (newTrans.status === 200) {
    //         console.log("success to add new transaction");
    //         localStorage.setItem("id_trans", newTrans.data.result._id);
    //     }
    // };
    // const addNewTransactionDetails = async () => {
    //     let product = await getCart();
    //     console.log(product);
    //     let idTrans = await getIdTrans();
    //     let newTransDetail = await axios.post("transactionDetails/create", {
    //         idTransaction: idTrans,
    //         idProduct: product,
    //     });
    //     console.log(newTransDetail);
    //     if (newTransDetail.status === 200) {
    //         console.log("succes to create transaction");
    //         localStorage.setItem(
    //             "id_trans_details",
    //             newTransDetail.data.result._id
    //         );
    //         localStorage.removeItem('cartProduct')
    //         localStorage.removeItem("id_trans");
    //         localStorage.removeItem("totalPrice");
    //     }
    // };
    const redirect = () => {
        localStorage.removeItem("cartProduct");
        localStorage.removeItem("totalPrice");
        localStorage.removeItem("id_trans");
        window.location.replace("/");
    };
    // useEffect(() => {
    //     getCart();
    //     getUser();
    //     getTotalPrice();
    //     getIdTrans();
    //     addNewTransaction();
    //     setTimeout(() => {
    //         addNewTransactionDetails();
    //     }, 3000);

    // }, [addNewTransaction]);

    return (
        <div>
            <div className="jumbotron text-center">
                <h1 className="display-3">Your Payment Is Successful</h1>
                <p className="lead">
                    <strong>Please Check Your Email</strong> for invoice
                </p>
                <hr />
                <p>
                    Having trouble? <a href="/">Contact us</a>
                </p>
                <div css={button}>
                    <Button onClick={redirect}>Continue To Homepage</Button>
                </div>
            </div>
        </div>
    );
};

export default Success;
