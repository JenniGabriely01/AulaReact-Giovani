import { useState } from "react";
import './cadastro.css'

export function CadastroNews() {
    //Estado inicial do formulário
    const initilForm = {
        nome: "",
        email: "",
        endereco: ""
    }

    //Estado do formulário
    const [formState, setFormState] = useState(initilForm);

    //Função para lidar com a alteração de campos de entrada
    const handleInput = (event) => {
        //Obtendo o elemento da entrada atual
        const target = event.currentTarget; //currentTarget navega entre os eventos do js

        //Extraindo o valor e o nome do campo de entrada
        const { value, name } = target;

        //Atualizando o estado do formulário com os novos valores
        setFormState({ ...formState, [name]: value })
    }

    const exemploTarget = (event) => {
        console.log("Elemento clicado", event.target);
        console.log("Elemento Atual", currentTarget);
    };


    /* funcao para lidar com a submit */
    const handleSubmit = (event) => {
        event.preventDefault();

        const formGeneral = {
            nome: formState.nome,
            email: formState.email,
            telefone: formState.telefone,
            endereco: formState.endereco,
            createdAt: new Date(), 
        }

        const requestOptions = {
            mathod: 'POST',
            headers: {
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify(formGeneral),
        }

        fetch(`http://localhost:3000/news`, requestOptions)
        .then((response) => response.json())
        .then

        /* limpar campo do form apos enviado*/
        setFormState({ ...initilForm })

        console.log(formState);
    }

    return (
        <section className="cadastro">
            <form onSubmit={handleSubmit}>
                <h1>Cadastro</h1>
                <div className="form-control">
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formState.nome}
                        onChange={handleInput}
                        placeholder="Digite seu nome"
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInput}
                        placeholder="Digite seu email"
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Endereço</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={formState.endereco}
                        onChange={handleInput}
                        placeholder="Digite seu endereço"
                    />
                </div>
                <div>
                    <button className="btnEviar" type="submit">Enviar</button>
                </div>
            </form>
        </section>

    )
}