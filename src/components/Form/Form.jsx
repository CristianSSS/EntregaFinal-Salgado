import Button from "../Button/Button";

export default function Form(){

    const handlerForm=(e)=>{
        e.preventDefault()
    }

    return(
        <>
            <form onSubmit={handlerForm} action="" style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"20px", padding:"100px", flexDirection:"column"}}>

                <div>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="name" />
                </div>
                <div>
                    <label htmlFor="phone">Telefono</label>
                    <input type="text" id="phone" />
                </div>
               
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" />
                </div>
               
                <Button text={"Crear orden"} ></Button>
            </form>
        </>
    )
}