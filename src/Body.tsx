import { CloudCircle } from "@mui/icons-material"
import { TabContext, TabPanel } from "@mui/lab"
import { Box, Tabs, Tab, Typography, Chip, styled } from "@mui/material"
import AboutSection from "./components/AboutSection"
import { aboutProjects, experiences, skils, cloud } from "./data"
import { useState } from "react"

const StyledTabPanel = styled(TabPanel)({
    padding: 0,
    margin: 0
});

const StyledTabBox = styled(Box)({
    marginTop: "20px",
    marginLeft: "24px",

});

const colors: Array<'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'> = [
    'default',
    'primary',
    'secondary',
    'info',
    'success',
    'warning'
];


function Body() {
    const [value, setValue] = useState('1');

    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
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
                        {skils.map(skill => (<Chip variant="outlined" size="medium"
                            color={colors[Math.floor(Math.random() * colors.length)]}
                            label={skill}
                            sx={{ m: 1 }}
                        />))}
                    </StyledTabBox>
                    <Typography variant="caption">Cloud</Typography>
                    <StyledTabBox>
                        {cloud.map(skill => (<Chip color="secondary" variant="outlined" label={skill} icon={<CloudCircle />} sx={{ m: 1 }} />))}
                    </StyledTabBox>
                </StyledTabPanel>
            </TabContext>
        </Box>
    )
}

export default Body