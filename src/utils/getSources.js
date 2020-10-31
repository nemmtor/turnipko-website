const getSources = (image) => {
  const { fluidMobile, fluidDesktop } = image;
  return [
    fluidMobile,
    {
      ...fluidDesktop,
      media: `(min-width: 768px)`,
    },
  ];
};

export default getSources;