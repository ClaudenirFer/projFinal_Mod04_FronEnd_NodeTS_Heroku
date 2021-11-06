import { useState, useEffect } from "react";
import { Api } from "../../api/Api";
import GenreCard from "../GenreCard/GenreCard";

export const GenreList = (props) => {
  const [genre, setGenre] = useState([]);
  console.log("PROPS: ", props);

  useEffect(() => {
    const loadGenreList = async () => {
      const response = await Api.buildApiGetRequest(Api.readAllGenreUrl());
      console.log("Genre List Response: ", response);

      const results = await response.json();
      setGenre(results);
    };

    loadGenreList();
  }, []);

  return (
    <div className="cards">
      {genre.map((genre, index) => (
        <GenreCard key={`genre_list_${index}`} genre={genre}></GenreCard>
      ))}
    </div>
  );
};
