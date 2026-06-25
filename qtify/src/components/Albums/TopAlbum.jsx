import React, { useEffect, useState } from "react";
import axios from "axios";
import Section from "../Section/Section";
import Card from "../Card/Card";
import styles from "./Album.module.css";

export default function TopAlbums() {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const response = await axios.get(
                    "https://qtify-backend.labs.crio.do/albums/top"
                );

                setAlbums(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchAlbums();
    }, []);

    return (
        <Section title="Top Albums">
            {albums.map((album) => (
                <Card
                    key={album.id}
                    image={album.image}
                    title={album.title}
                    follows={album.follows}
                />
            ))}
        </Section>
    );
}