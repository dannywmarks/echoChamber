import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(() => ({
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
  image: {
    marginLeft: '15px',
    height: '150px'
  }
}));