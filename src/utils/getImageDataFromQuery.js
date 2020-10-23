const getImageDataFromQuery = imgData => {
  const { img, id, description } = imgData;
  const { url } = img;
  return { id, description, url };
};

export default getImageDataFromQuery;
