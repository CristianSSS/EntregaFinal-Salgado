import "./menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { Link } from "react-router-dom";

import { getListCategory } from "../../mock";
import { useEffect } from "react";

export default function Menu(){

    const [visible, setVisible] = useState(false);

    const [categories, setCategoties] = useState([]);

    useEffect(()=>{

        getListCategory()
        .then(category=>setCategoties(category));
    
      },[])

    return(
        <menu className="menu"> 
            <li>

                <Link className="menu__button" to={"/"} >Inicio</Link>
                
            </li>

            <li>
                <Link className="menu__button" to={"/products"} >Productos</Link>
            </li>

            {
                categories.length > 0 ? (

                    <li>
                        <button className="menu__button menu__button--dropdown" onClick={()=> setVisible(!visible)}>
                            Categorias
                            <FontAwesomeIcon icon={faCaretDown} style={{padding:"0 10px"}}/>
                        </button>
                        

                        <ul className="dropdown-list" style={visible ? {display:"flex"} : {display:"none"}}>

                            {
                                categories.map(category=>{

                                return(

                                    <Link key={category} to={`/category/${category}`} className="dropdown-list__button">
                                        {category}
                                    </Link>
                                    )
                                })
                            }



                        </ul>
                    </li>
                ):(
                    ""
                )
            }

            

            <li>
                <button className="menu__button">
                    Contacto
                </button>
            </li>
        </menu>
    )
}