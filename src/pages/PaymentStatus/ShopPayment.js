import React, { useEffect } from 'react'
import Swal from "sweetalert2";

import axios from "../../helpers/axios"

const Loading = () => {
    const redirect = () => {
        localStorage.removeItem("cartProduct");
        localStorage.removeItem("totalPrice");
        localStorage.removeItem("id_trans");
        localStorage.removeItem("id_trans_details");
        window.location.replace("/");
    };

    const PaymentLoading = () => {
        let timerInterval
        Swal.fire({
            title: 'Please Wait a Moment',
            text: 'You Will Be Redirected Soon',
            imageUrl: 'https://i.ibb.co/y5GR4Rn/cc-payment.png',
            timer: 5000,
            timerProgressBar: true,
            showConfirmButton: false,
            willOpen: () => {
                timerInterval = setInterval(() => {
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = Swal.getTimerLeft()
                        }
                    }
                }, 100)
            },
            onClose: () => {
                clearInterval(timerInterval)
                redirect();
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
            }
        })
    }

    const getCart = () => {
        const cart = JSON.parse(localStorage.getItem("cartProduct"));
        let product = cart.map((item) => {
            return item._id;
        });
        return product;
    };

    const getUser = () => {
        const user = JSON.parse(localStorage.getItem("user"));
        const userId = user.idUser._id;
        return userId;
    };

    const getTotalPrice = () => {
        const cart = JSON.parse(localStorage.getItem("cartProduct"));
        let totalPrice = cart
            .map((item) => parseInt(item.price))
            .reduce((a, b) => a + b, 0);
        return totalPrice;
    };

    const getIdTrans = () => {
        const id_trans = localStorage.getItem("id_trans");
        return id_trans;
    };

    const addNewTransaction = async () => {
        let userId = await getUser();
        let totalPrice = await getTotalPrice();
        let newTrans = await axios.post("transaction/create", {
            idUser: userId,
            totalPrice: totalPrice,
        });
        if (newTrans.status === 200) {
            console.log("success to add new transaction");
            localStorage.setItem("id_trans", newTrans.data.result._id);
        }
    };

    const addNewTransactionDetails = async () => {
        let product = await getCart();
        let idTrans = await getIdTrans();
        let newTransDetail = await axios.post("transactionDetails/create", {
            idTransaction: idTrans,
            idProduct: product,
        });
        if (newTransDetail.status === 200) {
            console.log("succes to create transaction");
            localStorage.setItem(
                "id_trans_details",
                newTransDetail.data.result._id
            );
            // localStorage.removeItem('cartProduct')
            // localStorage.removeItem("id_trans");
            // localStorage.removeItem("totalPrice");
        }
    };

    useEffect(() => {
        PaymentLoading();
        getCart();
        getUser();
        getTotalPrice();
        getIdTrans();
        addNewTransaction();
        setTimeout(() => {
            addNewTransactionDetails();
        }, 3000);

        //eslint-disable-next-line
    }, []);

    return (
        <div></div>
    )
}

export default Loading
