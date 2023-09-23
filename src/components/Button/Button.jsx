import "./Button.css"

export default function Button({text, action}){

    const handlerButtonAction =()=>{
        action();
    }

    return(
        <button onClick={handlerButtonAction} className="button">
            {text}
        </button>
    )
}