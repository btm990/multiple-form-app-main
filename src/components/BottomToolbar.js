function BottomToolbar(props) {
    return (
        <div className=" flex justify-end absolute bottom-0 left-0 bg-white h-[4.5rem] w-[100%]">
            <button onClick={() => {
                console.log('clicked')
                if (props.step !== 4) {
                    props.nextCallback(props.step + 1)
                }
                else {
                    props.nextCallback(1)
                }
            }} className="border-none bg-MarineBlue text-white px-4 my-4 mx-4 rounded-[0.25rem] text-sm ">Next Step</button>
        </div>
    )
}

export default BottomToolbar;