import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  root: {
    margin: [10, 10, 10, 0],
    '& input': {
      position: 'absolute',
      margin: 0,
      zIndex: 2,
      opacity: 0,
    },
    '& label': {
      cursor: 'pointer',
    },
  },

}, { name: 'SelectBox' });
