import clsx from "clsx";

function InfoForm(props) {
    return (
        <ul className={clsx({"hidden": props.step !== 1})}>
            <li className="pb-5"><label htmlFor="name" className=" pb-1 text-sm text-MarineBlue block font-medium">Name</label><input placeholder='e.g. Stephen King' className=" border rounded-lg border-gray-300 h-9 w-[100%] placeholder:text-gray-400 px-3 py-5 placeholder:font-medium max-w-lg" type="text" /></li>
            <li className="pb-5"><label htmlFor="mail" className=" pb-1 text-sm text-MarineBlue block font-medium">Email Address</label><input placeholder='e.g. stephenking@lorem.com' className=" border rounded-lg border-gray-300 h-9 w-[100%] placeholder:text-gray-400 px-3 py-5 placeholder:font-medium max-w-lg" type="email" /></li>
            <li className="pb-5"><label htmlFor="phone" className="pb-1  text-sm  text-MarineBlue block font-medium">Phone Number</label><input placeholder='e.g. +1 234 567 890' className=" border rounded-lg border-gray-300 h-9 w-[100%] placeholder:text-gray-400 px-3 py-5 placeholder:font-medium max-w-lg" type="tel" /></li>
        </ul>
    )
}

export default InfoForm;