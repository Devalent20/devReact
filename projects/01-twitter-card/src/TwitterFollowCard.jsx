import { useState } from "react"

export function TwitterFollowCard({ children, userName = 'Unknown'}) {

    const imgSource = `https://unavatar.io/${userName}`

    const  [isFollowing, setIsFollowing] = useState(false)
    const followingText = isFollowing ? 'Siguiendo' : 'Seguir'

    const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

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
                    {followingText}
                </button>
            </aside>
        </article>
    )
}