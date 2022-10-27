import React from 'react';
import IMG from "../img/key.jpg"


const SignIn = () => {
    return (
        <section>
            <h1 className='text-3xl text-center mt-6 font-bold'>Sign In</h1>
            <div>
                <div className='md: w-[67%] lg:[50]'>
                <img src={IMG} alt='key'></img>
                    <div>
                    <form>
                        <input type="text"/>
                    </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SignIn;
