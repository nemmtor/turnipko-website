const getImagesFromQuery = ({ mobile, desktop }) => {
  return mobile.nodes.map(({ createdAt, description, id, img }) => {
    const { fluid: fluidMobile } = img.localFile.childImageSharp;
    const {fluid: fluidDesktop} = desktop.nodes.filter(({ id: desktopId }) => desktopId === id).pop().img.localFile.childImageSharp;
    return { createdAt, description, id, fluidMobile, fluidDesktop };
  });
};

export default getImagesFromQuery;
