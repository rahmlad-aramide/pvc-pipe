import { useState, useRef } from 'react';
import { authentication } from '../config'
import { RecaptchaVerifier, signInWithPhoneNumber} from "firebase/auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VerifyModal from './VerifyModal';
import { usePhoneNumber } from '../contexts/NumberContext';

const Hero = () => {
  const inputRef = useRef(null);
  const { phoneNumber, updatePhoneNumber } = usePhoneNumber();
  const [verifyModal, setVerifyModal] = useState(false);

  const toastParams = {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    }
  const notify = (val) => toast.success(`${val}`, toastParams);
  const warn = (val) => toast.error(`${val}`, toastParams);
  const inform = (val) => toast.info(`${val}`, toastParams);

    const handleChange = (e)=> {
      const cleanedValue = e.target.value.replace(/[^0-9]/g, '');
      updatePhoneNumber(cleanedValue);
    }
   
    const handleSubmit = (e) => {
      e.preventDefault();
      if(phoneNumber.length !== 11){
        inform("Number must be 11 values")
      } else {
        const numValue = parseInt(phoneNumber);
        inputRef.current.value = '';
        notify(`Requesting verification code on 0${numValue}`);
        const intNum = `+234${numValue}`
        
        window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
          'size': 'invisible',
          'callback': (response) => {
          }
        }, authentication);
        let appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(authentication, intNum, appVerifier)
          .then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            notify("Verification code sent, check your phone");
            setVerifyModal(!verifyModal);
          }).catch((error) => {
            // Error; SMS not sent
            warn(error)
          });
      }
    }

  return (
    <div className="h-screen pb-8 pt-8" id="home">
      <div className="flex flex-col justify-center items-center text-white h-full bg-hero bg-top bg-cover bg-black/50 mt-8">
        <div className="font-semibold text-2xl md:text-4xl text-center w-[90%] mb-4 md:mb-8">
          {" "}
          <span className="text-secondary">PVC Delivery </span>at the comfort of
          your home
        </div>
        <div className="mb-4 w-[90%] max-w-[64ch] text-center text-base sm:mb-8 md:mb-16 md:text-lg">
          Making sure your pvc is delivered and given to you at the comfort of
          your home, your voice must be heard.
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row w-full justify-center items-center">
          <div className="w-[90%] max-w-[644px] mb-4 md:mb-0">
            <input 
              value={phoneNumber} 
              onChange={handleChange} 
              ref={inputRef}
              name="phoneNumber"
              type='text' 
              placeholder="Input your Phone Number or VIN" 
              className="outline-none text-gray-700 py-4 px-6 md:px-14 mt-0.5 rounded-md w-full md:w-[95%] max-w-[644px]" required />
          </div>
          <div className='w-[90%] md:w-fit flex'>
            <button 
            onClick={handleSubmit}
              type="submit" 
              className='bg-primary py-4 px-11 hover:scale-90 transition duration-200 rounded-md font-semibold text-lg w-full md:w-fit max-w-[644px] mx-auto'>Find PVC</button>
          </div>
        </form>
          <div className='flex z-50 mt-2'>
            <div id='sign-in-button'></div>
          </div>
        <div className="hidden md:flex h-auto w-full bg-primary absolute -bottom-14 sm:bottom-0 px-6 md:px-20 py-4 md:py-6 ">
          <div className="flex flex-col md:flex-row justify-around">
            <div>
              <div className="py-auto mr-0 text-center text-[1rem] text-white md:mr-5 md:text-left md:text-[1.375rem]">
                We have helped over
                <span className="mx-1 text-secondary">1000 </span>
                Nigerians get their PVC without them leaving the house
              </div>
            </div>
            <div className="mt-4 flex justify-center md:mt-0">
              <button className="ml-0 w-full rounded border border-white py-1 px-10 lg:px-20 text-white transition  duration-200 hover:scale-90 md:ml-5 md:w-fit">
                View
              </button>
            </div>
          </div>
        </div>
      </div>
      {verifyModal && <VerifyModal verifyModal={verifyModal} setVerifyModal={setVerifyModal} notify={notify} warn={warn} num={phoneNumber} />}
    </div>
  );
};

export default Hero;
