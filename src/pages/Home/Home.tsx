import { useEffect } from 'react'
import { Box, Button, Grid, Typography } from "@material-ui/core";
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';  
import { TokenState } from '../../store/tokens/tokensReducer';

import ModalPostagem from "../../components/postagens/ModalPostagem/ModalPostagem";
import TabPostagem from "../../components/postagens/TabPostagem/TabPostagem";

import './Home.css'

function Home() {
    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado")
            history.push("/login")

        }
    }, [token])

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa">

                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="titulo">
                            Seja bem vinde!
                        </Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">
                            Expresse aqui os seus pensamentos e opiniões!
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Button className="botao" variant="outlined">Ver Postagens</Button>
                    </Box>
                </Grid>

                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
                </Grid>

                <Grid xs={12} className="postagens">
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    )
}

export default Home