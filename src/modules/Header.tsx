import React from "react";
import {Paths} from "../constants/Paths";

function Header() {
    return <div className="App">
        <div>
            <a href={Paths.HOME}>
                <img src="/icone-yt.png" className="logo" alt="Youtube Downloader"/>
            </a>
        </div>
        <h1>Youtube Downloader</h1>
    </div>

}

export default Header
