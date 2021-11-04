import axios from "axios";

export const api = axios.create({
    baseURL: 'https://blogpessoalgen.herokuapp.com'
})

export const login = async(url, dados, setDados) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}