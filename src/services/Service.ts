import axios from "axios";

export const api = axios.create({
    baseURL: 'https://bloggeneration.herokuapp.com'
})

export const login = async(url: string, dados: any, setDados: any) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}