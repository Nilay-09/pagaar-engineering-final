import React, { useEffect, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';

interface ShowRegistrationModalProps {
  closeModalRegByClick: () => void;
}

const ShowRegistrationModal: React.FC<ShowRegistrationModalProps> = ({ closeModalRegByClick }) => {
  const [isOtpDialogeVisible, setIsOtpDialogeVisible] = useState<boolean>(false);
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
  const [otpFromServer, setOtpFromServer] = useState<string | null>(null);
  const [isOtpComplete, setIsOtpComplete] = useState<boolean>(false);
  const [isOtpValid, setIsOtpValid] = useState<boolean>(true); 
  const navigate = useNavigate();

  useEffect(() => {
    const preventScroll = (e: Event) => {
      e.preventDefault();
    };

    // Add event listeners to prevent scrolling
    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });

    return () => {
      // Remove event listeners when the modal is closed
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
    };
  }, []);

  useEffect(() => {
    if (isOtpDialogeVisible) {
      const firstInput = document.getElementById('otp-0') as HTMLInputElement;
      if (firstInput) {
        firstInput.focus();
      }
    }
  }, [isOtpDialogeVisible]);

  useEffect(() => {
    // Check if all OTP fields are filled
    setIsOtpComplete(otp.every(value => value !== ""));
  }, [otp]);

  const handleGetOtpClick = async () => {
    const phoneNumber = '919767136269'; // Replace with dynamic value if needed
    const url = `https://pagaar-backend.azurewebsites.net/login/generateOtp?phone-number=${phoneNumber}`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Request-Id': 'hrt', 
                'X-User-Id': 'hrt@123'
            },
        });

        const responseData = await response.json();
        console.log('Response data:', responseData);

        setOtpFromServer(responseData.otp)
        if (response.ok) {
            setIsOtpDialogeVisible(true);
        } else {
            console.error('Failed to generate OTP', response.status);
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

  const handleOtpChange = (element: HTMLInputElement, index: number) => {
    const value = element.value;
    if (!/^[0-9]$/.test(value) && value !== "") return;

    let newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== "" && index < 3) {
      const nextInput = document.getElementById(`otp-${index + 1}`) as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace') {
      let newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      if (index > 0 && !otp[index]) {
        const prevInput = document.getElementById(`otp-${index - 1}`) as HTMLInputElement;
        if (prevInput) {
          prevInput.focus();
        }
      }
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const charCode = event.charCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  };

  const handleFocusBlur = (e: React.FocusEvent<HTMLInputElement>, index: number) => {
    if (otp[index]) {
      e.target.classList.add('border-[#BDA6FF]');
    } else {
      e.target.classList.remove('border-[#BDA6FF]');
    }
  };

  const handleVerifyClick = async () => {
    const enteredOtp = otp.join(''); 
    const phoneNumber = '919767136269'; 
  
    try {
      const response = await fetch(`https://pagaar-backend.azurewebsites.net/login/validateOtp?phone-number=${phoneNumber}&otp=${enteredOtp}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-User-Id': '349d5e6c-d79-ff04-8388-1099c53cb3b4',
          'X-Request-Id': 'hrt'  
        },
        
      });
  
      if (response.ok) {
        const data= await response.json();
          console.log('OTP is correct',data);
          setIsOtpValid(true);
          navigate('/registration');
        } else {
          console.error('OTP validation failed');
          setIsOtpValid(false);
        }
    } catch (error) {
      console.error('Error:', error);
      setIsOtpValid(false);
    }
  };

  return (
    <div>
      <div
        className="modal-wrapper bg-[#00000033] fixed top-0 left-0 right-0 bottom-0 z-50"
        onClick={closeModalRegByClick}
      ></div>

      <div className="fixed w-[90%] sm:w-[544px] bg-white py-[36px] px-[32px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-[#000000] border-[1px] rounded-[8px] z-50">
        {!isOtpDialogeVisible ? (
          <>
            <div className="flex flex-col gap-2 w-full justify-center px-4 sm:px-[19px] py-6 sm:py-2">
              <div className="flex justify-end items-center h-10 aspect-square sm:h-10 py-2 overflow-hidden">
                <RxCross2
                  onClick={closeModalRegByClick}
                  className="text-[#868686] h-full w-6 sm:w-10 cursor-pointer"
                />
              </div>
              <div className="poppins-semibold text-[28.87px] leading-[43.41px] text-[#28293D] text-center">
                Register Your Mobile Number
              </div>
              <div className="poppins-regular text-[14px] text-[#555770] text-center">
                We will share a one-time password on your mobile number
              </div>
            </div>
            <div className="py-[19.24px] pt-[19.24px] pb-[8.2px] flex flex-col items-center gap-[8px]">
              <input
                type="text"
                className="border-[2.22px] p-[11.1px] w-full sm:w-[307.1px] h-[43.31px] rounded border-[#000000] custom-shadow-modal text-[16px] leading-[24px] placeholder-[#000] poppins-regular"
                placeholder="+91"
              />
            </div>
            <div className="mt-[32px] w-full flex justify-center">
              <div
                className="w-full sm:w-[300px] h-[50px] bg-[#BDA6FF] flex justify-center items-center poppins-bold border-[2px] border-[#000000] custom-shadow-modal-button cursor-pointer"
                onClick={handleGetOtpClick}
              >
                Get OTP
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-2 w-full justify-center px-4 sm:px-[19px] py-6 sm:py-2">
              <div className="flex justify-end items-center h-10 aspect-square sm:h-6 py-2 overflow-hidden">
                <RxCross2
                  onClick={closeModalRegByClick}
                  className="text-[#868686] h-full w-6 cursor-pointer"
                />
              </div>
              <div className="poppins-semibold text-[28.87px] leading-[43.41px] text-[#28293D] text-center">
                Register Your Mobile Number
              </div>
              <div className="poppins-regular text-[14px] text-[#555770] text-center">
                We will share a one-time password on your mobile number
              </div>
            </div>
            <div className="pt-2 pb-6 flex justify-center gap-4 ">
              {otp.map((data, i) => (
                <input
                  type="text"
                  className={`w-[54px] h-[50px] rounded-[13.21px] border-[2.56px] custom-shadow-modal-otp text-center text-[24px] poppins-regular ${
                    otp[i] ? "border-[#BDA6FF]" : "border-black"
                  } ${!isOtpValid ? "border-[#FFBEBE]" : ""}`}
                  maxLength={1}
                  key={i}
                  value={data}
                  onChange={(e) => handleOtpChange(e.target, i)}
                  id={`otp-${i}`}
                  onFocus={(e) => handleFocusBlur(e, i)}
                  onBlur={(e) => handleFocusBlur(e, i)}
                  onKeyDown={(e) => handleKeyDown(e, i)}
                  onKeyPress={handleKeyPress}
                />
              ))}
            </div>
            <div className="text-[#555770] poppins-medium flex justify-between">
              <div>
                Resend OTP In{" "}
                <span className="text-[#3C95E9] poppins-semibold">30s</span>
              </div>
              <div className={` ${isOtpValid ? 'hidden' : 'flex' } poppins-medium font-[0.875rem] text-[#FF0000]`}>Invalid OTP</div>
            </div>
            <div className="mt-[12px] pt-[12.83px] w-full pb-[36px] flex justify-center">
              <div
                className={`w-[300px] h-[50px] flex justify-center items-center poppins-bold border-[2px] border-[#000000] custom-shadow-modal-otp rounded-[13px] ${
                  isOtpComplete
                    ? "cursor-pointer bg-[#BDA6FF]"
                    : "cursor-not-allowed bg-[#BABABA]"
                }`}
                onClick={isOtpComplete ? handleVerifyClick : undefined}
              >
                Verify
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ShowRegistrationModal;
