import React from "react";
import { useState, useEffect } from "react";
import { discover, genre } from "../../ultis/Request";
import styles from "./Main.module.scss";
import Card from "../../components/card/Card";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import Box from "@mui/material/Box";

function Main() {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState([]);
  const [genredId, setGenreId] = useState();

  useEffect(() => {
    const fetch = async () => {
      const result = await genre();
      if (result) {
        result.unshift({
          id: 0,
          name: "",
        });
      }
      setFilter(result);
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const result = await discover(genredId);
      setMovies(result);
    };
    fetch();
  }, [genredId]);
  return (
    <main className={styles.main}>
      <section className={styles.wrapper}>
        <div className="container-fluid">
          <h4 className={styles.header}>
            All movies
            <Box sx={{ minWidth: 120 }}>
              <FormControl
                sx={{
                  m: 1,
                  minWidth: 80,
                  paddingLeft: 10,
                }}
              >
                <InputLabel
                  variant="standard"
                  htmlFor="uncontrolled-native"
                  sx={{ color: "white", padding: "0 10px" }}
                >
                  Category
                </InputLabel>
                <NativeSelect
                  sx={{ color: "white" }}
                  defaultValue={10}
                  inputProps={{
                    name: "genre",
                    id: "uncontrolled-native",
                  }}
                  onChange={(e) => {
                    setGenreId(e.target.value);
                  }}
                >
                  {filter &&
                    filter.length > 0 &&
                    filter.map((genre) => (
                      <option
                        className={styles.genre}
                        key={genre.id}
                        value={genre.id}
                      >
                        {genre.name}
                      </option>
                    ))}
                </NativeSelect>
              </FormControl>
            </Box>
          </h4>
          <div className="row mt-5">
            {movies &&
              movies.length > 0 &&
              movies.map((movie) => <Card key={movie.id} movie={movie} />)}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
