import type { FC, React } from 'react';
import { useGraphStyles } from '../styles';
import { Typography } from '@mui/material';

interface ToolTipProps {
    data: { city: string, category: string }
}

export const ToolTip: FC<ToolTipProps> = ({
    data
}) => {

    const { classes } = useGraphStyles();

    return (
        <div className={classes.toolTip}>
            <Typography className={classes.toolTipText}>
                {data.city} / {data.category}
            </Typography>
        </div>
    );
}