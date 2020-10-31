const getImagesFromQuery = (queryResult) => {
  return queryResult.edges.map(({ node }) => {
    const { createdAt, description, id, img } = node;
    const { childImageSharp } = img.localFile;
    const image = childImageSharp.fixed || childImageSharp.fluid;
    return { createdAt, description, id, image };
  });
};

export default getImagesFromQuery;
