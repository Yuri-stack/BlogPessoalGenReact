import { useState, useEffect } from "react";
import { Box, Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';

import Postagem from "../../../models/Postagem";

import { TokenState } from "../../../store/tokens/tokensReducer";
import { busca } from "../../../services/Service";
import './ListaPostagem.css';

function ListaPostagem() {
    const [posts, setPosts] = useState<Postagem[]>([])
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

    async function getPost() {
        await busca("/postagens", setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getPost()
    }, [posts.length])

    return (
        <>
            {posts.map(post => (
                <Box m={2} key={ post.id }>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Postagens
                            </Typography>
                            <Typography variant="h5" component="h2">
                                { post.titulo }
                            </Typography>
                            <Typography variant="body2" component="p">
                                { post.texto }
                                Texto da Postagem
                            </Typography>
                            <Typography variant="body2" component="p">
                                { post.tema?.descricao }
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <Box display="flex" justifyContent="center" mb={1.5}>

                                <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                                    <Box mx={1}>
                                        <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                            atualizar
                                        </Button>
                                    </Box>
                                </Link>
                                
                                <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
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
    )
}

export default ListaPostagem;