import "./style.css"

function Nav() {

    return (
        <nav>
            <img src="./assets/favicon.ico" alt="logo tenis"></img>
            <ul>
                <li>homem</li>
                <li>mulher</li>
                <li>criança</li>
                <li>customisar</li>
            </ul>
            <div className="search">
               <img src="./assets/icon-search.svg" alt="icone de lupa" />
               <input type="search" placeholder="pesquisar"/>
            </div>
            <ion-icon name="bag-handle-outline"></ion-icon>

        </nav>
    )

}

export default Nav