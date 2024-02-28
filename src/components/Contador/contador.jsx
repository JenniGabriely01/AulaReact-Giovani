import { useState } from 'react';
import './contador.css';

export function Contador() {

    /* adicionando js */

    /* usando hooks */
    const [contador, setContador] = useState(0); /* useState = biblioteca do react */

    const clickIncrement = () => {
        setContador(contador + 1);
    };

    const clickDecrement = () => {
        setContador(contador - 1);
    };

    return (

        <>

            <div className="borda">
                <h1>Contador</h1>

                <section className="buttons">

                    <button onClick={clickIncrement}>Increment</button>
                    <button onClick={clickDecrement}>Decrement</button>

                </section>

                <section className="result">

                    <strong>{contador}</strong>

                </section>
            </div>


        </>

    )

}