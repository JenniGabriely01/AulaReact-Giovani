import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './contato.css'

export function Contato() {
    {/* useState para gerenciar o estado dos usuarios */ }
    const [usuarios, setUsuarios] = useState([]);

    /*  hook useEffect  para lidar com efeitos colaterais*/
    useEffect(() => {
        fetch("http://localhost:3000/news")
            .then((response) => response.json())
            .then((data) => setUsuarios(data))
    }, []);

    console.log(usuarios)

    return (
        <div className="contato">
            <h1>Página do contato </h1>


            <div className="lista-api">
                {usuarios.map((user) => (
                    <div key={user.id}>
                        <strong>
                            nome: {user.nome}
                        </strong>
                        <strong>
                            email: {user.email}
                        </strong>
                        <strong>
                            telefone: {user.telefone}
                        </strong>
                    </div>
                ))}
            </div>
            <div className="voltar">
                <Link to="/">Voltar</Link>
            </div>
        </div>

    )
}