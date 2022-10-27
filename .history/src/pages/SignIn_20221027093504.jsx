import React from 'react';


const SignIn = () => {
    return (
        <section>
            <h1 className='text-3xl text-center mt-6 font-bold'>Sign In</h1>
            <div>
                <div className='md:w-[67%] lg:w-[50%] mb-12 md:mb-6'>
                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2146&q=80" alt='key'
                className='w-full rounded-t-2xl'></img>
                    <div>
                    <form className='w-full md:w[67%] lg:w[40%]'>
                        <input className='' type="text"/>
                    </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SignIn;
