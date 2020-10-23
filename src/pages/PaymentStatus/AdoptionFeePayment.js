import React, { useState, useEffect } from 'react'
import Swal from "sweetalert2";

import axios from "../../helpers/axios"

const AdoptionFeePayment = () => {
    const [payment] = useState({ status: "Payment Process is Completed" });

    const adoptData = JSON.parse(localStorage.getItem("adoptform"));
    const url = `formRequest/${adoptData._id}`;

    const successPayment = () => {
        axios.put(url, payment).then(function (result) {
            console.log(result);
        });
        return payment;
    };

    const redirect = () => {
        window.location.replace("/about-me");
    };

    const PaymentLoading = () => {
        let timerInterval
        Swal.fire({
            title: 'Please Wait a Moment',
            text: 'You Will Be Redirected Soon',
            imageUrl: 'https://i.ibb.co/1GxhcgS/hiclipart-com.png',
            timer: 3000,
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
                successPayment();
                redirect();
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer')
            }
        })
    }

    useEffect(() => {
        PaymentLoading();

        //eslint-disable-next-line
    }, []);
    return (
        <div></div>
    )
}

export default AdoptionFeePayment