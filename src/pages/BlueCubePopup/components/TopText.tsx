import { Typography } from "@mui/material";
import { useTopTextStyles } from "../components/styles";
import type { FC } from "react";

interface TopTextProps {
    title: string,
    text: string
}


export const TopText: FC<TopTextProps> = ({
    title, text
}) => {

    const { classes } = useTopTextStyles();

    return (
        <div className={classes.wrapper}>
            <div className={classes.titleWrapper}>
                <Typography className={classes.title}>
                    {title}
                </Typography>
            </div>
            <Typography className={classes.text}>
                {text}
            </Typography>
        </div>
    )
}