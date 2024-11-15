import { Typography, Container, Box } from "@mui/material";
import Avatar from '@mui/material/Avatar';
function AboutMe() {
    return (
        <>
            <Container className="container" maxWidth="xxl" sx={{ height: "600px" }}>
                <Box sx={{
                    width: "50%",
                    width: "40%",
                    margin: "auto",

                    mt: { lg: 10, sm: 2 }

                }}>
                    <Avatar src="https://assets.codepen.io/108463/gypsy2.png" sx={{ margin: "auto", width: "25%", height: "130px" }}>N</Avatar>
                    <Typography sx={{ fontSize: "25px", fontWeight: "bold", mt: 2, color: "black" }}>Khushboo Kumari</Typography>
                    <Typography sx={{ fontSize: "40px", fontWeight: "bold", color: "black" }}> frontend developer </Typography>
                    <Typography sx={{ mt: 3, fontSize: "20px", color: "black", fontWeight: "bold" }}>Self-motivated and hardworking, seeking an opportunity in a
                        supportive environment to showcase my skills and apply my
                        knowledge for the growth of the organization.</Typography>
                </Box>
            </Container>
        </>
    )
}
export default AboutMe;