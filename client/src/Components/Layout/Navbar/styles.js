import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
   fontFamily: 'Echo'
  },
  ul: {
    listStyletype: 'none',
    margin: '0',
    padding: '0',
    overflow: 'hidden',
    backgroundColor: '#333'
  },
  li: {
    float: 'right',
    display: 'inline'
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