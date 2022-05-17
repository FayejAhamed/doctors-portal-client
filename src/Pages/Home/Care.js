import React from 'react';
import treatment from '../../assets/images/treatment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Care = () => {
    return (
        <div className="hero bg-white min-h-screen bg-base-200 text-center">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-80 lg:w-1/2 '>
                    <img  src={treatment} alt='' />
                </div>
                <div>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton> GET STARTED</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Care;