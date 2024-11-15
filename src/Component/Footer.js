
import React from 'react';
import { Box, Typography, Link, Divider } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

function Footer() {
  return (
    <Box sx={{ width: '100%', py: 3, bgcolor: 'background.paper', textAlign: 'center',background:"red" ,height:"270px",background:"black"}}>
      <Box 
        sx={{
          display: 'flex', 
          justifyContent: 'center', 
          gap: 2,
          mb: 2
        }}
      >
        <Link href="#" aria-label="Facebook">
          <Facebook />
        </Link>
        <Link href="#" aria-label="Twitter">
          <Twitter />
        </Link>
        <Link href="#" aria-label="Instagram">
          <Instagram />
        </Link>
      </Box>
      
      <Divider sx={{ mb: 2 }} />
      
      <Box sx={{ mb: 2 ,background:"black"}}>
        <Typography variant="h6" sx={{ display: 'none' }}>Footer Links</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
          <Link href="#">Site Home</Link>
          <Link href="#">Playground</Link>
          <Link href="#">About</Link>
          <Link href="#">Sitemap</Link>
          <Link href="#">Contents</Link>
        </Box>
      </Box>
      
      <Typography variant="body2" color="text.secondary">
        © 2024 SDavidPrince. Demo of a footer. Some Rights Reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
