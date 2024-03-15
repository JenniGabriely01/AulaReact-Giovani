import { Link } from "react-router-dom";
import { Banner } from "./Banner/banner";
import { CadastroNews } from "./CadastroNews/cadastro";
import { Contador } from "./Contador/contador";
import { Lista } from "./Lista/lista";

export function Home() {
    return (
        <main className="container">

            <h1>conteudo do projeto react</h1>


            <div>
                <Link to="/contato">Vai para Contatos</Link>
            </div>

            <Contador />

            <Lista />

            <Banner />

            <CadastroNews />

        </main>
    )
}