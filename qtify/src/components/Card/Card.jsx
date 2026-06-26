import React from "react";

import {
    Card as MuiCard,
    CardMedia,
    CardContent,
    Chip,
    Typography,
} from "@mui/material";
import styles from "./Card.module.css";

export default function Card({ image,
    title,
    follows,
    chipLabel, }) {
    return (
        <div className={styles.cardWrapper}>
            <MuiCard className={styles.card}>
                <CardMedia
                    component="img"
                    image={image}
                    alt={title}
                    className={styles.cardImage}
                />
                <CardContent className={styles.cardContent}>
                    <Chip
                        // label={`${follows} Follows`}
                        label={`${follows} ${chipLabel}`}
                        className={styles.chip}
                    />
                </CardContent>
            </MuiCard>
            <Typography className={styles.albumTitle}>
                {title}
            </Typography>
        </div>
    )
}