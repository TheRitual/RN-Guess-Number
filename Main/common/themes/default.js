import swatches from "./swatches";

const defaultTheme = {
    default: {
        primary: swatches.violetRed,
        screen: {
            padding: 10,
        },
        title: {
            size: 20,
            marginVertical: 20,
        },
        button: {
            width: 100,
            backgroundColor: swatches.violetRed,
        }
    },
    card: {
        color: {
            background: swatches.white,
            shadow: swatches.black,
        },
        size: {
            elevation: 20,
            padding: 20,
            radius: 20,
            shadow: {
                offset: { width: 0, height: 2 },
                radius: 6,
                opacity: 0.26,
            }
        }
    },
    header: {
        color: {
            background: swatches.violetRed,
            text: swatches.black,
        },
        size: {
            font: 30,
            height: 90,
            paddingTop: 36,
        }
    },
}

export default defaultTheme;