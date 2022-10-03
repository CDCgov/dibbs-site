

export default function FooterT() {
    return (
        <div className='container py-5 mx-20'>
            <div className="flex justify-between font-semibold text-blue-700 text-xl">
                <div justify-start>
                    Home
                </div>
                <div className='flex flex-row justify-items-end'>
                    <div>
                        What is a building block?
                    </div>
                    <div className='mx-24'>
                        Our product offerings
                    </div>
                    <div>
                        Partner with us
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <div className='border border-primary w-1/12'></div>
            </div>
            <div className='mt-6'>
                <p className='text-sm font-normal text-blue-700'>© 2022 Copyright Name. All rights reserved.</p>
            </div>
        </div>
    );
}
