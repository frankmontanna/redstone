interface FormHeaderProps { 
    title: string,
}

export function FormHeader(props: FormHeaderProps) { 
    return (
        <div>
        <h2
        className="text-main-pay-text text-[26px]  py-[15px] px-[25px] bg-main-pay-header "
        >{props.title}</h2>
    </div>
    )
}