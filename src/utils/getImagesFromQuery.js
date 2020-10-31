const getImagesFromQuery = (queryResult) => {
  return queryResult.nodes.map(({ createdAt, description, id, img }) => {
    const { fluid } = img.localFile.childImageSharp;
    return { createdAt, description, id, fluid };
  });
};

export default getImagesFromQuery;
