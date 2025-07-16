import { makeStyles } from "tss-react/mui";

export const useRatingBubblesStyles = makeStyles()({
    bubble: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        fontFamily: "SuisseIntl-Regular",
        fontWeight: 400,
        fontSize: "2vh",
        color: "#000000",
        boxSizing: "border-box",
        border: "1px solid #ccc",
        padding: "1vh 2vh",
        borderRadius: "50px",
        backgroundColor: "#ffffff",
    },
    statusCircle: {
        width: "1vh",
        height: "1vh",
        borderRadius: "50%",
        marginLeft: "1vh",
    },
})

export const useButtonStyles = makeStyles()({
    button: {
        backgroundColor: "#2D67FF",
        boxSizing: "border-box",
        padding: "1vh 2vh",
        margin: "0",
        borderRadius: "50px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "1vh",
    },
    title: {
        fontFamily: "SuisseIntl-Light",
        fontWeight: 400,
        fontSize: "2vh",
        color: "#FFFFFF",
        textTransform: "none",
    },
    icon: {
        width: "2vh",
        height: "2vh",
    }
})

export const useProjectImageStyles = makeStyles()({
    root: {
        position: "relative",
        height: "50vh",
        overflow: "hidden",
        borderRadius: "0 0 50px 50px",
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
})

export const useTitleStyles = makeStyles()({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        gap: "0.5vh",
        marginTop: "2vh",
    },
    title: {
        fontFamily: "SuisseIntl-Medium",
        fontWeight: 500,
        fontSize: "8vh",
        lineHeight: "9vh",
        color: "#2D67FF",
        margin: "0",
    },
    subtitle: {
        fontFamily: "SuisseIntl-Light",
        fontWeight: 400,
        fontSize: "4vh",
        color: "#000",
        margin: "0",
    },
    country: {
        color: "rgba(0, 0, 0, 1)",
    },
    city: {
        color: "rgba(0, 0, 0, 0.4)",
        cursor: "pointer",
    },
    location: {
        fontFamily: "SuisseIntl-Light",
        fontWeight: 400,
        fontSize: "2.5vh",
        color: "rgba(0, 0, 0, 0.2)",
        margin: "0",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "4px",
    },
});