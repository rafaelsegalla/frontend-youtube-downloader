import React, { useState } from 'react'
import {UriValidator} from "../../utils/UriValidator";
import {useNavigate} from "react-router-dom";
import {Paths} from "../../constants/Paths";

function Home() {
    const navigate = useNavigate();
    const [url, setUrl] = useState("");
    const [isValidUrl, setIsValidUrl] = useState(true);

    const searchUrl = (url : string) => {
        let isValid = UriValidator.isValid(url);
        setIsValidUrl(isValid);

        if (isValid) {
            navigate(`${Paths.DOWNLOAD}?url=${encodeURI(url)}`);
        }
    }

    const handleUrl = (e : React.FormEvent<HTMLInputElement>) => {
        setUrl(e.currentTarget.value);
    }

    return (
        <div className="App">
            <div className="card">
                <input value={url} onChange={handleUrl} className={"w-50"} type={"url"} placeholder={"https://www.youtube.com/watch?v=7ojFBz0b_W0"}/>
                <button onClick={() => searchUrl(url)}>
                    Buscar
                </button>
                {
                    !isValidUrl && (<p className={"txt-danger"}>A url informada é inválida</p>)
                }
            </div>
        </div>
    )
}

export default Home
