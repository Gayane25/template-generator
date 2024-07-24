import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  root: {
    maxWidth: 422,
    position: 'relative',

  },
  select: {
    width: '100%',
    height: 51,
    border: '1px solid #DEDEDE',
    outline: 'none',
    borderRadius: 4,
    lineHeight: '1.5em',
    padding: 10,
  },
}, { name: 'Template-dropdown' });
