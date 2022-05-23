import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const { id } = useParams();
    const url = `https://frozen-reaches-25206.herokuapp.com/booking/${id}`
    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }

    const stripePromise = loadStripe('pk_test_51L2U51Gg854iD71nu8G8rLXwXVRqCAyVipHiX4JexzKZPbuBKOLwIzSXLbI9r3p9959shNL0hKIMeLKJyoU8twTM00f3VGc58a');

    return (
        <div>

            <div className="card mx-auto w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className='text-success'>Hello, {appointment.patienName} </p>
                    <h2 className="card-title">Please Pay for {appointment.treatment}</h2>
                    <p>Your Appointment: <span className='text-orange-700'>{appointment.date}</span> at {appointment.slot}</p>
                    <p>Please pay: ${appointment.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment}/>
                    </Elements>
                </div>
            </div>
        </div>

    );
};

export default Payment;