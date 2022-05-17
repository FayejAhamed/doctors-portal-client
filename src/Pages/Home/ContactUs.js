import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import appointment from '../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <div  style={{
            background: `url(${appointment})`
        }} className="">
            <div className="flex flex-col items-center lg:ml-[-600px]">
                <div className="text-center my-6 ">
                    <p className='text-secondary text-center text-bold text-xl mt-10'>Contact Us</p>
                    <h1 className="text-5xl font-bold text-white">Stay connected with us</h1>

                </div>
                <div className="card  w-full max-w-lg">
                    <div className="card-body">
                        <div className="form-control">
                           
                            <input type="text" placeholder="email" className="input input-bordered" />
                            <br />
                            
                            <input type="text" name="subject" placeholder='Subject' className='input input-bordered' id="" /><br />
                            <textarea className="textarea textarea-bordered" placeholder="Your message"></textarea>
                        </div>
                       <div className='mx-auto mt-2'>
                           <PrimaryButton> Submit </PrimaryButton>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;