import React from 'react'
import {logo} from "../assets"
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {SplitText} from "gsap/SplitText";

const Hero = () => {
    useGSAP(() =>{
        const headerSplit = new SplitText(".head_text", {
            type: "words",
        });

        const descriptionSplit = new SplitText(".desc", {
            type: "lines"
        });

        gsap.from(headerSplit.words, {
            yPercent: 100,
            duration: 1,
            ease: "expo.out",
            stagger: 0.15,
        });

        gsap.from(descriptionSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.06,
            delay: 1,
        });

    })
    return (
        <header className="w-full flex justify-center items-center flex-col">
            <nav className="flex justify-between items-center w-full mb-10 pt-3">
                <img src={logo} alt="logo" className="w-28 object-contain"/>
                <button type="button" onClick={() => window.open("https://github.com/karenspriggs/ai-summary-project")}
                className="black_btn">
                    Github Repo
                </button>
            </nav>

            <h1 className="head_text">
                Summarize Articles with < br className="max-md:hidden"/>
                <span className="orange_gradient">OpenAI GPT-4</span>
            </h1>
            <h2 className="desc">
                Simplify your reading experience with Summize, an open-soure article summarizer
                that transforms lengthy articles into clear and concise summaries.
            </h2>
        </header>
    )
}
export default Hero
