import React from "react";
import styles from "./NavButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function RightNavButton() {
    return (
        <button className={`next-btn ${styles.right}`}>
            <FontAwesomeIcon
                icon={faChevronRight}
                className={styles.icon}
            />
        </button>
    );
}