import ROCKET from '../Assets/rocket.jpg'
import MAIL from '../Assets/mail.jpg'
import HANDSHAKE from '../Assets/handshake.jpg'

const referralSteps = [
    { img: MAIL, text: 'Ask your friend to enter the referral code XXYYAK during onboarding.' },
    { img: HANDSHAKE, text: 'Earn 30 Pagaar Coins for every friend who joins using your referral code.' },
    { img: ROCKET, text: 'Your friend gets 15 Pagaar Coins too.' },
];

export default function LearnMoreReferal() {
    return (
        <>
        <div className="p-6">
            <div className="poppins-medium text-[1.25rem] leading-[42px] text-[#28293D]">
                How does Referral work?
            </div>

            <div className="my-6 flex flex-col gap-4">
                {referralSteps.map((step, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <img src={step.img} alt="" />
                        <div className="poppins-regular text-[14px] text-[#28293D] leading-6">{step.text}</div>
                    </div>
                ))}
            </div>
        </div>

            <div className="poppins-regular text-[1rem] px-6 text-[#28293D] leading-6">
                <span className="poppins-semibold">Note:</span> You can only refer 5 friends per month.
            </div>
            </>
    );
}
