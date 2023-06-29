import clsx from "clsx";


function InfoFormListItem(props) {

    const inputObject = {
        name: {
            label: "Name",
            type: "text",
            placeholder: "e.g. Stephen King",
            pattern: /^.+$/s
        },
        email: {
            label: "Email Address",
            type: "email",
            placeholder: "e.g. stephenking@lorem.com",
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
        },
        phone: {
            label: "Phone Number",
            type: "tel",
            placeholder: "e.g. +1 234 567 890",
            pattern: /^[+]?[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{4,6}$/
        },
    }

    const handleValidation = (e) => {
        // eslint-disable-next-line no-unused-expressions
        inputObject[props.name]["pattern"].test(e.target.value) 
        ? props.setInvalidFields(arr => arr.filter(val => val !== e.target.name))
        : props.invalidFields.includes(e.target.name)
        ? ''
        : props.setInvalidFields(arr => [...arr, e.target.name])
    }

    return (
        <li className="pb-5 relative">
            <span className={clsx("text-StrawberryRed text-sm absolute right-0 top-0", {"hidden": !props.invalidFields.includes(props.name)})} >
                {props.name === "name" && props.invalidFields.includes(props.name) ? "This field is required" : "Please match format" }
            </span>
            <label htmlFor={props.name} className=" pb-1 text-sm text-MarineBlue block font-medium">{inputObject[props.name]["label"]}</label>
            <input id={props.name} name={props.name} onChange={e => console.log(e.target.checkValidity())} placeholder={inputObject[props.name]["placeholder"]} onBlur={handleValidation} 
            className={clsx("border rounded-lg border-gray-300 h-9 w-[100%] placeholder:text-gray-400 px-3 py-5 placeholder:font-medium max-w-lg hover:cursor-pointer hover:border-PurplishBlue focus-visible:border-PurplishBlue",
            {"hover:border-StrawberryRed border-2 border-StrawberryRed": props.invalidFields.includes(props.name)})} required type={inputObject[props.name]["type"]} />
        </li>
    )
}


function InfoForm(props) {
    return (
        <ul className={clsx({"hidden": props.step !== 1})}>
            <InfoFormListItem name="name" invalidFields={props.invalidFields} setInvalidFields={props.setInvalidFields} />
            <InfoFormListItem name="email" invalidFields={props.invalidFields} setInvalidFields={props.setInvalidFields} />
            <InfoFormListItem name="phone" invalidFields={props.invalidFields} setInvalidFields={props.setInvalidFields} />
        </ul>
    )
}

export default InfoForm;