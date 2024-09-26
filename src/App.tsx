import { Avatar, Badge, Box, Link, Paper, styled, Tabs, Typography } from "@mui/material"
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import { useState } from "react";
import AboutSection from "./components/AboutSection";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const StyledTabPanel = styled(TabPanel)({
  padding: 0,
  margin: 0
});

const StyledTabBox = styled(Box)({
  marginTop: "20px",
  marginLeft: "24px",

});

function App() {

  const [value, setValue] = useState('1');

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        m: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Box sx={{ width: { xs: "100%", md: "35%" } }}>
        <Box sx={{
          display: "flex",
          flexDirection: "row",
          alignContent: "start"
        }}>
          <Box sx={{ mx: 1, alignSelf: "start" }}>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar sx={{ width: 100, height: 100 }} alt="Remy Sharp" src="/image.png" />
            </StyledBadge>
          </Box>

          <Box sx={{ mx: 1, }}>
            <Typography component="h1" variant="h6">Kapena Peter Lumumba</Typography>
            <Typography variant="body1" fontSize="13px" color="textDisabled">Senior Software Developer and Computer Engineer</Typography>
            <Box sx={{ width: "auto" }}>
              <Paper sx={{ borderRadius: 5, py: .25, px: 1, width: "fit-content" }} >
                <Typography variant="body1" fontSize="13px" color="textDisabled"><Link href="mailto:peterkapenapeter@gmail.com" underline={"none"}>peterkapenapeter@gmail.com</Link></Typography>
              </Paper>
            </Box>
          </Box>
        </Box>
        <Box sx={{ my: 1, }}>
          <Paper sx={{ px: 3, py: 1.5, borderRadius: 5 }}>
            <Typography variant="body1" fontSize="14px" >Available for work</Typography>
            <Typography variant="body1" fontSize="13px" color="textDisabled">2 mo ago</Typography>
          </Paper>
        </Box>
        <Box sx={{ width: "100%" }}>

          <TabContext value={value}>
            <Tabs
              sx={{ color: "InfoText" }}
              variant="scrollable"
              scrollButtons="auto"
              selectionFollowsFocus
              value={value}
              onChange={handleChange}
              aria-label="secondary tabs example"
            >
              <Tab value="1" label="About" sx={{ fontSize: "13px", fontWeight: "100", textTransform: "none" }} />
              <Tab value="2" label="Experience" sx={{ fontSize: "13px", fontWeight: "100", textTransform: "none" }} />
            </Tabs>
            <StyledTabPanel value="1">
              <StyledTabBox>
                <Typography variant="body1" fontSize="13px" color="textDisabled">I am a passionate software developer who love crafting products that people love. I care about making the customers happy, testing, accessibity, teamwork and code quality.</Typography>
              </StyledTabBox>
              <StyledTabBox>
                <Typography variant="body1" fontSize="13px" color="textDisabled">
                  Outside work, you'll find me cherishing quality time with family and friends. In my free moments, I enjoy exploring DevOps and coding.
                  I've created many apps on both web, android, and iOS.
                  These are personal projects that let me scratch that creative itch by seamlessly blending design, development, and tech.
                </Typography>
              </StyledTabBox>
              <AboutSection></AboutSection>
              <AboutSection></AboutSection>
            </StyledTabPanel>
            <StyledTabPanel value="2">
              <StyledTabBox>
                <AboutSection></AboutSection>
              </StyledTabBox>
            </StyledTabPanel>
          </TabContext>
        </Box>
      </Box>
    </Box>
  )
}

export default App
