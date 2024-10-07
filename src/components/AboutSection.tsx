import { OpenInNew } from "@mui/icons-material";
import Grid from "@mui/material/Grid2";
import { Box, Typography, Link } from "@mui/material";

// Define the type for a project
export interface Project {
    year: string;
    title: string;
    url: string;
    description: string;
}

function AboutSection({ projects }: { projects: Project[] }) {
    return (
        <section>
            {projects.map((project, index) => (
                <Box key={index} sx={{ mb: 3 }}>
                    <Grid container>
                        <Grid size={4}>
                            <Box>
                                <Typography variant="body1" fontSize="13px" color="textDisabled">
                                    {project.year}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={8}>
                            <Box sx={{ display: "flex", flexDirection: "row" }}>
                                <Link
                                    fontSize="14px"
                                    component="a"
                                    target="_blank"
                                    color="textPrimary"
                                    href={project.url}
                                    underline="none"
                                >
                                    {project.title}
                                     <OpenInNew fontSize="inherit" sx={{ml:1}} />
                                    </Link>
                            </Box>
                            <Typography variant="body1" fontSize="13px" color="textSecondary">
                                {project.description}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            ))}
        </section>
    );
}

export default AboutSection;