import arcadeIcon from '../assets/images/icon-arcade.svg';
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";
import { useContext } from 'react';
import { PlanContext } from '../pages/FormPage';
import clsx from 'clsx'

function scrollFunction() {
    const element = document.getElementById("bottom-scroll");
    element.scrollIntoView({ behavior: 'smooth'});
}

function PlanRadioButton(props) {
    const [, setPlan] = useContext(PlanContext)

    return (
    <div>
        <input type="radio" name="plan" value={props.title} defaultChecked={props.title === "Arcade"} id={props.title} className="peer appearance-none block" onChange={(e) => {setPlan(e.target.id)}}/>
        <label htmlFor={props.title} className=" hover:border-PurplishBlue hover:border peer-checked:bg-Alabaster peer-checked:border-PurplishBlue peer-checked:border peer-checked:rounded-lg border-2 border-LightGray rounded-lg w-full h-full flex  items-start p-4 lg:flex-col lg:gap-11 lg:pr-10 lg:min-w-[8.5rem]">
            <img className="inline-block mr-3 mt-[0.125rem]" src={props.icon} alt="arcade icon" />
            <div className="inline-block">
                <span className="inline text-MarineBlue font-semibold">{props.title}</span>
                <span className="block text-sm text-CoolGray">${props.yearlyOption ? `${props.priceYearly}/yr` : `${props.priceMonthly}/mo`}</span>
                {props.yearlyOption ? <span className="block text-MarineBlue mt-1 text-xs">2 months free</span> : ''}
            </div>
        </label>
    </div>
    )
}

function ToggleSwitch(props) {
    return (
        <fieldset className="flex justify-center bg-Alabaster mt-6 lg:mt-8 py-3 lg:py-4 gap-5 rounded-md">
            <span className={clsx("text-sm", "text-CoolGray",
            {"text-MarineBlue": !props.yearlyOption,})}>Monthly</span>
            <label htmlFor="yearly-option" className="relative inline-block w-10 h-5 ">
                <input type="checkbox" name="yearly" id="yearly-option" className="opacity-0 w-0 h-0 peer" onChange={() => {
                    scrollFunction()
                    props.yearlyOption ? props.setYearlyOption(false) : props.setYearlyOption(true)
                    }}/>
                <span className="absolute cursor-pointer rounded-[1.5rem] top-0 left-0 right-0 bottom-0 bg-MarineBlue transition before:content-[''] before:w-[0.875rem] before:h-[0.875rem] before:absolute before:left-[0.25rem] before:right-[0.25rem] before:bottom-[0.175rem] before:bg-white before:transition before:rounded-full before:peer-checked:translate-x-[1.125rem] before:inline-block"></span>
            </label>
            <span className={clsx("text-sm", "text-CoolGray",
            {"text-MarineBlue": props.yearlyOption,})}>Yearly</span>
        </fieldset>
    )
}

function PlanSelection(props) {
    return (
    <div className={clsx({"hidden": props.step !== 2})}>

        <fieldset className="flex flex-col gap-3 lg:flex-row lg:gap-4">
            <legend className="hidden">Plan Selection Options</legend>
            <PlanRadioButton title="Arcade" icon={arcadeIcon} priceMonthly="9" priceYearly="90" yearlyOption={props.yearly}/>
            <PlanRadioButton title="Advanced" icon={advancedIcon} priceMonthly="12" priceYearly="120" yearlyOption={props.yearly}/>
            <PlanRadioButton title="Pro" icon={proIcon} priceMonthly="15" priceYearly="150" yearlyOption={props.yearly}/>
        </fieldset>

        <input type="hidden" name="yearly" value="off" />
        <ToggleSwitch yearlyOption={props.yearly} setYearlyOption={props.setYearly}/>

    </div>
    )
}

export default PlanSelection;
