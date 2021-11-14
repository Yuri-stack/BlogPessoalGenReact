import { useState, useEffect } from "react";
import { Box, Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';

import Tema from "../../../models/Tema";
import { busca } from "../../../services/Service";

import { TokenState } from "../../../store/tokens/tokensReducer";
import './ListaTema.css';

function ListaTema() {
    const [temas, setTemas] = useState<Tema[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )

    let history = useHistory()

    useEffect(() => {
        if (token === '') {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            })
            history.push("/login")
        }
    }, [token])

    async function getTema() {
        await busca("/tema", setTemas, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getTema()
    }, [temas.length])

    return (
        <>
            {temas.map(tema => (
                <Box m={2} >
                    <Card variant="outlined">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Tema
                            </Typography>
                            <Typography variant="h5" component="h2">
                                { tema.descricao }
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <Box display="flex" justifyContent="center" mb={1.5} >

                                <Link to={`/formularioTema/${ tema.id }`} className="text-decorator-none">
                                    <Box mx={1}>
                                        <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                            atualizar
                                        </Button>
                                    </Box>
                                </Link>

                                <Link to={`/deletarTema/${ tema.id }`} className="text-decorator-none">
                                    <Box mx={1}>
                                        <Button variant="contained" size='small' color="secondary">
                                            deletar
                                        </Button>
                                    </Box>
                                </Link>
                            </Box>
                        </CardActions>

                    </Card>
                </Box>
            ))}
        </>
    );
}


export default ListaTema;