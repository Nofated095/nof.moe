import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Unstable_Grid2';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Copyright() {
  return (
    <>
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}{new Date().getFullYear()}{' '}
        <Link color="inherit" href="#">
          Amane
        </Link>
        .
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        <Link color="inherit" href="https://icp.gov.moe/?keyword=20230721">
          萌 ICP 备 20230721 号
        </Link>
      </Typography>
    </>
  );
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function App() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Container maxWidth="sm">
      <Box sx={{
        my: 4,
        pt: 8,
        pb: 6,
      }}>
        <Grid container spacing={3.5}>
          <Grid xs={"auto"}>
            <Avatar
              src={`https://cdn.nofated.win/avatarsoss`}
              srcSet={`https://cfdn.nofated.win/avatars/avatar.webp`}
              alt={'avatar'}
              sx={{ width: 128, height: 128 }}
            />
            {/* <Avatar alt="Nofated" src="https://cdn.nofated.win/avatarsoss" sx={{ width: 128, height: 128 }} /> */}
          </Grid>
          <Grid xs={12} sm={8.75}>
            <Typography variant="h4" component="h1" gutterBottom sx={{ fontFamily: 'neonderthaw' }}>
              Amane
            </Typography>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="tabs">
                <Tab label="Home" {...a11yProps(0)} />
                <Tab label="About" {...a11yProps(1)} />
                <Tab label="Blog" href="https://blog.amane.icu" />
              </Tabs>
            </Box>
          </Grid>
          <Box sx={{ width: '100%' }}>
            <TabPanel value={value} index={0}>
              <Box sx={{ my: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  <strong>Yoo!</strong>
                </Typography>
                <Typography paragraph>             
                  I'm Amane, aka Nofated.
                </Typography>
              </Box>
              <Box sx={{ my: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  <strong>Misc</strong>
                </Typography>
                <Typography paragraph>
                  📒️ I have a <Link href="https://blog.amane.icu/">blog</Link> based on Hexo.<br />
                  ⌨️ Coding and open-source are great! Let's contribute together!<br />
                  🧪 I used to be an iGEMer. My team won a 🥈silver medal in <Link href="https://competition.igem.org/">iGEM Competition</Link> 2023!<br />
                </Typography>
              </Box>
              <Box sx={{ my: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  <strong>Find me at</strong>
                </Typography>
                <Stack spacing={2} direction="row">
                  <Button variant="text" color="inherit" href="https://github.com/Nofated095" startIcon={<GitHubIcon />}>
                    GitHub
                  </Button>
                  <Button variant="text" color="inherit" href="https://t.me/s/Nofated" startIcon={<TelegramIcon />}>
                    Telegram
                  </Button>
                  <Button variant="text" color="inherit" href="https://twitter.com/nofated095" startIcon={<TwitterIcon />}>
                    Twitter
                  </Button>
                </Stack>
              </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Box sx={{ my: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  <strong>About</strong>
                </Typography>
                <Typography paragraph>
                  My full name is Tanikaze Amane, but you may hear some one call me Nofated or nof.
                </Typography>
                <Typography paragraph>
                  I do open-source works, you can check them on <Link href='https://github.com/Nofated095'>GitHub</Link>. Most of them are useless and have lots of bugs.
                </Typography>
              </Box>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Box sx={{ my: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                <strong>Redirecting...</strong>
                </Typography>
              </Box>
            </TabPanel>
          </Box>
        </Grid>
        <Copyright />
      </Box>
    </Container>
  );
}
