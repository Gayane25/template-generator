import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  root: {
    display: 'flex',
    maxWidth: 700,
    width: '100%',
    marginTop: 50,
    cursor: 'pointer',
  },
  left: {
    display: 'flex',
    maxWidth: 700,
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
  },
  center: {
    display: 'flex',
    maxWidth: 700,
    marginTop: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  right: {
    display: 'flex',
    maxWidth: 700,
    marginTop: 50,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',

  },
  descriptionSection: {
    padding: [0, 10],
    marginTop: 10,
    fontSize: 18,
    maxWidth: 520,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

  },
  avatarSection: {},
  avatar: {

    border: 'none',
    '& img': {
      width: 160,
      height: 160,
      borderRadius: '50%',
    },
  },
  icons: {
    display: 'flex',
    maxWidth: 160,
    justifyContent: 'space-around',
    '& span': {
      cursor: 'pointer',
    },
  },
  description: {
    textAlign: 'justify',
    width: '100%',
  },

}, { name: 'SignatureTemplate' });
