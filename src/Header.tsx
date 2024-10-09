import { Box, Avatar, Typography, Paper, Link, Badge, styled } from '@mui/material'

function Header() {
    return (
        <Box>
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
        </Box>
    )
}

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

export default Header