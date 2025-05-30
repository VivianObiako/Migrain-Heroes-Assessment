import LogoImageSrc from '../assets/images/logo.png';
import MigraineHeroesSrc from '../assets/images/migraine_heroes.png';
import LockSvg from '../assets/icons/lock.svg';
import { useState } from 'react';
import { Checkbox } from "@/components/ui/checkbox";

const Welcome = () => {
    const [isAgreed, setIsAgreed] = useState(false);

    return (
        <div className="bg-primary w-full h-screen relative flex flex-col items-center justify-center">
            <div className='absolute top-7.5 left-25'>
                <img src={LogoImageSrc} alt="Migraine Heroes" className='h-7.5' />
            </div>

            <div className='flex flex-col items-center gap-7.5'>
                <img src={MigraineHeroesSrc} alt="migraine_heroes" className='w-55 h-55' />
                <div className='flex flex-col items-center gap-3.75'>
                    <h1 className='text-primaryText text-10 font-bold leading-13'>Migraine Assessment</h1>
                    <p className='text-primaryText text-4.5 font-semibold leading-6'>Learn about your unique Migraine Profile, and get recommendations</p>
                    <p className='text-gray82 text-4.5 font-normal leading-6'>This assessment will take 10-20 minutes to complete. Take a cup of tea and a moment for yourself.</p>
                </div>
                <div className='flex flex-col items-center gap-3.75 pt-7.5'>
                    <div className='flex gap-1.5 items-center justify-center'>
                        <img src={LockSvg} alt="lock_svg" className='w-5.5 h-5.5 text-secondary' />
                        <p className='text-secondary text-base leading-5.5 font-normal'>Your data is private and secure. We use it only to tailor your migraine recommendations.</p>
                    </div>

                    <div className='flex items-center justify-center gap-3'>
                        <Checkbox
                            id="agree"
                            className="w-5 h-5 bg-gray-100 border-gray-300 rounded-[6px] data-[state=checked]:text-orange data-[state=checked]:border-orange"
                            checked={isAgreed}
                            onCheckedChange={checked => setIsAgreed(checked === true)}
                        />
                        <label htmlFor="agree" className="text-secondary text-base font-normal leading-5.5">
                            I agree to the <a className='font-semibold underline' href="/">Privacy Policy</a> and the <a href="/" className='font-semibold underline'>Terms of Use</a>.
                        </label>
                    </div>
                </div>

                <button className={
                    `rounded-2xl w-318 h-14 flex items-center justify-center text-4.5 font-semibold leading-5.5 
                    ${isAgreed ? "bg-secondary text-white hover:bg-secondary hover:opacity-90" : "bg-disabled text-grayC7 cursor-not-allowed"}
                `}
                    disabled={!isAgreed}
                >
                    <span>Start My Assessment</span>
                </button>
            </div>
        </div>
    );
};

export default Welcome;