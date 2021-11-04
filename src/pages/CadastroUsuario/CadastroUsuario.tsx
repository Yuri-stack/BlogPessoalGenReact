import { Grid, Box, Typography, TextField, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

import './CadastroUsuario.css'

function CadastroUsuario() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className="imagem2"></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box padding={10}>
                    <form>

                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>
                            Cadastrar
                        </Typography>

                        <TextField id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <TextField id='confirmarSenha' label='Confirmar Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />

                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className="text-decorator-none">
                                <Button variant='contained' color='secondary' className="btnCancelar">
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type="submit" variant='contained' color='primary'>
                                Cadastrar
                            </Button>
                        </Box>

                    </form>
                </Box>
            </Grid>
        </Grid>
    )
}

export default CadastroUsuario