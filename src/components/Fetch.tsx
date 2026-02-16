import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [gifs, setGifs] = useState<any[]>([]);

  const apiKey = "kxvqHHJPkM99pYnflwwaNxBQF7EbhiTK"; // ← pega tu API key aquí

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=5`)
      .then((resp) => resp.json())
      .then((data) => {
        setGifs(data.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
  <div>
    <h1>Trending GIFs 🔥</h1>

    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
      }}
    >
      {gifs.map((gif) => (
        <img
          key={gif.id}
          src={gif.images.fixed_height.url}
          alt={gif.title}
          style={{
            borderRadius: "10px",
          }}
        />
      ))}
    </div>
  </div>
);

};

export default Fetch;
