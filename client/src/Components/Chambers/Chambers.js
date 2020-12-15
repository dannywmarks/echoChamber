import React from 'react'
import { Grid, CircularProgress} from '@material-ui/core'
import { useSelector } from 'react-redux'
import Chamber from './Chamber/Chamber'
import useStyles from './styles';

const Chambers = ({setCurrentId}) => {
  const chambers = useSelector((state) => state.chambers)
  const classes = useStyles();

  
  return (
      !chambers.length ? <CircularProgress /> : (
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
          {chambers.map((chamber) => (
            <Grid key={chamber._id} item xs={12} sm={6}>
              <Chamber chamber={chamber} setCurrentId={setCurrentId} />
            </Grid>
          ))}
        </Grid>
      )
  )
}

export default Chambers
