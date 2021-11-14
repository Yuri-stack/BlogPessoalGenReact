import { AppBar, Box, Toolbar, Typography } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';

import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from '../../../store/tokens/actions';
import './Navbar.css'

function Navbar() {
    let history = useHistory()
    const dispatch = useDispatch()
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )

    function goLogout() {
        dispatch(addToken(''))
        toast.info('Usuário Deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        })
        history.push('/login')
    }

    var navBarComponent

    if (token !== '') {
        navBarComponent =
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Box className="cursor">
                        <Typography variant="h5" color="inherit">
                            Blog Pessoal
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Link to="/home" className="text-decorator-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="/posts" className="text-decorator-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="/temas" className="text-decorator-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Temas
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="/formularioTema" className="text-decorator-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Cadastrar Temas
                                </Typography>
                            </Box>
                        </Link>

                        <Box mx={1} className="cursor" onClick={goLogout}>
                            <Typography variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>

                    </Box>

                </Toolbar>
            </AppBar>
    }

    return (
        <>
            { navBarComponent }
        </>
    )
}

export default Navbar
