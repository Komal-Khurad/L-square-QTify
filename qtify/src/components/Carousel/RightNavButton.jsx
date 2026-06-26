import React, { forwardRef } from "react";
import styles from "./NavButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

// export default function RightNavButton() {
//     return (
//         <button className={`next-btn ${styles.right}`}>
//             <FontAwesomeIcon
//                 icon={faChevronRight}
//                 className={styles.icon}
//             />
//         </button>
//     );
// }

const RightNavButton = forwardRef(({ hidden }, ref) => {
    return (
        <button
            ref={ref}
            className={styles.right}
            style={{
                visibility: hidden ? "hidden" : "visible",
            }}
        >
            <FontAwesomeIcon
                icon={faChevronRight}
                className={styles.icon}
            />
        </button>
    );
});

export default RightNavButton;