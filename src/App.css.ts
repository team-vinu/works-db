import {
    style,
    keyframes,
    globalStyle
} from "@vanilla-extract/css"

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

export const appHeader = style({
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: `flex`,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
})

export const appLink = style({
    color: "#61dafb",
})

globalStyle("button", {
    fontSize: "calc(10px + 2vmin)"
})