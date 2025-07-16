import type { FC, React } from 'react';
import { useConetentRowStyles } from '../styles';

interface IContentRowProps {
    name: string;
    text?: string;
    children?: React.ReactNode;
}

export const ContentRow: FC<IContentRowProps> = ({
    name,
    text,
    children
}) => {

    const { classes } = useConetentRowStyles();

    return (
        <div className={classes.root}>
            <div className={classes.name}>{name}</div>
            {text && (
                <div className={classes.textWrapper}>
                    <div className={classes.text}>{text}</div>
                </div>
            )}
            {children}
        </div>
    )
}