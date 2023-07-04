import { useState, useContext } from "react"
import { AddOnContext } from "../pages/FormPage";
import clsx from "clsx";

function AddOnItem(props) {
    let [active, setActive] = useState(false)
    const idTitle = props.addOnTitle
    const idTitleForHTML = props.addOnTitle.split(" ").join("_")
    let [addOns, setAddOns] = useContext(AddOnContext)

    return(
        <label htmlFor={idTitleForHTML} className={clsx("border border-LightGray px-4 py-[0.6875rem] lg:box-border lg:px-5 lg:py-5 flex gap-4 items-center rounded-md justify-between hover:border-PurplishBlue", {"border-PurplishBlue bg-Alabaster" : active})}>
            <div className="flex gap-4">
                <input id={idTitleForHTML} type="checkbox" name={idTitleForHTML} className="appearance-none relative w-4 h-4 rounded-sm border top-[0.5625rem] border-LightGray before:content-['✔'] before:absolute before:text-xs before:text-white before:invisible checked:bg-PurplishBlue checked:border-none checked:before:visible before:right-[0.1875rem] before:top-[0]" onChange={() => {
                    active ? setActive(false) : setActive(true)
                    addOns.includes(idTitle) ? setAddOns(arr => arr.filter(val => val !== idTitle)) : setAddOns(arr => [...arr, idTitle])
                    }}/>
                <div className="inline-flex flex-col mr-2">
                    <span className=" text-sm text-MarineBlue font-semibold block">{props.addOnTitle}</span>
                    <span className=" text-xs text-CoolGray">{props.addOnDescription}</span>
                </div>
            </div>
            <span className="text-sm text-PurplishBlue">+${props.yearlyOption ? `${props.addOnPriceYearly}/yr` : `${props.addOnPriceMonthly}/mo`}</span>
        </label>
    )
}

function AddOns(props) {
    return (
        <div className={clsx({"hidden": props.step !== 3})}>
            <fieldset className="flex flex-col gap-3 mb-2">
                <AddOnItem addOnTitle="Online service" addOnDescription="Access to multiplayer games" addOnPriceMonthly={props.addOnsPrices["Online service"]["Monthly"]} addOnPriceYearly={props.addOnsPrices["Online service"]["Yearly"]} yearlyOption={props.yearly} />
                <AddOnItem addOnTitle="Larger Storage" addOnDescription="Extra 1TB of cloud save" addOnPriceMonthly={props.addOnsPrices["Larger Storage"]["Monthly"]} addOnPriceYearly={props.addOnsPrices["Larger Storage"]["Yearly"]} yearlyOption={props.yearly} />
                <AddOnItem addOnTitle="Customizable profile" addOnDescription="Custom theme on your profile" addOnPriceMonthly={props.addOnsPrices["Customizable profile"]["Monthly"]} addOnPriceYearly={props.addOnsPrices["Customizable profile"]["Yearly"]} yearlyOption={props.yearly}/>
            </fieldset>
        </div>
    )
}

export default AddOns;