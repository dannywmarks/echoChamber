import React from "react";
import { Link } from 'react-router-dom'
import useStyles from "./styles";
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
// import Button from `@material-ui/core/Button`
// import Typography from `@material-ui/core/Typography`



const ProfileItem = ({
  profile: {
    user: { _id, name },
    interests,
    skill,
    rank,
    bio,
  },
}) => {
  const classes = useStyles();
  return <Card className={classes.root}>
    <CardContent>
    <img src='' alt='' className='round-img' />
    <div>
      <h2>{name}</h2>
      <p>{rank} {skill && <span> at {skill}</span>}</p>
      <p className='my-1'>{bio && <span> at {bio}</span>}</p>
      
      <ul>
        {interests.slice(0,4).map((interest, index) => (
          <li key={index} className='text-primary'>
            {interest}
          </li>
        ) )}
      </ul>
    </div>
    </CardContent>
    <CardActions>
        <Button>
        <Link to={`/profile/${_id}`} className='btn btn-primary'> View Profile </Link>
        </Button>
    </CardActions>
  </Card>;
};

export default ProfileItem;
