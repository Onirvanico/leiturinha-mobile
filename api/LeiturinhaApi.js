
const BASE_URL = "http://192.168.1.72:8081/";
const CONTOS_EP = "contos";
const MATERIAIS_EP = "materiais";

export default class LeiturinhaApi {

    constructor(tipo) {
        this.tipo = tipo;
    }

     list() {
         if(this.tipo === "1")
                return( 
                    fetch(`${BASE_URL}${CONTOS_EP}`)
                        .then(res => {
                            if(!res.ok && res.status !== 404) throw new Error(`Erro ao tentar realizar a requisição: ${res.status}`);
                            if(res.status === 404) throw new Error("Não foi possível encontrar a rota solicitada");
                            return res.json();
                        })
                        .catch(error => {
                            throw new Error(`Ocorreu um erro durante a recuperação dos contos ${error.message}`);
                        })
                );
        else
                return( 
                    fetch(`${BASE_URL}${MATERIAIS_EP}`)
                        .then(res => {
                            if(!res.ok && res.status !== 404) throw new Error(`Erro ao tentar realizar a requisição: ${res.status}`);
                            if(res.status === 404) throw new Error("Não foi possível encontrar a rota solicitada");
                            return res.json();
                        })
                        .catch(error => {
                            throw new Error(`Ocorreu um erro durante a recuperação dos contos ${error.message}`);
                        })
                );
    }
}