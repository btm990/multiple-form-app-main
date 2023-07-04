import clsx from "clsx";


function BottomToolbar(props) {
    return (
        <div className={clsx(" flex fixed lg:absolute bottom-0 left-0 bg-white h-[4.5rem] w-[100%] lg:mb-1", {"justify-end": props.step === 1, "justify-between": props.step !== 1})}>

            <button onClick={() => {
                if (props.step !== 1) {
                    props.nextCallback(props.step - 1)
                }
            }} className={clsx("border-none text-CoolGray hover:text-MarineBlue pr-4 pl-4 my-4 mx-4 rounded-[0.25rem] text-sm lg:my-3 lg:mx-0 lg:pr-5 lg:pl-0 lg:text-base", {"hidden": props.step === 1 || props.formSubmitted})}>Go Back</button>
            
            <button onClick={() => {
                if (props.step !== 4 && props.invalidFields.length === 0) {
                    props.nextCallback(props.step + 1)
                }
                else {
                    props.nextCallback(1)
                }
            }} className={clsx("border-none bg-MarineBlue text-white px-4 my-4 mx-4 rounded-[0.25rem] text-sm lg:my-3 lg:mx-0 lg:px-5 lg:text-base", {"hidden": props.step === 4 || props.formSubmitted})}>Next Step</button>
        
            <button form="main-form" type="submit" onClick={(e) => {
                if (props.step !== 4 && props.invalidFields.length !== 0) {
                    e.preventDefault()
                    props.nextCallback(1)
                }
                else if (props.step !== 4 && props.invalidFields.length === 0) {
                    e.preventDefault()
                    props.nextCallback(props.step + 1)
                }
                else {
                    props.submitForm(true)
                }
            }} className={clsx("border-none bg-PurplishBlue text-white px-4 my-4 mx-4 rounded-[0.25rem] text-sm lg:my-3 lg:mx-0 lg:px-5 lg:text-base min-w-[95px]", {"block": props.step === 4, "hidden": props.step !== 4 || props.formSubmitted})}>Confirm</button>

        </div>
    )
}

export default BottomToolbar;