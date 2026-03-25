//props Status, Resilience impact, Direct impact, Indirect impact
import React from 'react';
import { Typography } from '@mui/material';
import { useConetnsStyles } from '../styles';
import { RaitingBubble } from './UI/RatingBubble';
import { getAssessmentColor } from '../../../utils/assessment';

interface IRatingBubleObject {
    title: string;
    value?: string;
}

interface ProjectStatusProps {
    status: IRatingBubleObject;
    resilienceImpact: string;
    directImpact: IRatingBubleObject[];
    indirectImpact: IRatingBubleObject[];
}

export const ProjectStatus: React.FC<ProjectStatusProps> = ({
    status,
    resilienceImpact,
    directImpact,
    indirectImpact,
}) => {

    const { classes } = useConetnsStyles();
    const bubbleColor = getAssessmentColor(resilienceImpact);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'space-between',
            gap: "5vw",
            flex: 5,
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: "2vh",
            }}>
                <div className={classes.statusRow}>
                    <Typography className={classes.smallText} style={{ width: "9vw" }}>
                        Status
                    </Typography>
                    <RaitingBubble title={status.title} value={status.value} />
                </div>
                <div className={classes.statusRow}>
                    <Typography className={classes.smallText} style={{ width: "9vw" }}>
                        Resilience impact
                    </Typography>
                    <RaitingBubble title={resilienceImpact} style={{
                        borderColor: bubbleColor,
                        color: bubbleColor,
                    }} />
                </div>
                <div className={classes.statusRow}>
                    <Typography className={classes.smallText} style={{ width: "9vw" }}>
                        Direct impact
                    </Typography>
                    {

                        directImpact.map((item, index) => (
                            <RaitingBubble key={index} title={item.title} value={item.value} />
                        ))
                    }

                </div>
                <div className={classes.statusRow}>
                    <Typography className={classes.smallText} style={{ width: "9vw" }}>
                        Indirect impact
                    </Typography>
                    {
                        indirectImpact.map((item, index) => (
                            <RaitingBubble key={index} title={item.title} value={item.value} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
