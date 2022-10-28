import React, {useContext} from "react";
import {LoaderContext} from "./LoaderContext";

function Loader() {
    const { loading, setLoading } = useContext(LoaderContext);
    return loading ? <div className={"loading"}></div> : null;

}

export default Loader
