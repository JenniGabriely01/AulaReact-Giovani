import './style.css'

export function Header(props) {

    return (
        <header>
            <div className="container-header">
                <h1>{props.title}</h1>
                <h2>{props.subTitulo}</h2>
            </div>
        </header>
    )

}

/* Header.PropTypes = {
    title: PropTypes.string,
    subTitulo: PropTypes.string
} */