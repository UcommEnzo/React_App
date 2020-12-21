import React, {useState} from "react";
import preloader from "../../../assets/images/preloader.svg";

let Preloader = (props) => {
    let [message, setMessage] = useState("")
    setTimeout(() => setMessage("Возможны технические работы на сервере"), 3000)

    return <div>
            <img src={preloader}/>
            {message}
        </div>
}

export default Preloader;