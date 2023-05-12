import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Unstable_Grid2';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabsPannel from './Tabs';

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
      <Box sx={{
        my: 4,
        pt: 8,
        pb: 6,
      }}>
        <Grid container spacing={2}>
          <Grid xs={"auto"}>
            <img
              src={`https://cdn.nofated.win/avatarsoss`}
              srcSet={`https://cdn.nofated.win/avatarsoss`}
              alt={'Avatar'}
              loading="lazy"
              width={128}
            />
            {/* <Avatar alt="Nofated" src="https://cdn.nofated.win/avatarsoss" sx={{ width: 128, height: 128 }} /> */}
          </Grid>
          <Grid xs={6}>
            <Typography variant="h4" component="h1" gutterBottom sx={{ fontFamily: 'neonderthaw' }}>
              Nofated
            </Typography>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs>
                <Tab label="Home" />
                <Tab label="About" />
                <Tab label="Blog" href="https://blog.nofated.win" />
              </Tabs>
            </Box>
          </Grid>
          {/*           <TabsPannel /> */}
        </Grid>

        <Copyright />
      </Box>
    </Container>
  );
}
