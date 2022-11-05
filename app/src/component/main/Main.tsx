import React from "react";
import { atom } from "recoil";
import { Body } from "./modules/Body";
import { Footer } from "./modules/Footer";
import { Header } from "./modules/Header";

export const Main: React.FC = () => {
    const mainState = atom({
        key: 'MainState',
        default: {}
    });

    return <>
        <div className="">
            <div style={{backgroundColor: "red"}}>
                Header
            </div>
            <div style={{backgroundColor: "yellow"}}>
                Body
            </div>
            <div style={{backgroundColor: "blue"}}>
                Footer
            </div>
        </div>
    </>;
};