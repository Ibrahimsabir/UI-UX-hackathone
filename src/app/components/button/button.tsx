interface type {
    text: string;
    bgColor: string;
    border?: string;
    textcolor:string
}

export default function Button(props: type){
 return(
<div className={`h-[52px] w-[320px] relative top-[30px] rounded-[62px] bg-black bg-${props.bgColor} py-[16px] text-center text-[16px] font-medium leading-[21.6px] ${props.textcolor}`}>{props.text}</div>

    )
}