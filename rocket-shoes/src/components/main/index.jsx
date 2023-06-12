import "./style.css"

function Main() {
    return (
        <main>
            <img src="./assets/tenis-1-ampliado.png" alt="foto tenis" /> 
            <div id="selection">
                <img src="./assets/tenis-1-galeria.png" alt="imagem tenis 1" />
                <img src="./assets/tenis-2-galeria.png" id="center-img" class="selected" alt="imagem tenis 2" />
                <img src="./assets/tenis-3-galeria.png" alt="imagem tenis 3" />
            </div>
        </main>
    )
}

export default Main