import type { FC, React } from 'react';
import { Typography } from '@mui/material';
import { useTitleStyles } from "./styles";
import { useNavigate } from "react-router-dom";

interface TitleProps {
    subtitle?: string;
    country?: string;
    city?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

export const Title: FC<TitleProps> = ({
    subtitle,
    country,
    city,
    children,
    style
}) => {

    const { classes } = useTitleStyles();
    const navigate = useNavigate();

    return (
        <div className={classes.root} style={style}>
            <div>
                <Typography
                    className={classes.title}
                >
                    {children}
                </Typography>
                <Typography
                    className={classes.subtitle}
                >
                    {subtitle}
                </Typography>
            </div>
            <Typography
                className={classes.location}
            >
                <span className={classes.country}>{country}</span> / <span
                    className={classes.city}
                    onClick={() => {
                        navigate("/city/" + city);
                    }}
                >{city}</span>
            </Typography>
        </div>
    );
};

