import { useState } from "react"

export function TwitterFollowCard({ children, userName = 'Unknown', initialIsFollowing }) {

    // Generar la fuente de la imagen con el nombre de usuario.
    const imgSource = `https://unavatar.io/${userName}`

    // Estado local para manejar si se está siguiendo o no.
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    // Texto y clase dinámico del botón dependiendo de si se está siguiendo o no.
    const followingText = isFollowing ? 'Siguiendo' : 'Seguir'

    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    // Manejador de clic para cambiar el estado de seguimiento.
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    alt="El avatar de Midudev"
                    src={imgSource} />
                <div className='tw-followCard-info'>
                    <strong> {children} </strong>
                    <span className='tw-followCard-infoUserName'>
                        @{userName}
                    </span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{followingText}</span>
                    <span className='tw-followCard-stopFollow'> Dejar de seguir </span>
                </button>
            </aside>
        </article>
    )
}