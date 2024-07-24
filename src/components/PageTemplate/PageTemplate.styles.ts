import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  root: {
    minWidth: 300,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'start',
  },
  sliderGridDesc: {
    maxWidth: 520,
    margin: [40, 20],
    '& div': {
      padding: 4,
    },
  },
  sliderGridRoot: { display: 'flex', justifyContent: 'flex-start' },
  twoImagesWrapper: {
    maxWidth: 670,
    margin: 30,
  },
  twoImagesRoot: {
    minWidth: 653,
    width: '100%',
  },
  wrapper: {
    margin: [30, 0],
    maxWidth: 320,
  },
  main: {
    display: 'flex',
    width: '100%',
  },

  category: {
    fontSize: 18,
    fontWeight: 400,
  },
  cover: {
    ' & img': {
      width: '100%',
    },
  },
  title: {
    fontSize: 21,
    fontWeight: 600,
  },
  rightSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    textAlign: 'justify',
  },
  placeholder: {
    '& img': {
      width: '100%',

    },
  },
  icons: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    cursor: 'pointer',
    justifyContent: 'space-between',
    '& span': {
      display: 'flex',
      margin: 5,
      textAlign: 'center',
      alignItems: 'center',
    },
  },
  socialIcons: {
    extend: 'icons',
    justifyContent: 'flex-start',

  },
  twoIMageIcons: {
    display: 'flex',
    margin: 20,
    textAlign: 'center',
    '& span': {
      alignItems: 'center',
    },
    '& span:first': {
      marginTop: 10,
    },
  },
  bottomSection: {
    mwidth: '100%',
  },
  descripton: {
    textAlign: 'justify',
  },
  button: {
    minWidth: 202,
    height: 48,
    border: 'none',
    outline: 'none',
    borderRadius: 24,
    '& :first-child': {
      backgroundColor: '#000000',
      color: '#FFFFFF',
    },
  },
  buttonsGroup: {
    maxWidth: 512,
    '& button': {
      cursor: 'pointer',
      color: '#000000',
      backgroundColor: '#FFFFFF',
      border: '1px solid #000000',
      margin: 2,
    },
    '& button:first-child': {
      backgroundColor: '#000000',
      color: '#FFFFFF',
    },
  },
}, { name: 'PageTemplate' });
