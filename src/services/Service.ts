import axios from "axios";

export const api = axios.create({
    baseURL: 'https://bloggeneration.herokuapp.com'
})

export const cadastroUsuario = async(url: string, dados: any, setDados: any) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const login = async(url: string, dados: any, setDados: any) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data.token)
}

export const busca = async(url: string, header: any, setDados: any) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}