import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  videoItem: {
    borderRadius: 15,
    margin: '15px 0',
    display: 'flex',
    alignItems: 'center'
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