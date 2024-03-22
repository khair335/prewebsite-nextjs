"use client";

import React, { useEffect, useState } from 'react';
import classNames from "classnames";
import { Button } from './button';
import { ChevronIcon } from './icons/chevron';
import { Container } from './container';

export const Hero = () => {
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const phrases = ["high-converting", "better", "faster"];

    useEffect(() => {
        const typePhrase = async () => {
            const phrase = phrases[phraseIndex];
            for (let i = 0; i <= phrase.length; i++) {
                setDisplayedText(phrase.substring(0, i));
                await sleep(100);
            }
            await sleep(1000);
            for (let i = phrase.length; i >= 0; i--) {
                setDisplayedText(phrase.substring(0, i));
                await sleep(100);
            }
            setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        };

        typePhrase();
    }, [phraseIndex]);

    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    return (
        <Container>
            <div className="text-center mt-[40px] pt-16 pb-16">
                <h1 className={classNames("text-gradient my-6 text-6xl font-semibold md:text-7xl")}>
                    The Metricslink Framework for D2C Brands<br />
                </h1>
                <p className={classNames("mb-12 text-lg text-grey-dark md:text-xl")}>
                    Used by some of the greatest upcoming brands, Metricslink enables you to create
                    <br /> <span className={classNames("text-white")}><span>{displayedText}</span><span className="cursor">|</span> components</span> for your customers within seconds.
                </p>
                <div className='flex justify-center items-center gap-6 sm:gap-2 flex-col sm:flex-row '>
                    <Button href="/" variant="primary" size="large">
                        Schedule a demo
                    </Button>
                    <Button href="/" variant="secondary" size="large">
                        Learn our Data Engine
                    </Button>

                </div>
                <p className={classNames("mt-[12px] mb-[12px] text-lg text-primary-text md:text-[12px]")}>
                    – npx discover-metricslink@latest
                </p>
            </div>
        </Container>
    );
};