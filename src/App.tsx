import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Unstable_Grid2';
import Avatar from '@mui/material/Avatar';
import Tabs from './Tabs';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://nof.moe">
        Nofated
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Grid container spacing={2}>
          <Grid xs={4}>
            {/* <img
              src={`https://cdn.nofated.win/avatarsoss`}
              srcSet={`https://cdn.nofated.win/avatarsoss`}
              alt={'Avatar'}
              loading="lazy"
              width={128}
            /> */}
            <Avatar alt="Nofated" src="https://cdn.nofated.win/avatarsoss" sx={{ width: 128, height: 128 }} />
          </Grid>
          <Grid xs={8}>
            <Typography variant="h4" component="h1" gutterBottom>
              Nofated
            </Typography>
          </Grid>
        </Grid>
        <Tabs />
        <Copyright />
      </Box>
    </Container>
  );
}
