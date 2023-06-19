import Steps from "../components/Steps";
import BottomToolbar from '../components/BottomToolbar';
import { useState } from "react";
import InfoForm from "../components/InfoForm";
import PlanSelection from "../components/PlanSelection";
import AddOns from "../components/AddOns";


const stepComponents = {
    1: {
        title: 'Personal info',
        description: 'Please provide your name, email address, and phone number.',
        component: <InfoForm />
    },
    2: {
        title: 'Select your plan',
        description: 'You have the option of monthly or yearly billing.',
        component: <PlanSelection />
    },
    3: {
        title: 'Pick add-ons',
        description: 'Add-ons help enhance your gaming experience.',
        component: <AddOns />
    },
    4: {
        title: 'Finishing up',
        description: 'Double-check everything looks OK before confirming.'
    }
}


function FormPage() {
    let [stepNo, setStepNo] = useState(1)
    return (
        <div className="flex flex-col mx-2">
            
            <div className="flex flex-col lg:flex-row bg-white rounded-lg p-6 lg:p-4 mx-2 mt-[6.125rem] lg:mt-0 shadow-lg gap-y-14 lg:gap-y-0 lg:min-w-[56.125rem]"> {/* form card */}
                
                <Steps step={stepNo} />     
                <div className="lg:relative lg:ml-[5.25rem] lg:mr-[4.75rem] lg:mt-9 lg:w-full">
                    <h2 className=" text-2xl text-MarineBlue font-bold pb-2 lg:text-[2rem]">{stepComponents[3].title}</h2>
                    <p className="text-gray-400 pr-4 pb-6 lg:pb-9">{stepComponents[3].description}</p>
                    {stepComponents[2].component}
                    <BottomToolbar step={stepNo} nextCallback={setStepNo} />
                </div>

            </div>

            {stepNo === 2 ? <div id="bottom-scroll" className=" h-[6rem] lg:hidden"></div> : ''}

        </div>
    )
}

export default FormPage;