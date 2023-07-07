import Steps from "../components/Steps";
import BottomToolbar from '../components/BottomToolbar';
import { createContext, useState } from "react";
import InfoForm from "../components/InfoForm";
import PlanSelection from "../components/PlanSelection";
import AddOns from "../components/AddOns";
import Summary from "../components/Summary";
import clsx from "clsx";
import ThankYou from "../components/ThankYou";
import { useEffect } from "react";

const handleSubmit = (e, setFormSubmitted) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const dataUser = {}
    const dataSubscription = {}

    for (const [key, val] of formData.entries()) {
        if (["name", "email", "phone"].includes(key)) {
            dataUser[key] = val
        }
        else {
            dataSubscription[key] = val
        }
    }

    const baseUrl = "https://027d-105-184-236-56.ngrok-free.app/"
    const url_users = baseUrl + "api/users/"
    const url_subscription = baseUrl + "api/subscriptions/"

    fetch(url_users, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataUser)
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Something went wrong")
            }
            setFormSubmitted(true)
            return response.json()
        })
        .then((userData) => {
            dataSubscription.user = userData.user.id
            console.log(userData)
            return fetch(url_subscription, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataSubscription)
            })
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Something went wrong")
            }
            return response.json()
        })
        .catch((error) => {
            console.log(error)
        })
}


const plansPricing = {
    Arcade: {
        Monthly: 9,
        Yearly: 90
    },
    Advanced: {
        Monthly: 12,
        Yearly: 120
    },
    Pro: {
        Monthly: 15,
        Yearly: 150
    }
}
const addOnsPricing = {
    "Online service": {
        Monthly: 1,
        Yearly: 10
    },
    "Larger Storage": {
        Monthly: 2,
        Yearly: 20,
    },
    "Customizable profile": {
        Monthly: 2,
        Yearly: 20
    }
}

// not necessary for this application but wanted to try out context hook just to see how it works
export const PlanContext = createContext() 
export const AddOnContext = createContext()

function FormPage() {
    let [stepNo, setStepNo] = useState(1)       // this state will be passed down through props
    let [yearly, setYearly] = useState(false)   // this state will be passed down through props
    let [plan, setPlan] = useState('Arcade')    // this state will be passed down through context
    let [addOns, setAddOns] = useState([])      // this state will be passed down through context
    let [formSubmitted, setFormSubmitted] = useState(false)
    let [invalidFields, setInvalidFields] = useState([])

    useEffect(() => {
        console.log(invalidFields)
    }, [invalidFields])

    const stepComponents = {
        1: {
            title: 'Personal info',
            description: 'Please provide your name, email address, and phone number.',
            component: <InfoForm step={stepNo} invalidFields={invalidFields} setInvalidFields={setInvalidFields}/>
        },
        2: {
            title: 'Select your plan',
            description: 'You have the option of monthly or yearly billing.',
            component: <PlanSelection step={stepNo} plansPrices={plansPricing} yearly={yearly} setYearly={setYearly}/>
        },
        3: {
            title: 'Pick add-ons',
            description: 'Add-ons help enhance your gaming experience.',
            component: <AddOns step={stepNo} addOnsPrices={addOnsPricing} yearly={yearly}/>
        },
        4: {
            title: 'Finishing up',
            description: 'Double-check everything looks OK before confirming.',
            component: <Summary step={stepNo} setStepNo={setStepNo} plansPrices={plansPricing} addOnsPrices={addOnsPricing} yearly={yearly}/>
        }
    }

    return (
        <div className="flex flex-col mx-2">
            
            <div className="flex flex-col lg:flex-row bg-white rounded-xl p-6 lg:p-4 mx-2 mt-[6.125rem] lg:mt-0 shadow-lg gap-y-14 lg:gap-y-0 lg:w-[57.75rem]"> {/* form card */}
                
                <Steps step={stepNo} />     
                <div className={clsx("lg:relative lg:ml-[5.25rem] lg:mr-[4.75rem] lg:mt-9 lg:w-full", {"hidden": formSubmitted})}>
                    <h2 className=" text-2xl text-MarineBlue font-bold pb-2 lg:text-[2rem]">{stepComponents[stepNo].title}</h2>
                    <p className="text-gray-400 pr-4 pb-6 lg:pb-9">{stepComponents[stepNo].description}</p>
                    <PlanContext.Provider value={[plan, setPlan]}>
                        <AddOnContext.Provider value={[addOns, setAddOns]}>
                            <form onSubmit={(e) => handleSubmit(e, setFormSubmitted)} id="main-form">
                                {stepComponents[1].component}
                                {stepComponents[2].component}
                                {stepComponents[3].component}
                                {stepComponents[4].component}
                            </form>
                        </AddOnContext.Provider>
                    </PlanContext.Provider>
                    <BottomToolbar step={stepNo} nextCallback={setStepNo} formSubmitted={formSubmitted} submitForm={setFormSubmitted} invalidFields={invalidFields} />
                </div>

                {formSubmitted ? <ThankYou /> : ''}

            </div>

            {stepNo === 2 ? <div id="bottom-scroll" className=" h-[6rem] lg:hidden"></div> : ''}

        </div>
    )
}


export default FormPage;