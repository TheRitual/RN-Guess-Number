import swatches from "./swatches";

const defaultTheme = {
    color: {
        primary: swatches.violetRed,
        header: {
            text: swatches.black,
            background: swatches.violetRed,
        }
    },
    size: {
        header: {
            height: 90,
            font: 30,
            padding: 36,
        }
    }
}

export default defaultTheme;