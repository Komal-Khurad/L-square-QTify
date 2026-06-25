import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Section.module.css";
import Card from "../Card/Card";

export default function Section({
    title,
    apiEndpoint,
}) {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const response = await axios.get(apiEndpoint);
                setAlbums(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchAlbums();
    }, [apiEndpoint]);
    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}>{title}</h2>

                <button className={styles.collapseBtn}>
                    Collapse
                </button>
            </div>
            <div className={styles.cardContainer}>
                {albums.map((album) => (
                    <Card
                        key={album.id}
                        image={album.image}
                        title={album.title}
                        follows={album.follows}
                    />
                ))}
            </div>
        </section>
    );
}