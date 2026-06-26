import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    Tabs,
    Tab,
} from "@mui/material";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

export default function Section({
    title,
    apiEndpoint,
    isSongs = false,
}) {
    // const [albums, setAlbums] = useState([]);
    // const [showCarousel, setShowCarousel] = useState(true);
    const [data, setData] = useState([]);

    const [showCarousel, setShowCarousel] =
        useState(true);

    const [genres, setGenres] = useState([]);

    const [selectedGenre, setSelectedGenre] =
        useState("all");

    const [filteredSongs, setFilteredSongs] =
        useState([]);


    // Albums/Songs
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(apiEndpoint);

            setData(res.data);

            if (isSongs) {
                setFilteredSongs(res.data);
            }
        };

        fetchData();
    }, [apiEndpoint]);

    // Genres
    useEffect(() => {
        if (!isSongs) return;

        const fetchGenres = async () => {
            const res = await axios.get(
                "https://qtify-backend.labs.crio.do/genres"
            );

            setGenres([
                {
                    key: "all",
                    label: "All",
                },
                ...res.data.data,
            ]);
        };

        fetchGenres();
    }, [isSongs]);
    // Filter Songs
    useEffect(() => {
        if (!isSongs) return;

        if (selectedGenre === "all") {
            setFilteredSongs(data);
        } else {
            setFilteredSongs(
                data.filter(
                    (song) =>
                        song.genre.key === selectedGenre
                )
            );
        }
    }, [selectedGenre, data]);

    // const handleTabChange = (_, value) => {
    //     setTab(value);

    //     if (value === "all") {
    //         setDisplayData(data);
    //         return;
    //     }

    //     setDisplayData(
    //         data.filter((song) => song.genre.key === value)
    //     );
    // };

    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}>{title}</h2>
                {!isSongs && (
                    <button
                        className={styles.collapseBtn}
                        onClick={() =>
                            setShowCarousel(!showCarousel)
                        }
                    >
                        {showCarousel
                            ? "Show All"
                            : "Collapse"}
                    </button>
                )}
            </div>
            {isSongs && (
                <Tabs
                    value={selectedGenre}
                    onChange={(e, value) =>
                        setSelectedGenre(value)
                    }
                    className={styles.tabs}
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: "#34C94B",
                        },
                    }}
                >
                    {genres.map((genre) => (
                        <Tab
                            key={genre.key}
                            value={genre.key}
                            label={genre.label}
                        />
                    ))}
                </Tabs>
            )}


            {isSongs || showCarousel ? (
                <Carousel
                    data={
                        isSongs
                            ? filteredSongs
                            : data
                    }
                    renderComponent={(item) => (
                        <Card
                            image={item.image}
                            title={item.title}
                            follows={
                                isSongs
                                    ? item.likes
                                    : item.follows
                            }
                            chipLabel={
                                isSongs
                                    ? "Likes"
                                    : "Follows"
                            }
                        />
                    )}
                />
            ) :
                (
                    <div className={styles.cardContainer}>
                        {data.map((item) => (
                            <Card
                                key={item.id}
                                image={item.image}
                                title={item.title}
                                follows={item.follows}
                                chipLabel="Follows"
                            />
                        ))}
                    </div>
                )}
        </section>
    );
}