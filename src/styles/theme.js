const LAYOUT = {
  BORDER_RADIUS: 5,
  ROOT_PIXEL_SIZE: 16,
};

const COLORS = {
  BLACK: '#000000',
  BLACK_015: 'rgba(0,0,0, 0.15)',

  WHITE: '#FFFFFF',

  GRAY_30: '#333333',
  GRAY_50: '#555555',
  GRAY_70: '#7B7B7B',
  GRAY_100: '#AAAAAA',
  GRAY_150: '#DDDDDD',
  GRAY_200: '#F6F6F6',
  GRAY_250: '#F3F3F3',

  MINT_400: '#49A09D',
  MINT_500: '#5FBEBB',
  MINT_900: '#95E0DE',

  BLUE_150: '#0066ff',
  BLUE_700: '#4B7CF9',

  ORANGE_500: '#E4AB2F',

  RED_500: '#DB574A',

  GREEN_500: '#73BB2F',
};

const BRAND_COLORS = {
  PRIMARY: COLORS.MINT_500,
  PRIMARY_FONT: COLORS.WHITE,

  DEFAULT: COLORS.WHITE,
  DEFAULT_FONT: 'inherit',

  SUCCESS: COLORS.BLUE_700,
  SUCCESS_FONT: COLORS.WHITE,

  WARRING: COLORS.ORANGE_500,
  WARRING_FONT: COLORS.WHITE,

  DANGER: COLORS.RED_500,
  DANGER_FONT: COLORS.WHITE,

  INFO: COLORS.GREEN_500,
  INFO_FONT: COLORS.WHITE,
};

export { LAYOUT, COLORS, BRAND_COLORS };
