import type { FC, React } from 'react';
import { Typography } from '@mui/material';
import { useProjectImageStyles } from "./styles";
import { Button } from './Button';

interface TProjectImageProps {
    imageURL: string;
    style?: React.CSSProperties;
}

export const ProjectImage: FC<TProjectImageProps> = ({ imageURL, style }) => {

    const { classes } = useProjectImageStyles();

    return (
        <div className={classes.root} style={style}>
            <img className={classes.image} src={imageURL} alt="project image" />
            <div style={{
                position: 'absolute',
                bottom: "4vh",
                left: "4vh",
            }}>
                <Button title='Add project to Portfolio' variant='icon' />
            </div>
        </div>
    );
}