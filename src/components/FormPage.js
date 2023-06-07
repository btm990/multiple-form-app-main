import Steps from "./Steps";
import BottomToolbar from './BottomToolbar';
import { useState } from "react";

function FormPage() {
    let [stepNo, setStepNo] = useState(1)
    return (
        <div className="flex flex-col mx-2">
            
            <div className="flex flex-col lg:flex-row bg-white rounded-lg p-6 lg:p-4 mx-2 mt-[6.125rem] lg:mt-0 shadow-lg gap-y-14 lg:gap-y-0 lg"> {/* form card */}
                
                <Steps step={stepNo} />     
                <div className="lg:relative lg:mx-[4.75rem] lg:mt-9">
                    <h2 className=" text-2xl text-MarineBlue font-bold pb-2">Personal info</h2>
                    <p className="text-gray-400 pr-4 pb-7">Please provide your name, email address, and phone number.</p>
                    <form>
                        <ul>
                            <li className="pb-5"><label htmlFor="name" className=" pb-1 text-sm text-MarineBlue block font-medium">Name</label><input placeholder='e.g. Stephen King' className=" border rounded-lg border-gray-300 h-9 w-[100%] placeholder:text-gray-400 px-3 py-5 placeholder:font-medium max-w-lg" type="text" /></li>
                            <li className="pb-5"><label htmlFor="mail" className=" pb-1 text-sm text-MarineBlue block font-medium">Email Address</label><input placeholder='e.g. stephenking@lorem.com' className=" border rounded-lg border-gray-300 h-9 w-[100%] placeholder:text-gray-400 px-3 py-5 placeholder:font-medium max-w-lg" type="email" /></li>
                            <li className="pb-5"><label htmlFor="phone" className="pb-1  text-sm  text-MarineBlue block font-medium">Phone Number</label><input placeholder='e.g. +1 234 567 890' className=" border rounded-lg border-gray-300 h-9 w-[100%] placeholder:text-gray-400 px-3 py-5 placeholder:font-medium max-w-lg" type="tel" /></li>
                        </ul>
                    </form>
                    <BottomToolbar step={stepNo} nextCallback={setStepNo} />
                </div>

            </div>

        </div>
    )
}

export default FormPage;