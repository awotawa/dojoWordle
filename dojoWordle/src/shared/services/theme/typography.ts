const fontSizes = {
  XS: 10,
  S: 12,
  M: 14,
  L: 18,
  XL: 21,
  XXL: 48,
};

const title = {
  title1: {
    fontFamily: 'Gotham-Medium',
    fontSize: fontSizes.XXL,
  },
  title2: {
    fontFamily: 'Roboto-Bold',
    fontSize: fontSizes.XL,
  },
  title3: {
    fontFamily: 'Roboto-Bold',
    fontSize: fontSizes.L,
  },
};

const paragraph = {
  common: {
    fontFamily: 'Roboto-Regular',
  },
  paragraph1: {
    fontSize: fontSizes.XL,
  },
  paragraph2: {
    fontSize: fontSizes.L,
  },
  paragraph3: {
    fontSize: fontSizes.M,
  },
  paragraph4: {
    fontSize: fontSizes.S,
  },
  paragraph5: {
    fontSize: fontSizes.XS,
  },
};

const caption = {
  common: {
    fontFamily: 'Roboto-Medium',
  },
  caption1: {
    fontSize: fontSizes.XL,
  },
  caption2: {
    fontSize: fontSizes.L,
  },
  caption3: {
    fontSize: fontSizes.M,
  },
};

export const typography = {
  title,
  paragraph,
  caption,
};
