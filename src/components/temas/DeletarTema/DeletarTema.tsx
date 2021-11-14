import { useEffect, useState } from 'react'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';

import { buscaId, deleteId } from "../../../services/Service";
import Tema from '../../../models/Tema';

import { TokenState } from "../../../store/tokens/tokensReducer";
import './DeletarTema.css';

function DeletarTema() {
    const { id } = useParams<{ id: string }>()
    const [tema, setTema] = useState<Tema>()
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

    useEffect(() => {
        if (id !== '') {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/tema/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }

    function sim() {
        history.push('/temas')
        deleteId(`/tema/${id}`, {
            headers: {
                'Authorization': token
            }
        });

        toast.success('Tema deletado com sucesso', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        })
    }

    function nao() {
        history.push('/temas')
    }

    return (
        <>
            <Box m={2}>
                <Card variant="outlined">
                    <CardContent>
                        <Box justifyContent="center">
                            <Typography color="textSecondary" gutterBottom>
                                Deseja deletar o Tema:
                            </Typography>
                            <Typography color="textSecondary">
                                tema
                            </Typography>
                        </Box>
                    </CardContent>
                    <CardActions>
                        <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
                            <Box mx={2}>
                                <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                                    Sim
                                </Button>
                            </Box>
                            <Box mx={2}>
                                <Button onClick={nao} variant="contained" size='large' color="secondary">
                                    Não
                                </Button>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
        </>
    );
}
export default DeletarTema;