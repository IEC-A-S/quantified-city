import React, { FC } from 'react';
import { useButtonStyles } from './styles';
import { Typography } from '@mui/material';

interface TButtonProps {
    title: string;
    onClick?: () => void;
    disabled?: boolean;
    variant?: 'text' | 'icon' | undefined;
    style?: React.CSSProperties;
}

export const Button: FC<TButtonProps> = ({ title, onClick, disabled, variant, style }) => {

    const { classes } = useButtonStyles();

    return (
        <div
            className={classes.button}
            onClick={onClick}
            style={style ? style : {
                opacity: disabled ? 0.5 : 1,
                cursor: disabled ? 'default' : 'pointer',
                pointerEvents: disabled ? 'none' : 'auto',
            }}
        >
            {variant === 'icon' ? (
                <>
                    <img className={classes.icon} src="/assets/like_icon.svg" alt="icon" />
                    <Typography className={classes.title}>{title}</Typography>
                </>
            ) : (
                <Typography className={classes.title}>{title}</Typography>
            )}
        </div>
    );
}