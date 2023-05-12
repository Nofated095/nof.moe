import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Unstable_Grid2';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

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
        <Grid container spacing={2}>
          <Grid xs={"auto"}>
            <img
              src={`https://cdn.nofated.win/avatarsoss`}
              srcSet={`https://cdn.nofated.win/avatar/256`}
              alt={'Avatar'}
              loading="lazy"
              width={128}
            />
            {/* <Avatar alt="Nofated" src="https://cdn.nofated.win/avatarsoss" sx={{ width: 128, height: 128 }} /> */}
          </Grid>
          <Grid xs={8}>
            <Typography variant="h4" component="h1" gutterBottom sx={{ fontFamily: 'neonderthaw' }}>
              Nofated
            </Typography>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Home" {...a11yProps(0)} />
                <Tab label="About" {...a11yProps(1)} />
                <Tab label="Blog" href="https://blog.nofated.win" />
              </Tabs>
            </Box>
          </Grid>
          <Box sx={{ width: '100%' }}>
            <TabPanel value={value} index={0}>
              <Box sx={{ my: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  Yoo!
                </Typography>
                I'm Nofated. I am a newbie in the coding world.<br />
                Find me on GitHub, Twitter and Telegram.
              </Box>
              <Box sx={{ my: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  Misc
                </Typography>
                🏫 I am a student who lives in Beijing, China.<br />
                📒️ I have a blog based on the Hexo.<br />
                ⌨️ Coding and open-source are great! Though I haven't learnt any languages...<br />
                🏢 I am a member of LittleSkin Community Support . I help maintain the bot and manual.<br />
                🚔 I am a fan of Minecraft, Grand Theft Auto, and anime.<br />
              </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Box sx={{ my: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  About
                </Typography>
                I am in senior high and I'm preparing for the Chinese College Entrance Examination, aka GaoKao.<br />

                I do open-source works, you can check them on GitHub. But I didn't have a completely independent open-source project.😢<br />

                I am happy to chat. Chinese is OK but I am very poor at English listening and speaking.😰<br />
              </Box>
            </TabPanel>
          </Box>
          {/*           <TabsPannel /> */}
        </Grid>

        <Copyright />
      </Box>
    </Container>
  );
}
