import React, { useContext, useState, useRef } from 'react'; 
import { RecoveryContext } from '@/app/[locale]/(site)/(auth)/change/page'
import toast from 'react-hot-toast';



const OTPinput = () => {
    const { email, otp, setPage } = useContext(RecoveryContext);
    const [timerCount, setTimerCount] = useState(60);
    const [OTPinput, setOTPinput] = useState(['', '', '', '']); 

    function verifyOTP() {
        console.log("otp");
        console.log(otp);
        const enteredOTP = parseInt(OTPinput.join('')); 
        if (enteredOTP === otp) {
          setPage('reset');
        } else {
          console.log(enteredOTP, otp, OTPinput);
          toast.error('The code you have entered is not correct. Please try again or re-send the link.');
        }
      }

      const firstInputRef = useRef(null);
      const secondInputRef = useRef(null);
      const thirdInputRef = useRef(null);
      const fourthInputRef = useRef(null);

      const handleFocusNext = (e, nextInputRef) => {
        const value = e.target.value;
        if (value.length === 1 && nextInputRef) {
          nextInputRef.current.focus();
        }
      };

  return (
    <div className='w-2/3 text-white'>
    <h1 className="text-4xl font-medium">Verification Code</h1>
       <p className="text-zinc-400 mb-8">Your verification code has been sent to your email. Please enter the 4-digit code you received below.</p>

    <div  className="w-full mt-2 flex justify-center items-center gap-x-2 my-8">
        <div className='w-20 h-20'>
        <input type="text" ref={firstInputRef} onInput={(e) => handleFocusNext(e, secondInputRef)} pattern="\d*" maxLength="1" data-index="0" placeholder="0" className="w-20 h-20 rounded-xl border border-zinc-700 bg-black focus:border-zinc-800 outline-none text-center text-4xl"
            onChange={(e) => 
                setOTPinput([
                    e.target.value,
                    OTPinput[1],
                    OTPinput[2],
                    OTPinput[3],
                ])
            }
        
        />
        </div>
        <div className='w-20 h-20'>
        <input type="text" ref={secondInputRef} onInput={(e) => handleFocusNext(e, thirdInputRef)} pattern="\d*" maxLength="1" data-index="0" placeholder="0" className="w-20 h-20 rounded-xl border border-zinc-700 bg-black focus:border-zinc-800 outline-none text-center text-4xl"
            onChange={(e) => 
                setOTPinput([
                    OTPinput[0],
                    e.target.value,
                    OTPinput[2],
                    OTPinput[3],
                ])
            }
       
        />
        </div>
        <div className='w-20 h-20'>
        <input type="text" ref={thirdInputRef} onInput={(e) => handleFocusNext(e, fourthInputRef)} pattern="\d*" maxLength="1" data-index="0" placeholder="0" className="w-20 h-20 rounded-xl border border-zinc-700 bg-black focus:border-zinc-800 outline-none text-center text-4xl"
            onChange={(e) => 
                setOTPinput([
                    OTPinput[0],
                    OTPinput[1],
                    e.target.value,
                    OTPinput[3],
                ])
            }
        />
        </div>
        <div className='w-20 h-20'>
        <input type="text" ref={fourthInputRef} pattern="\d*" maxLength="1" data-index="0" placeholder="0" className="w-20 h-20 rounded-xl border border-zinc-700 bg-black focus:border-zinc-800 outline-none text-center text-4xl"
           onChange={(e) => 
            setOTPinput([
                OTPinput[0],
                    OTPinput[1],
                    OTPinput[2],
                    e.target.value,
            ])
        }
        />
        </div>
        
        
    </div><button onClick={verifyOTP} className="w-full rounded-full py-3 font-medium text-white bg-primary hover:bg-primary/80  border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center" >
                   <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                     </svg>
                     
                     <span className='text-black'> Verify Account </span>
               </button>
               {/* <div class="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                <p>Didn't recieve code?</p> <a class="flex flex-row items-center text-blue-600" href="http://" target="_blank" rel="noopener noreferrer">Resend</a>
              </div> */}
</div>
    // <div>
    //     <input
    //         maxLength="1"
    //         className="m-2"
    //         type="text"
    //         name=""
    //         id=""
    //         onChange={(e) => 
    //             setOTPinput([
    //                 e.target.value,
    //                 OTPinput[1],
    //                 OTPinput[2],
    //                 OTPinput[3],
    //             ])
    //         }
    //         />
    //         <input
    //         maxLength="1"
    //         className="m-2 "
    //         type="text"
    //         name=""
    //         id=""
    //         onChange={(e) => 
    //             setOTPinput([
    //                 OTPinput[0],
    //                 e.target.value,
    //                 OTPinput[2],
    //                 OTPinput[3],
    //             ])
    //         }
    //         />
    //         <input
    //         maxLength="1"
    //         className="m-2"
    //         type="text"
    //         name=""
    //         id=""
    //         onChange={(e) => 
    //             setOTPinput([
    //                 OTPinput[0],
    //                 OTPinput[1],
    //                 e.target.value,
    //                 OTPinput[3],
    //             ])
    //         }
    //         />
    //         <input
    //         maxLength="1"
    //         className="m-2"
    //         type="text"
    //         name=""
    //         id=""
    //         onChange={(e) => 
    //             setOTPinput([
    //                 OTPinput[0],
    //                 OTPinput[1],
    //                 OTPinput[2],
    //                 e.target.value,
    //             ])
    //         }
    //         />
    //         <a onClick={verifyOTP}>VerfiyOTP</a>
    // </div>
  )
}

export default OTPinput;