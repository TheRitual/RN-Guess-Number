import swatches from "./swatches";

export const primaryColor = swatches.violetRed;
export const accentColor = swatches.electricViolet;

const defaultTheme = {
    default: {
        accent: accentColor,
        primary: primaryColor,
        screen: {
            padding: 10,
        },
        title: {
            size: 20,
            marginVertical: 20,
        },
        button: {
            width: 100,
            backgroundColor: primaryColor,
        },
        input: {
            borderColor: swatches.grey,
            borderBottomWidth: 1,
            height: 30,
            marginVertical: 10,
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
            background: primaryColor,
            text: swatches.black,
        },
        size: {
            font: 30,
            height: 90,
            paddingTop: 36,
        }
    },
    numberInput: {
        size: {
            width: 60,
            font: 30,
        },
    },
    selectedNumber: {
        size: {
            marginTop: 20,
        }
    },
    numberInput: {
        color: {
            border: accentColor,
            number: accentColor,
        },
        params: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        size: {
            border: {
                radius: 10,
                width: 2,
            },
            font: 25,
            marginVertical: 10,
            padding: 10,
        },
    },
    gameScreen: {
        size: {
            padding: 10,
            marginTop: 100,
        },
    },
}

export default defaultTheme;