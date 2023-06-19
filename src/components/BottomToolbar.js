function BottomToolbar(props) {
    return (
        <div className=" flex justify-between fixed lg:absolute bottom-0 left-0 bg-white h-[4.5rem] w-[100%] lg:mb-1">

            <button onClick={() => {
                if (props.step !== 1) {
                    props.nextCallback(props.step - 1)
                }
            }} className="border-none text-CoolGray pr-4 my-4 mx-4 rounded-[0.25rem] text-sm lg:my-3 lg:mx-0 lg:pr-5 lg:text-base">Go Back</button>
            
            <button onClick={() => {
                if (props.step !== 4) {
                    props.nextCallback(props.step + 1)
                }
            }} className="border-none bg-MarineBlue text-white px-4 my-4 mx-4 rounded-[0.25rem] text-sm lg:my-3 lg:mx-0 lg:px-5 lg:text-base">Next Step</button>
        
        </div>
    )
}

export default BottomToolbar;