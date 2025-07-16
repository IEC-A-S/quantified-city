import React, { FC } from 'react';
import { Typography } from '@mui/material';
import { useConetnsStyles } from '../styles';

interface ProjectDescriptionProps {
    parametrs: string;
    investment: string | number;
    newJobs: string | number;
    startYear: string | number;
    contractType: string;
}

export const ProjectDescription: FC<ProjectDescriptionProps> = ({
    parametrs,
    investment,
    newJobs,
    startYear,
    contractType,
}) => {

    const { classes } = useConetnsStyles();

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: "2vw",
            flex: 5,
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: "2vh",
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: "2vh",
                }}>
                    <Typography className={classes.smallText} style={{ width: "11vw"}}>
                        Parameters
                    </Typography>
                    <Typography className={classes.smallText} style={{ maxWidth: "29vw" }}>
                        {parametrs}
                    </Typography>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: "2vh",
                }}>
                    <Typography className={classes.smallText} style={{ width: "11vw"}}>
                        Investment, $USD M
                    </Typography>
                    <Typography className={classes.smallText} style={{ maxWidth: "29vw" }}>
                        {investment}
                    </Typography>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: "2vh",
                }}>
                    <Typography className={classes.smallText} style={{ width: "11vw"}}>
                        New jobs
                    </Typography>
                    <Typography className={classes.smallText} style={{ maxWidth: "29vw" }}>
                        {newJobs}
                    </Typography>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: "2vh",
                }}>
                    <Typography className={classes.smallText} style={{ width: "11vw"}}>
                        Start, year
                    </Typography>
                    <Typography className={classes.smallText} style={{ maxWidth: "29vw" }}>
                        {startYear}
                    </Typography>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: "2vh",
                }}>
                    <Typography className={classes.smallText} style={{ width: "11vw"}}>
                        Contract type
                    </Typography>
                    <Typography className={classes.smallText} style={{ maxWidth: "29vw" }}>
                        {contractType}
                    </Typography>
                </div>
            </div>
        </div>
    )
}