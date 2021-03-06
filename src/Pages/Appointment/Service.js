import React from 'react';

const Service = ({ service, setTreatment }) => {
    const{name, slots, price} = service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-secondary mx-auto text-center">{name}</h2>
                <p className='text-center'>{
                    slots.length > 0
                     ? <span>{slots[0]}</span>
                     : <span className='text-red-500'>Try another date</span>
                    }</p>
                <p className='text-center'>{slots.length} {slots.length> 1? 'spaces': 'space'} available</p>
                <p className='text-center'><small>Price: ${price}</small></p>
                <div className="card-actions justify-center pt-4">
                     <label
                     disabled={slots.length ===0} 
                     onClick={() => setTreatment(service)} htmlFor="booking-modal" className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;