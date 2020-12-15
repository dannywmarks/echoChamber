import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  div: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'column',
  },
  heading: {
   fontFamily: 'Echo'
  },
  image: {
    marginLeft: '15px',
    height: '150px'
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: "column-reverse"
    }
  }
  
}));