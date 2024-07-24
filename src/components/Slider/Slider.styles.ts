import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: 30,
  },
  thumbnails: {
    '& ul': {
      textDecoration: 'none',
      listStyle: 'none',

      '& li img': {
        maxWhidth: 108,
        maxHeight: 113,
        cursor: 'pointer',
        borderRadius: 4,
      },
    },
  },
  mainView: {
    padding: [15, 5],

    '& img': {
      width: '100%',
      height: 466,
      borderRadius: 24,
    },
  },
}, { name: 'Slider' });
