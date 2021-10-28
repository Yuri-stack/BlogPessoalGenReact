import React from "react";
import { Box } from "@material-ui/system";
import { Grid, Typography } from "@material-ui/core";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './Footer.css';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">

                <Grid alignItems="center" item xs={12}>

                    <Box className="box1">
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className="textos">Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://www.facebook.com/generationbrasil" target="_blank" rel="noreferrer">
                                <FacebookIcon className="redes" />
                            </a>
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank" rel="noreferrer">
                                <InstagramIcon className="redes" />
                            </a>
                            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank" rel="noreferrer">
                                <LinkedInIcon className="redes" />
                            </a>
                        </Box>
                    </Box>

                    <Box className="box2">
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className="textos" >© 2020 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org" rel="noreferrer">
                                <Typography variant="subtitle2" gutterBottom className="textos" align="center">brasil.generation.org</Typography>
                            </a>
                        </Box>
                    </Box>

                </Grid>

            </Grid>
        </>
    )
}

export default Footer
