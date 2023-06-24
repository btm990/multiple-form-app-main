import thankYouIcon from "../assets/images/icon-thank-you.svg"

function ThankYou() {
    return (

    <div className="flex flex-col items-center justify-center lg:p-[84px] py-16 text-center">
        <img className="w-16 lg:w-20" src={thankYouIcon} alt="checkmark-icon-thank-you" />
        <span className=" text-2xl lg:text-3xl font-semibold text-MarineBlue mt-5 mb-2 lg:mt-7 lg:mb-3">Thank you!</span>
        <p className=" text-CoolGray">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </div>

    )
}

export default ThankYou;