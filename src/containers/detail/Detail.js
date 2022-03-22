import React, {useEffect, useState} from "react";

import "./Detail.scss";
import ReactMarkdown from "markdown-to-jsx";
import { useParams} from "react-router";

import DetailHeader from "../../components/detailHeader/DetailHeader";
import {useLocalStorage} from "../../hooks/useLocalStorage";
import {StyleProvider} from "../../contexts/StyleContext";
import Footer from "../../components/footer/Footer";
import ScrollToTopButton from "../topbutton/Top";
import Button from "../../components/button/Button";

export default function Detail() {
    const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
    const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
    const {fileName} = useParams();
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        console.log(`../../components/markdown/${fileName}`)
        import(`../../components/markdown/${fileName}`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setMarkdown(res))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    },[]);

    const changeTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <div className={isDark ? "dark-mode" : null}>
            <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
                <DetailHeader/>
                {/*<div className="button-detail-div">*/}
                {/*    <Button text="뒤로가기"/>*/}
                {/*</div>*/}
                <div className="detail-main" id="detail">
                    <div className="container">
                        <ReactMarkdown>
                            {markdown}
                        </ReactMarkdown>
                    </div>
                </div>
                <Footer />
                <ScrollToTopButton />
            </StyleProvider>
        </div>
    );
}
