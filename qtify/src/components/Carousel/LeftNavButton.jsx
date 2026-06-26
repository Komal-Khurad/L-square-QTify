import leftArrow from "../../assets/left.svg";
import styles from "./NavButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function LeftNavButton() {
    return (
        <button className={`prev-btn ${styles.left}`}>
            <FontAwesomeIcon
                icon={faChevronLeft}
                className={styles.icon}
            />
        </button>
    );
}