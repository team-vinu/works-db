import { style, keyframes } from "@vanilla-extract/css"

export const app = style({
    textAlign: "center",
});

const appLogoSpin = keyframes({
    "from": {
        transform: `rotate(0deg)`
    },
    "to": {
        transform: `rotate(360deg)`
    },
});

export const appLogo = style({
    height: "40vmin",
    pointerEvents: "none",

    "@media": {
        "(prefers-reduced-motion: no-preference)":{
            animation: `${appLogoSpin} infinite 20s linear`
        }
    },
});