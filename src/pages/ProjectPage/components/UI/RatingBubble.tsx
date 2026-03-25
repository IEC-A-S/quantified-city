import React from 'react';
import { useRatingBubblesStyles } from './styles';
import { getAssessmentColor } from '../../../../utils/assessment';

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
    const statusCircleColor = value ? getAssessmentColor(value) : "#000";

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
