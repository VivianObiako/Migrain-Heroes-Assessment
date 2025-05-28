import LogoImageSrc from '../assets/images/logo.png';
import MigraineHeroesSrc from '../assets/images/migraine_heroes.png';
import LockSvg from '../assets/icons/lock.svg';
import { useState } from 'react';

const Welcome = () => {
    const [isAgreed, setIsAgreed] = useState(false);

    return (
        <div className="bg-[#F8F8E9] w-full h-screen relative flex flex-col items-center justify-center">
            <div className='absolute top-[30px] left-[100px]'>
                <img src={LogoImageSrc} alt="Migraine Heroes" className='h-7.5' />
            </div>

            <div className='flex flex-col items-center gap-[30px]'>
                <img src={MigraineHeroesSrc} alt="migraine_heroes" className='w-[220px] h-[220px]' />
                <div className='flex flex-col items-center gap-[15px]'>
                    <h1 className='text-[#323232] text-[40px] font-bold leading-[52px]'>Migraine Assessment</h1>
                    <p className='text-[#323232] text-[18px] font-semibold leading-6'>Learn about your unique Migraine Profile, and get recommendations</p>
                    <p className='text-[#828282] text-[18px] font-normal leading-6'>This assessment will take 10-20 minutes to complete. Take a cup of tea and a moment for yourself.</p>
                </div>
                <div className='flex flex-col items-center gap-[15px] pt-[30px]'>
                    <div className='flex gap-1.5 items-center justify-center'>
                        <img src={LockSvg} alt="lock_svg" className='w-[22px] h-[22px] text-[#5A6756]' />
                        <p className='text-[#5A6756] text-base leading-[22px] font-normal'>Your data is private and secure. We use it only to tailor your migraine recommendations.</p>
                    </div>

                    <div className='flex items-center justify-center gap-3'>
                        <input
                            type="checkbox"
                            id="agree"
                            className="w-5 h-5 text-[#DA713A] bg-gray-100 border-gray-300 rounded-sm"
                            onChange={(e) => setIsAgreed(e.target.checked)}
                            checked={isAgreed}
                        />
                        <label htmlFor="agree" className="text-[#5A6756] text-base font-normal leading-[22px]">
                            I agree to the <a className='font-semibold underline' href="/">Privacy Policy</a> and the <a href="/" className='font-semibold underline'>Terms of Use</a>.
                        </label>
                    </div>
                </div>

                <button className={
                    `rounded-[16px] w-[318px] h-[56px] flex items-center justify-center text-[18px] font-semibold leading-[22px] 
                    ${isAgreed ? "bg-[#5A6756] text-white hover:bg-[#5A6756f0]" : "bg-[#E2E6DA] text-[#C7C5C5] cursor-not-allowed"}
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