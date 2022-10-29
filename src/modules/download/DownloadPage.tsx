import {useContext, useEffect, useState} from "react";
import {useNavigate, useSearchParams} from 'react-router-dom';
import {Paths} from "../../constants/Paths";
import Preview from "../../components/preview/Preview";
import {LoaderContext} from "../../components/loader/LoaderContext";
import {DownloadService} from "../../services/DownloadService";

function DownloadPage() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [url, setUrl] = useState<string|null>("");
    const { loading, setLoading } = useContext(LoaderContext);

    useEffect(() => {
        if (!searchParams || !searchParams.get("url")) {
            navigate(Paths.HOME);
        } else {
            setUrl(searchParams.get("url"));
        }
    });

    const download = (url: string|null) => {
        setLoading(true);
        DownloadService.download(url)
            .then(result => {
                var link = document.createElement("a");
                link.href = result.url;
                document.body.appendChild(link);
                link.click();
                link.remove();
                navigate(Paths.SUCCESS);
            })
            .catch(() => {
                alert("Não foi possível realizar o download, tente novamente mais tarde");
                navigate(Paths.HOME);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return <div>
        <Preview url={url} />
        <div>
            <button disabled={loading} onClick={() => download(url)} className={"btn-success btn-large"}>Baixar</button>
        </div>
    </div>
}

export default DownloadPage
