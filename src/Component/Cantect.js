// import React, { useState } from 'react';
// import { TextField, Button, Typography, Box, Container } from '@mui/material';
// import Snackbar from '@mui/material/Snackbar';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';

// function FormSubmission() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: '',
//     });

//     const [responseMessage, setResponseMessage] = useState(null);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch('https://script.google.com/macros/s/AKfycbxE85kZNFH_Z7ds8l-yFXKJkZomKDzYU0Spo6xczIW41lCnhRd37dBF93Oyg6dq_hHq/exec', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/x-www-form-urlencoded',
//                 },
//                 body: new URLSearchParams(formData),
//             });

//             const data = await response.json();
//             setResponseMessage(data.message);
//         } catch (error) {
//             setResponseMessage('Error submitting form. Please try again.');
//             console.error('Error:', error);
//         }
//     };

//     const [open, setOpen] = React.useState(false);

//     const handleClick = () => {
//         setOpen(true);
//     };

//     const handleClose = (event, reason) => {
//         if (reason === 'clickaway') {
//             return;
//         }

//         setOpen(false);
//     };

//     const action = (
//         <React.Fragment>
//             <Button color="secondary" size="small" onClick={handleClose}>
//                 UNDO
//             </Button>
//             <IconButton
//                 size="small"
//                 aria-label="close"
//                 color="inherit"
//                 onClick={handleClose}
//             >
//                 <CloseIcon fontSize="small" />
//             </IconButton>
//         </React.Fragment>
//     );
//     return (
//         <Container maxWidth="xxl" sx={{
//             background: "#e5eaf9"
//         }}>
//             <Box
//                 sx={{
//                     maxWidth: 400,
//                     margin: '0 auto',
//                     padding: '20px',
//                     boxShadow: 3,
//                     borderRadius: 2,
//                     mt: 20,
//                     mb: 10,
//                     background: "white"
//                 }
//                 }
//             >
//                 <Typography variant="h4" gutterBottom align="center">
//                     Contact Us
//                 </Typography>
//                 <form onSubmit={handleSubmit}>
//                     <TextField
//                         label="Name"
//                         variant="outlined"
//                         fullWidth
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                         sx={{ marginBottom: 2 }}
//                     />
//                     <TextField
//                         label="Email"
//                         variant="outlined"
//                         fullWidth
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                         sx={{ marginBottom: 2 }}
//                     />
//                     <TextField
//                         label="Message"
//                         variant="outlined"
//                         fullWidth
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         required
//                         multiline
//                         rows={4}
//                         sx={{ marginBottom: 2 }}
//                     />
//                     <Button onClick={handleClick}>Open Snackbar</Button>

//                 </form>
//                 {responseMessage && (
                   
//                     <>
//                         <Snackbar
//                             open={open}
//                             autoHideDuration={6000}
//                             onClose={handleClose}
//                             message={responseMessage}
//                             action={action}
//                         />
//                     </>
//                 )}
//             </ Box>
//         </Container>
//     );
// }

// export default FormSubmission;

import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Container, badgeClasses } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function FormSubmission() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [responseMessage, setResponseMessage] = useState(null);
    const [open, setOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbxE85kZNFH_Z7ds8l-yFXKJkZomKDzYU0Spo6xczIW41lCnhRd37dBF93Oyg6dq_hHq/exec', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(formData),
            });

            const data = await response.json();
            setResponseMessage(data.message);
        } catch (error) {
            setResponseMessage('Error submitting form. Please try again.');
            console.error('Error:', error);
        }
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const action = (
        <React.Fragment sx={{background:"red"}}>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                sx={{background:"red"}}
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <Container maxWidth="md" sx={{ background: "#e5eaf9" }}>
            <Box
                sx={{
                    maxWidth: 400,
                    margin: '0 auto',
                    padding: '20px',
                    boxShadow: 3,
                    borderRadius: 2,
                    mt: 20,
                    mb: 10,
                    background: "white"
                }}
            >
                <Typography variant="h4" gutterBottom align="center">
                    Contact Me
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        sx={{ marginBottom: 2 }}
                    />
                    <TextField
                        label="Message"
                        variant="outlined"
                        fullWidth
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        multiline
                        rows={4}
                        sx={{ marginBottom: 2 }}
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Submit
                    </Button>
                </form>
                {responseMessage && (
                    <Snackbar
                        sx={{background:"green"}}
                        open={open}
                        autoHideDuration={6000}
                        onClose={handleClose}
                        message={responseMessage}
                        action={action}
                    />
                )}
            </Box>
        </Container>
    );
}

export default FormSubmission;
