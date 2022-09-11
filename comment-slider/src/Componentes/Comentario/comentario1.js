import './styles.css';

export default function Comentario(){
    return(
    <div className="cartaComentario">
        <div className="titulo">
        <div className="cajaAvatar"><img className="avatar" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?cs=srgb&dl=pexels-pixabay-415829.jpg&fm=jpg"/>
        <img className="bandera" src="https://images.pexels.com/photos/1202723/pexels-photo-1202723.jpeg?cs=srgb&dl=pexels-sharefaith-1202723.jpg&fm=jpg"/></div>
        <p className="nombreUsuario">Andrea Pereiro</p>
        </div>
        <p className="comentarioUsuario">La iniciativa de esta página web es emocionante, la descubrí gracias a un amigo y voy a invertir en ella.</p>
    </div>
    )
}