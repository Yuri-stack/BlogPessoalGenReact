import { ChangeEvent, useEffect, useState } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'

import { cadastroUsuario } from '../../services/Service';

import User from '../../models/User';

import './CadastroUsuario.css'

function CadastroUsuario() {
    let history = useHistory();

    const [confirmarSenha,setConfirmarSenha] = useState<String>("")

    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: ''
        })

    useEffect(() => {
        if (userResult.id !== 0) {
            history.push("/login")
        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>){
        setConfirmarSenha(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if(confirmarSenha === user.senha){
        cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
        alert('Usuario cadastrado com sucesso')

        }else{
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className="imagem2"></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box padding={10}>

                    <form onSubmit={ onSubmit }>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>
                            Cadastrar
                        </Typography>

                        <TextField value={ user.nome } onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField value={ user.usuario } onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={ user.senha } onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <TextField value={ confirmarSenha } onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='Confirmar Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />

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