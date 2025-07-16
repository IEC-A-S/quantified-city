import React from 'react';
import { useRatingBubblesStyles } from './styles';

interface RaitingBubbleProps {
    title: string;
    value?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

export const RaitingBubble: React.FC<RaitingBubbleProps> = ({
    title,
    value,
    style,
    children
}) => {

    let statusCircleColor = "#000";

    if (value) {
        switch (value) {
            case "Very strong":
                statusCircleColor = "#35CB00";
                break;
            case "Strong":
                statusCircleColor = "#A0DA8B";
                break;
            case "Average":
                statusCircleColor = "#FF9B3F";
                break;
            case "Low":
                statusCircleColor = "#FF632F";
                break;
            case "Very low":
                statusCircleColor = "#FF3B29";
                break;
            default:
                statusCircleColor = "#000";
                break;
        }
    }

    const { classes } = useRatingBubblesStyles();

    return (
        (!value) ? (
            <div className={classes.bubble} style={style}>
                {title}
                {children}
            </div>
        ) : (
            <div className={classes.bubble} style={style} >
                {title}
                <div className={classes.statusCircle} style={{ background: statusCircleColor}} ></div>
                {children}
            </div>
        )
    )
}