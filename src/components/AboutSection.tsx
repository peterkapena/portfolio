import { OpenInNew } from "@mui/icons-material"
import Grid from '@mui/material/Grid2';
import { Box, Typography, Link } from "@mui/material"

function AboutSection() {
    return (
        <section>
            <Box sx={{ my: 3 }}>
                <Typography variant="caption">Projects workded on</Typography>
            </Box>
            <Box>
                <Grid container>
                    <Grid size={4}>
                        <Box>
                            <Typography variant="body1" fontSize="13px" color="textDisabled">2020</Typography>
                        </Box>
                    </Grid>
                    <Grid size={8}>
                        <Box sx={{ display: "flex", flexDirection: "row" }}>
                            <Link fontSize="14px" component="a" target="_blank" color="textPrimary" href="https://devman3.com" underline="none" >Devman <OpenInNew fontSize="inherit" /></Link>
                        </Box>
                        <Typography variant="body1" fontSize="13px" color="textSecondary">
                            A c#, VB, ASP.NET, Ms SQL Server jQuery, Typescript system that helps bursary managers, social investors, NGOs, and universities’ alumni departments manage, communicate with, finance alumni, donors, students and more.
                            Designed, implemented and tested online applications forms for bursary students, applications request for funding or donating.
                            Wrote code that handles the CRUD process on the server side.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ mt: 3 }}>
                <Grid container>
                    <Grid size={4}>
                        <Box>
                            <Typography variant="body1" fontSize="13px" color="textDisabled">2020</Typography>
                        </Box>
                    </Grid>
                    <Grid size={8}>
                        <Box sx={{ display: "flex", flexDirection: "row" }}>
                            <Link fontSize="14px" component="a" target="_blank" color="textPrimary" href="https://devman3.com" underline="none" >Devman <OpenInNew fontSize="inherit" /></Link>
                        </Box>
                        <Typography variant="body1" fontSize="13px" color="textSecondary">
                            A c#, VB, ASP.NET, Ms SQL Server jQuery, Typescript system that helps bursary managers, social investors, NGOs, and universities’ alumni departments manage, communicate with, finance alumni, donors, students and more.
                            Designed, implemented and tested online applications forms for bursary students, applications request for funding or donating.
                            Wrote code that handles the CRUD process on the server side.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </section >
    )
}

export default AboutSection