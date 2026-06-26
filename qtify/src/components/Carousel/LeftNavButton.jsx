import React, { forwardRef } from "react";
import styles from "./NavButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const LeftNavButton = forwardRef(({ hidden }, ref) => {
    return (
        <button
            ref={ref}
            className={styles.left}
            style={{
                visibility: hidden ? "hidden" : "visible",
            }}
        >
            <FontAwesomeIcon
                icon={faChevronLeft}
                className={styles.icon}
            />
        </button>
    );
});

export default LeftNavButton;