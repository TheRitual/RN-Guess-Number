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
            size: 25,
            marginVertical: 20,
        },
        button: {
            width: 100,
            backgroundColor: primaryColor,
        },
        input: {
            borderColor: swatches.grey,
            borderBottomWidth: 1,
            height: 40,
            marginVertical: 10,
        }
    },
    info: {
        size: {
            font: 20,
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
            backgroundColor: accentColor,
            number: swatches.white,
        },
        params: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        size: {
            border: {
                radius: 50,
                width: 2,
            },
            font: 20,
            marginVertical: 10,
            padding: 15,
            size: 70,
        },
    },
    startGameButton: {
        color: {
            background: primaryColor,
        }
    },
    gameScreen: {
        size: {
            padding: 10,
            marginTop: 10,
        },
        guess: {
            size: {
                margin: 20,
            },
            input: {
                size: {
                    width: 50,
                    fontSize: 30,
                    height: 50,
                },
            },
            button: {
                color: {
                    background: primaryColor,
                },
                size: {
                    marginTop: 30,
                    font: 30,
                    padding: 20,
                }
            }
        },
        roundText: {
            color: {
                text: accentColor,
            },
            size: {
                font: 35,
                margin: 10,
            },
        },
        playerName: {
            size: {
                font: 17,
            },
            color: {
                text: swatches.white,
                background: primaryColor,
            }
        },
        nextRoundButton: {
            color: {
                background: accentColor,
            },
            size: {
                margin: 20,
                font: 30,
                padding: 20,
            }
        },
        winner: {
            color: {
                background: primaryColor,
                text: swatches.white,
            },
            sizes: {
                font: 20,
                marginTop: 10,
            }
        },
        guessCard: {
            size: {
                width: '45%',
                margin: '2%',
            }
        },
        infoCard: {
            color: {
                correct: swatches.greenYellow,
                wrong: swatches.pomegranate,
            }
        }

    },
}

export default defaultTheme;