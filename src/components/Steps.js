import clsx from 'clsx'

function Step(props) {
    return (
    <div className="items-center flex gap-x-5">
        <div className={clsx("aspect-square w-8 rounded-[100%] border grid place-content-center", {
            " border-white text-white": props.step !== props.stepNo,
            " bg-LightBlue text-MarineBlue": props.step === props.stepNo
        }
        )}>
            <span>{props.stepNo}</span>
        </div>  
        <div className="hidden lg:flex uppercase flex-col font-body">
            <p className="text-xs text-PastelBlue">step {props.stepNo}</p>
            <p className=" text-sm text-white font-semibold tracking-wide">your info</p>
        </div>
    </div>
    )
}

function Steps(props) {
    return (
    <div className=" flex items-center justify-center gap-x-4 mt-[-5.5rem] lg:mt-0 lg:bg-sidebar-dt lg:h-[568px] lg:min-w-[274px] lg:flex-col lg:justify-start lg:items-start lg:gap-7 lg:p-8"> {/* steps p-8 lg:bg-sidebar-dt lg:h-[568px] */}
        
        {[1, 2, 3, 4].map((num) => {
            return (
                <Step step={props.step} stepNo={num}></Step>
            )
        })}

    </div>
    )
}

export default Steps;