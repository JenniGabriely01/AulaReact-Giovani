import './lista.css';

export const Lista = () => {

    /* array de objeto */
    const lista = [
        {
            nome: "projeto novo",
            responsavel: "Fernando Carlos",
            valor: 1200
        },
        {
            nome: "projeto novo",
            responsavel: "Fonseca",
            valor: 4000
        },
        {
            nome: "projeto do mar",
            responsavel: "Jennifer",
            valor: 3500
        },
        {
            nome: "Fernanda",
            responsavel: "Pedro",
            valor: 950
        }
    ]

    return (

        <main className="lista">

            <section>
                <img src="https://picsum.photos/400/250" alt="Image" />

                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam provident <br />
                    minus, dolorum veritatis enim, ipsam saepe rerum quod consequatur assumenda, <br />
                    autem quia at nostrum. Pariatur blanditiis laudantium quaerat hic fugit.
                </p>
            </section>

            <section className="Lists">
                <h4>Listas nomes</h4>

               
                    <article className='content-listagem'>
                    {lista.map((item, index) => {
                        return (

                            <div key={index} className='List'>
                                <strong>nome:</strong>
                                <span>{item.nome}</span>

                                <strong>Responsável:</strong>
                                <span>{item.responsavel}</span>

                                <strong>Valor:</strong>
                                <span>{item.valor}</span>
                            </div>
                        )
                    })}
                    </article>
                   


            </section>
        </main>

    )
}