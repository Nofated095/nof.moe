import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="About" {...a11yProps(1)} />
          <Tab label="Link" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Typography variant="h5" component="h5" gutterBottom>
          <strong>Yoo!</strong>
        </Typography>
        <Typography variant="body1">
        I'm Nofated. I am a newbie in the coding world.
        </Typography>
        <Typography variant="h5" component="h5" gutterBottom>
          <strong>Misc</strong>
        </Typography>
        <Typography variant="body1">
        {'🏫 I am a student who lives in Beijing, China.'}
{'📒️ I have a blog based on the Hexo.'}
{'⌨️ Coding and open-source are great! Though I haven not learnt any languages...'}
{'🏢 I am a member of LittleSkin Community Support . I help maintain the bot and manual.'}
{'🚔 I am a fan of Minecraft, Grand Theft Auto, and anime.'}
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="h5" component="h5" gutterBottom>
          <strong>About</strong>
        </Typography>
        <Typography variant="body1">
        {'I am in senior high and I am preparing for the Chinese College Entrance Examination, aka GaoKao.'}
{'I do open-source works, you can check them on GitHub. But I did not have a completely independent open-source project.😢'}
{'I am happy to chat. Chinese is OK but I am very poor at English listening and speaking.😰'}
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Link here! qwq
      </TabPanel>
    </Box>
  );
}
