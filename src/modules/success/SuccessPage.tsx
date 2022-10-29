import React from "react";
import {useNavigate} from "react-router-dom";
import {Paths} from "../../constants/Paths";

function SuccessPage() {
    const navigate = useNavigate();
    const goToHomePage = () => navigate(Paths.HOME);

    return <div>
        <img className={"rounded"} src="/success.gif" alt="Success!" />
        <h2 className={"success"}>Download realizado com sucesso!</h2>
        <button onClick={() => goToHomePage()}>Voltar para a página inicial</button>
    </div>

}

export default SuccessPage
