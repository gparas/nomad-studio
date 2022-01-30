import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const ProjectDetails = () => {
  const style = {
    minWidth: 72,
    display: 'inline-flex',
  };
  return (
    <Box as="section" sx={{ py: 20 }}>
      <Container>
        <Grid container spacing={8}>
          <Grid item>
            <Typography>
              <b style={style}>Date:</b> 2020
            </Typography>
            <Typography>
              <b style={style}>Size:</b> 965 M<sup>2</sup>
            </Typography>
            <Typography>
              <b style={style}>Sector:</b> Hospitality
            </Typography>
          </Grid>
          <Grid item lg={7} sm>
            <Typography
              fontWeight="fontWeightBold"
              mb={2}
              sx={{ fontSize: (theme) => theme.typography.pxToRem(18) }}
            >
              A highly anticipated legacy development, which formally introduces
              a selection of Las Vegas top hospitality brands to Dubai
            </Typography>
            <Typography
              sx={{ fontSize: (theme) => theme.typography.pxToRem(18) }}
            >
              Located on a 26-acre man-made island off the coast of Dubai, The
              Island will introduce the first MGM, Aria and Bellagio-branded
              hotels in the Middle East, as well as a number of other key
              amenities and attractions.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectDetails;
