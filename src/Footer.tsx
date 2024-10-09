import { GitHub, LinkedIn, Twitter } from "@mui/icons-material";
import { Avatar, Box, Divider, Link } from "@mui/material";

const socials = [
    {
        url: "https://github.com/peterkapena",
        icon: <GitHub />
    },
    {
        url: "https://x.com/Pkapenapeter",
        icon: <Twitter />
    },
    {
        url: "https://linkedin.com/in/peterkapena",
        icon: <LinkedIn />
    }
]

function Footer() {
    return (
        <Box>
            <Box sx={{ my: 2 }}>
                <Divider />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", }}>
                {socials.map(s => (<Link component={"a"} sx={{ mx: 1 }} href={s.url} target="_blank"><Avatar variant="rounded">{s.icon}</Avatar></Link>))}
            </Box>
        </Box>
    )
}

export default Footer