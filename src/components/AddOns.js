import { useState } from "react";
import clsx from "clsx";

function AddOnItem(props) {
    let [active, setActive] = useState(false)
    const idTitle = props.addOnTitle.split()
    return(
        <label htmlFor={idTitle[0]} className={clsx("border border-LightGray px-4 py-[0.6875rem] lg:box-border lg:px-5 lg:py-5 flex gap-4 items-center rounded-md justify-between", {"border-PurplishBlue bg-Alabaster" : active})}>
            <div className="flex gap-4">
                <input id={idTitle[0]} type="checkbox" className="appearance-none relative w-4 h-4 rounded-sm border top-[0.5625rem] border-LightGray before:content-['✔'] before:absolute before:text-xs before:text-white before:invisible checked:bg-PurplishBlue checked:border-none checked:before:visible before:right-[0.1875rem] before:top-[0]" onChange={() => active ? setActive(false) : setActive(true)}/>
                <div className="inline-flex flex-col mr-2">
                    <span className=" text-sm text-MarineBlue font-semibold block">{props.addOnTitle}</span>
                    <span className=" text-xs text-CoolGray">{props.addOnDescription}</span>
                </div>
            </div>
            <span className="text-xs text-PurplishBlue">+${props.addOnPrice}/yr</span>
        </label>
    )
}

function AddOns() {
    return (
        <fieldset className="flex flex-col gap-3 mb-2">

            <AddOnItem addOnTitle="Online service" addOnDescription="Access to multiplayer games" addOnPrice="1" />
            <AddOnItem addOnTitle="Larger Storage" addOnDescription="Extra 1TB of cloud save" addOnPrice="2"/>
            <AddOnItem addOnTitle="Customizable profile" addOnDescription="Custom theme on your profile" addOnPrice="2"/>

        </fieldset>
    )
}

export default AddOns;