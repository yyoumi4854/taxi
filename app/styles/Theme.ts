const colors = {
  // main
  main: '#FFA800',
  mainDeep: '#FF7B00',
  mainLight: '#FFEFD2',

  // grey
  grey: '#D9D9D9',
  darkGrey: '#888888',
  lightGrey: '#F5F5F7',

  black: '#333',

  red: '#F36E51',
  blue: '#519CF3',
};

const fonts = {
  // size
  baseSize: '14px',
  smallSize: '12px',
  mediumSize: '18px',
  largeSize: '20px',

  // weight
  redular: 'NotoSansKRRegular',
  medium: 'NotoSansKRMedium',
  bold: 'NotoSansKRBold',

  // line-height 1.25
  baseHight: '17.5px',
  smallHeight: '15px',
  mediumHeight: '22.5px',
  largeHeight: '25px',
};

const fontCommon = {
  base: `
    font-size: ${fonts.baseSize};
    line-height: ${fonts.baseHight};
  `,
  small: `
    font-size: ${fonts.smallSize};
    line-height: ${fonts.smallHeight};
  `,
  medium: `
    font-size: ${fonts.mediumSize};
    line-height: ${fonts.mediumHeight};
  `,
  large: `
    font-size: ${fonts.largeSize};
    line-height: ${fonts.largeHeight};
  `,
};

const common = {
  flexCenter: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexRowCenter: `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,
};

const Theme = {
  colors,
  fonts,
  fontCommon,
  common,
};

export default Theme;
