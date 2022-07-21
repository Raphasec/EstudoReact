import Item from "./Item"

function List()
{
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <li><Item marca="Ferrari" ano_lancamento={1985}/></li>
                <li><Item marca="Fiat" ano_lancamento={1964}/></li>
                <li><Item marca="Renault"/></li>
                <li><Item marca="Chevrolet" ano_lancamento={1999}/></li>
            </ul>
        </>
    )
}

export default List