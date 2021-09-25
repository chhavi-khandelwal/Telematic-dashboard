const colors = {
  black100: '#000',
  black90: '#323232',
  black70: '#646464',
  black40: '#b0b0b0',
  white: '#ffffff',
  blue1: '#5489DC',
  blue2: '#d9eef4',
  blue3: '#1360d3',
  green: '#40d145',
  gray1: '#CFCFCF',
  gray2: 'rgba(136, 136, 136, 0.95)',
  gray3: 'rgba(119, 119, 119, 0.95)',
  gray4: '#7E7E7E',
  gray5: '#0F0F0F',
  gray6: '#e0e0e0',
  orange: '#E78946',
  green1: '#40F362',
  pinkDark: '#f22d53',
  black5: '#d8d8d8',
  black20: '#e2e2e2',
  black30: '#cacaca',
  seaBlueMain: '#1d7bf6',
  seaBlueMuted: '#acc9ff',
  seaBlueDark: '#1d7bf6',
};

const variant = {
  milky: {
    color: colors.blue1,
    background: colors.white,
    border: colors.blue1,

    hover: {
      color: colors.blue3,
      background: colors.white,
      border: colors.blue3,
    },
    disabled: {
      color: colors.blue2,
      background: colors.white,
      border: colors.blue2,
    },
  },
  primary: {
    color: colors.white,
    background: colors.blue1,
    border: colors.blue1,
    hover: {
      color: colors.white,
      background: colors.blue3,
      border: colors.blue3,
    },
    disabled: {
      color: colors.white,
      background: colors.blue2,
      border: colors.blue2,
    },
  },
};

export const theme = {
  colors: colors,
  spacings: {
    s: '5px',
    m: '10px',
    l: '15px',
    ml: '20px',
    xl: '30px',
    xxl: '50px',
    xxxs3: '4px',
  },
  buttonTheme: variant,
};
