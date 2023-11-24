import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  quoteContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20
  },
    quoteAddField: {
      backgroundColor: 'black',
      marginBottom: 30,
      width: '80%',
    }
});
