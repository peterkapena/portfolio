import { Avatar, Badge, Box, Chip, Link, Paper, styled, Tabs, Typography } from "@mui/material"
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import { useState } from "react";
import AboutSection, { Project } from "./components/AboutSection";
import { CloudCircle } from "@mui/icons-material";

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

const aboutProjects: Project[] = [
  {
    description: `A Multi-lingual Video Conferencing Platform with Real-time Translation. Hosted by leveraging Docker compose on a Ubuntu server.
`,
    title: "Globetalk",
    url: "https://globetalk.peterkapena.com",
    year: "2024 - current"
  },
  {
    description: `An IoT device with a combination of ESP32 bluetooth module and mobile to keep you hydrated.`,
    title: "Hydrater",
    url: "",
    year: "2024 - current"
  },
  {
    description: `A simple chat application with python Socket via UDP/TCP protocol.`,
    title: "Pychat",
    url: "https://github.com/peterkapena/pyChat",
    year: "2023"
  }
]

const experiences: Project[] = [
  {
    description: `A c#, VB, ASP.NET, Ms SQL Server jQuery, Typescript system that helps bursary managers, social investors, NGOs, and universities’ alumni departments manage, communicate with, finance alumni, donors, students and more.
Designed, implemented and tested online applications forms for bursary students, applications request for funding or donating.
Wrote code that handles the CRUD process on the server side. Maintained DevMan and its IIS hosting eco system by making modest adjustments as necessary..
`,
    title: "Full Stack Developer at Devman",
    year: "2020-2023",
    url: "https://devman3.com",
  },
  {
    description: `Designed Database Systems for a client project using .NET and SQL Sever. Implemented the CO/CD in Azure DevOps.`,
    title: "Moyo - Developer and DevOps Consultant ",
    year: "2023-2024",
    url: "https://moyo.co",
  }
]

const skils: string[] = [
  "React JS",
  "Typescript",
  "GraphQL",
  "Material Design",
  "Node JS",
  "Mongo DB",
  "REST API",
  "GRPC",
  "Docker",
  "Kubernetes",
  "Azure DevOps",
  "Jenkins",
  "VS Code",
  ".NET C#/VB",
  "SQL Server",
  "Flutter",
  "Python",
  "CC++ with Arduino",
  "Git",
  "Bootstrap",
  "jQuery",
  "SOAP Services",
]
const cloud: string[] = [
  "Azure",
  "Google Cloud",
  "Oracle Cloud",
  "AWS",
  "Ubuntu Linux",
  "Microsoft Server IIS",
]
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
        <Box sx={{ my: 2, }}>
          <Paper sx={{ px: 3, py: 1.5, borderRadius: 5 }}>
            <Typography variant="body1" fontSize="14px" >Available for work</Typography>
            <Typography variant="body1" fontSize="13px" color="textDisabled">1 mo ago</Typography>
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
              <Tab value="3" label="Skills" sx={{ fontSize: "13px", fontWeight: "100", textTransform: "none" }} />
            </Tabs>
            <StyledTabPanel value="1">
              <StyledTabBox>
                <Typography variant="body1" fontSize="13px" color="textDisabled">I am a passionate software developer who love crafting products that people love. I care about making the customers happy, testing, accessibity, teamwork and code quality.</Typography>
              </StyledTabBox>
              <StyledTabBox>
                <Typography variant="body1" fontSize="13px" color="textDisabled">
                  Outside work, you'll find me cherishing quality time with family and friends. In my free moments, I enjoy exploring DevOps and coding.
                  I've created many apps on both web, android, and iOS.
                  These are personal projects that let me scratch that creative itch by seamlessly blending IoT, development, and tech.
                </Typography>
              </StyledTabBox>
              <Box sx={{ my: 3 }}>
                <Typography variant="caption">Projects worked on</Typography>
              </Box>
              <AboutSection projects={aboutProjects}></AboutSection>
            </StyledTabPanel>
            <StyledTabPanel value="2">
              <StyledTabBox>
                <AboutSection projects={experiences}></AboutSection>
              </StyledTabBox>
            </StyledTabPanel>
            <StyledTabPanel value="3">
              <StyledTabBox>
                {skils.map(skill => (<Chip label={skill} sx={{ m: 1 }} />))}
              </StyledTabBox>
            </StyledTabPanel>
            <Typography variant="caption">Cloud</Typography>
            <StyledTabBox>
              {cloud.map(skill => (<Chip label={skill} icon={<CloudCircle />} sx={{ m: 1 }} />))}
            </StyledTabBox>
          </TabContext>
        </Box>
      </Box>
    </Box>
  )
}

export default App
