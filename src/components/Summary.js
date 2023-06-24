import clsx from "clsx";
import { AddOnContext, PlanContext } from "../pages/FormPage";
import { useContext, useState } from "react";


function AddOnBillItem(props) {
    return (
    <div className="justify-between flex items-center mt-2">
        <span className="block text-CoolGray">{props.addOn}</span>
        <span className="text-MarineBlue">+${`${props.price}/${props.yearly ? 'yr' : 'mo'}`}</span>
    </div>
    )
}

function Summary(props) {
    let [plan, ] = useContext(PlanContext)
    let [addOns, ] = useContext(AddOnContext)
    let priceTotal = useState(0)

    if (addOns.length !== 0) {
        const addOnsPriceTotal = addOns.reduce(
            (acc, currentVal) => acc + props.addOnsPrices[currentVal][props.yearly ? "Yearly" : "Monthly"],
            0
        )
        priceTotal = props.plansPrices[plan][props.yearly ? "Yearly" : "Monthly"] + addOnsPriceTotal
    }
    else {
        priceTotal = props.plansPrices[plan][props.yearly ? "Yearly" : "Monthly"]
    }

    return (
        <div className={clsx({"hidden": props.step !== 4})}>
            
            <div className={("bg-Alabaster text-sm rounded-lg flex flex-col px-3 py-4 lg:px-6 lg:py-5")}>
                
                <div className="justify-between flex items-center">
                    <div className="">
                        <span className="block text-MarineBlue font-semibold">{plan} {`(${props.yearly ? "Yearly" : "Monthly"})`}</span>
                        <span className="underline text-CoolGray hover:cursor-pointer hover:text-PurplishBlue" onClick={() => props.setStepNo(2)}>Change</span>
                    </div>
                    <span className="text-MarineBlue font-semibold">${`${props.plansPrices[plan][props.yearly ? "Yearly" : "Monthly"]}/${props.yearly ? 'yr' : 'mo'}`}</span>
                </div>

                {addOns.length !== 0 ? <span className="bg-LightGray block h-[1px] w-full mt-3 mb-2 lg:mt-5 lg:mb-2"></span> :''}
                
                {addOns.map((addOn) => {
                    return (<AddOnBillItem addOn={addOn} price={props.addOnsPrices[addOn][props.yearly ? "Yearly" : "Monthly"]} yearly={props.yearly} />
                    )
                })}

            </div>

            <div className="justify-between flex items-center px-3 my-6">
                <span className=" text-CoolGray text-sm ">Total {`(per ${props.yearly ? "year" : "month"})`}</span>
                <span className="text-PurplishBlue text-lg font-semibold">+${`${priceTotal}/${props.yearly ? 'mo' : 'yr'}`}</span>
            </div>

        </div>
    )
}

export default Summary;