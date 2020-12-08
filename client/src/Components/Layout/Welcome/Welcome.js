import React from 'react'
import { Container, Typography} from '@material-ui/core'
import Churchill from '../../../images/churchill4.jpg'

const Welcome = () => {
  return (
    <Container>
      <Typography variant='h4'>Welcome to the Echo Chambers. A platform to keep track of notes, ideas, references, and studies. Inspired by the chaos of online tutorials, and the vast amounts of knowledge hidden in plain sight.</Typography>
      <img src={Churchill} width={200} alt='churchill' style={{marginBottom: 20, padding: 20, display: 'block'}} />
    </Container>
  )
}

export default Welcome
