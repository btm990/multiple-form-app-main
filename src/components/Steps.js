import clsx from 'clsx'
function Steps(props) {

    return (

    <div className="flex items-center justify-center gap-x-4 mt-[-5.5rem] lg:mt-0 lg:bg-sidebar-dt lg:h-[568px] lg:w-[274px] lg:flex-col lg:justify-start lg:items-start lg:gap-7 lg:p-8"> {/* steps p-8 lg:bg-sidebar-dt lg:h-[568px] */}
        
        <div className="items-center flex gap-x-5">
            <div className={clsx("aspect-square w-8 rounded-[100%] border grid place-content-center", {
                " border-white text-white": props.step !== 1,
                " bg-LightBlue text-MarineBlue": props.step === 1
            }
            )}>
                <span>1</span>
            </div>
            <div className="hidden lg:flex uppercase flex-col font-body">
                <p className="text-xs text-PastelBlue">step 1</p>
                <p className=" text-sm text-white font-semibold tracking-wide">your info</p>
            </div>
        </div>

        <div className="items-center flex gap-x-5">
            <div className={clsx("aspect-square w-8 rounded-full border grid place-content-center", {
                " border-white text-white": props.step !== 2,
                " bg-LightBlue text-MarineBlue": props.step === 2
            }
            )}>
                <span>2</span>
            </div>
            <div className="hidden lg:flex uppercase flex-col font-body">
                <p className="text-xs text-PastelBlue">step 2</p>
                <p className=" text-sm text-white font-semibold tracking-wide">select plan</p>
            </div>
        </div>

        <div className="items-center flex gap-x-5">
            <div className={clsx("aspect-square w-8 rounded-full border grid place-content-center", {
                " border-white text-white": props.step !== 3,
                " bg-LightBlue text-MarineBlue": props.step === 3
            }
            )}>
                <span>3</span>
            </div>
            <div className="hidden lg:flex uppercase flex-col font-body">
                <p className="text-xs text-PastelBlue">step 3</p>
                <p className=" text-sm text-white font-semibold tracking-wide">add-ons</p>
            </div>
        </div>

        <div className="items-center flex gap-x-5">
            <div className={clsx("aspect-square w-8 rounded-full border grid place-content-center", {
                " border-white text-white": props.step !== 4,
                " bg-LightBlue text-MarineBlue": props.step === 4
            }
            )}>
                <span>4</span>
            </div>
            <div className="hidden lg:flex uppercase flex-col font-body">
                <p className="text-xs text-PastelBlue">step 1</p>
                <p className=" text-sm text-white font-semibold tracking-wide">summary</p>
            </div>
        </div>

    </div>

    )
}

export default Steps;