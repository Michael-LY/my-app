import React from 'react'

// material-ui
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center" gutterBottom='true'>
        {'Copyright © '}
        <Link color="inherit" href="http://www.toprace.top/">
          TopRace
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

export default Copyright
