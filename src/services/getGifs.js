const apiKey = "vUfB1nS4YXxLKmBPKgGn4g71fiEU5nUh";

export default function getGifs({ keyword } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data = [] } = response;
      if (Array.isArray(data)) {
        const allGifs = data.map((image) => {
          const { images, title, id } = image;
          const { url } = images.downsized_medium;
          return { image, title, url, id };
        });
        return allGifs;
      }
    });
}
