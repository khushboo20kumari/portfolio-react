
// import Grid from '@mui/material/Grid';
// import { Typography, Container, Card } from '@mui/material';

// const projects = [
//     {
//         id: 1,
//         name: "Digital Staff Management System",
//         description: "A system for managing digital staff information.",
//         technologies: ["React", "Firebase", "Material UI"],
//         status: "In Progress",
//         startDate: "2024-07-30",
//         endDate: null,
//         img: "https://s3strapi-project.s3.ap-south-1.amazonaws.com/intro_c9cc87a9b3.jpg",
//     },
//     {
//         id: 2,
//         name: "Movie Listing App",
//         description: "A dynamic app to display and interact with movie listings.",
//         technologies: ["React", "HTML", "CSS"],
//         status: "Completed",
//         startDate: "2024-07-15",
//         endDate: "2024-07-25",
//         img: "https://s3strapi-project.s3.ap-south-1.amazonaws.com/variables_66049a7b8e.jpg",

//     },
//     {
//         id: 3,
//         name: "Web Application with Sidebar",
//         description: "A React-based application with a persistent sidebar.",
//         technologies: ["React", "Material UI", "React Router DOM"],
//         status: "In Progress",
//         startDate: "2024-07-06",
//         endDate: null,
//         img: "https://s3strapi-project.s3.ap-south-1.amazonaws.com/datatypes_5c8c5cb922.jpg",

//     },
//     {
//         id: 4,
//         name: "Web Application with Sidebar",
//         description: "A React-based application with a persistent sidebar.",
//         technologies: ["React", "Material UI", "React Router DOM"],
//         status: "In Progress",
//         startDate: "2024-07-06",
//         endDate: null,
//         img: "https://s3strapi-project.s3.ap-south-1.amazonaws.com/operators_6fb101302f.jpg",

//     },
//     {
//         id: 5,
//         name: "Web Application with Sidebar",
//         description: "A React-based application with a persistent sidebar.",
//         technologies: ["React", "Material UI", "React Router DOM"],
//         status: "In Progress",
//         startDate: "2024-07-06",
//         endDate: null,
//         img: "https://s3strapi-project.s3.ap-south-1.amazonaws.com/if_else_5fc3176c7b.jpg",

//     },
//     {
//         id: 6,
//         name: "Web Application with Sidebar",
//         description: "A React-based application with a persistent sidebar.",
//         technologies: ["React", "Material UI", "React Router DOM"],
//         status: "In Progress",
//         startDate: "2024-07-06",
//         endDate: null,

//     },
// ];


// function Projects() {
//     return (
//         <>
//             <Container maxWidth="lg" sx={{ mt: 20 }}>
//                 <Grid container spacing={2} >
//                     {projects.map((item) => (
//                         <Grid item xs={2} lg={6} key={item.id}>
//                             <Card sx={{ p: 5 }}>
//                                 <img style={{ width: "200px" }} src={item.img}></img>
//                                 <Typography>{item.name}</Typography>
//                                 <Typography>{item.description}</Typography>
//                                 <Typography>{item.startDate}</Typography>
//                             </Card>
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Container>
//         </>
//     )
// }
// export default Projects;

import Grid from '@mui/material/Grid';
import { Typography, Container, Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
const projects = [
    {
        id: 1,
        name: "Digital Staff Management System",
        description: "An employee management system aligns employee efforts with company goals.",
        technologies: ["React", "Firebase", "Material UI"],
        status: "In Progress",
        startDate: "2024-07-30",
        endDate: null,
        github: "https://github.com/sukanyamohanty143/Digital-Staff-Management-System.",
        img: "https://s3strapi-project.s3.ap-south-1.amazonaws.com/intro_c9cc87a9b3.jpg",
    },
    {
        id: 2,
        name: "Movie Listing App",
        description: "A dynamic app to display and interact with movie listings.",
        technologies: ["React", "HTML", "CSS"],
        status: "Completed",
        startDate: "2024-07-15",
        endDate: "2024-07-25",
        github: "https://github.com/khushboo20kumari/movies-listing",
        img: "https://s3strapi-project.s3.ap-south-1.amazonaws.com/variables_66049a7b8e.jpg",
    },
    {
        id: 3,
        name: "bhanwari-devi (Meraki)",
        description: "I contributed to the Meraki website by working on the functionality and styling of the sidebar content in the courses",
        technologies: ["React", "Material UI", "React Router DOM"],
        status: "In Progress",
        startDate: "2024-07-06",
        endDate: null,
        github: "https://github.com/navgurukul/bhanwari-devi",
        img: "https://s3strapi-project.s3.ap-south-1.amazonaws.com/datatypes_5c8c5cb922.jpg",
    },
    {
        id: 4,
        name: "Sama",
        description: "Contributed to the Sama website by enhancing the styling and functionality of the About, Home, Our Approach, and Dashboard pages.",
        technologies: ["React", "Material UI", "React Router DOM"],
        status: "In Progress",
        startDate: "2024-07-06",
        endDate: null,
        github: "https://github.com/navgurukul/sama",
        img: "https://s3strapi-project.s3.ap-south-1.amazonaws.com/operators_6fb101302f.jpg",
    },
    {
        id: 5,
        name: "nightingale",
        description: "I contributed to the Nightingale website by enhancing the styling and functionality of the Schools and Home pages.",
        technologies: ["React", "Material UI", "React Router DOM"],
        status: "In Progress",
        startDate: "2024-07-06",
        endDate: null,
        github: "https://github.com/navgurukul/nightingale",
        img: "https://s3strapi-project.s3.ap-south-1.amazonaws.com/if_else_5fc3176c7b.jpg",
    },
    {
        id: 6,
        name: "calculator",
        description: "A React-based application with a persistent sidebar.",
        technologies: ["React", "Material UI", "React Router DOM"],
        status: "In Progress",
        startDate: "2024-07-06",
        endDate: null,
        github: "https://github.com/khushboo20kumari/CalculatonApp-React",
        img: "https://s3strapi-project.s3.ap-south-1.amazonaws.com/variables_66049a7b8e.jpg",
    },
];


function Projects() {

    return (
        // <Container maxWidth="lg" sx={{ mt: 5, mb: 7 }}>
        //     <Grid container spacing={3}>
        //         {projects.map((item) => (
        //             <Grid item xs={12} sm={6} md={4} lg={4} key={item.id} sx={{height:"auto"}}>
        //                 <Card sx={{
        //                     maxWidth: 345,
        //                     maxHeight:400

        //                 }}>
        //                     <CardActionArea>
        //                         <CardMedia
        //                             component="img"
        //                             height="140"
        //                             image={item.img}
        //                             alt="green iguana"
        //                         />
        //                         <CardContent>
        //                             <Typography gutterBottom variant="h5" component="div">
        //                                 {item.name}
        //                             </Typography>
        //                             <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        //                                 {item.description}
        //                             </Typography>
        //                             <a style={{marginTop:"60px"}} href={item.github}>Github Link!</a>
        //                         </CardContent>
        //                     </CardActionArea>
        //                 </Card>
        //             </Grid>
        //         ))}
        //     </Grid>
        // </Container>
        <Container maxWidth="lg" sx={{ mt: 5, mb: 7 }}>
            <Grid container spacing={3}>
                {projects.map((item) => (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={item.id} sx={{ height: '100%' }}>
                        <Card
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                height: 'auto', // Ensures each card has equal height
                                maxWidth: 345,
                            }}
                        >
                            <CardActionArea sx={{ flexGrow: 1 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={item.img}
                                    alt="project image"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {item.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <a style={{ margin: '10px', alignSelf: 'center' }} href={item.github}>
                                Github Link!
                            </a>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Projects;
