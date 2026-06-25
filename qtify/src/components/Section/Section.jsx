import React from "react";
import styles from "./Section.module.css";

export default function Section({ title,
    data = [],
    buttonLabel = "Collapse",
    onButtonClick,
    children
}) {
    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}>{title}</h2>

                <button
                    className={styles.actionButton}
                    onClick={onButtonClick}
                >
                    {buttonLabel}
                </button>
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </section>
    );
}