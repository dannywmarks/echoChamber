import { makeStyles } from '@material-ui/core/styles';
import BackgroundImage from '../../../images/oc-twilight-zone.jpg'


export default makeStyles((theme) => ({
  // root: {
  //   minHeight: '100vh',
  //   backgroundImage: `url(${BackgroundImage})`,
  //   backgroundRepeat: 'no-repeat',
  //   backgroundSize: 'cover'
  // },
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
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: "column-reverse"
    }
  }
  
}));


