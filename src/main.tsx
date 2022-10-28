import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Paths} from "./constants/Paths";
import Home from "./modules/home/Home";
import NoPage from "./modules/nopage/NoPage";
import DownloadPage from "./modules/download/DownloadPage";
import Header from "./modules/Header";
import Loader from "./components/loader/Loader";
import {LoaderContext} from "./components/loader/LoaderContext";


export default function App() {
    const [loading, setLoading] = useState(false);

    return (
        <LoaderContext.Provider value={{loading, setLoading}}>
            <Loader />
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path={Paths.HOME}>
                        <Route index element={<Home />} />
                        <Route path={Paths.DOWNLOAD} element={<DownloadPage />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </LoaderContext.Provider>
    );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>
)
