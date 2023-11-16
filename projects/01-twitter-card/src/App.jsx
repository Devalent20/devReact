import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

    // Lista de usuarios
    const users = [{
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true,
    },
    {
        userName: 'twitter',
        name: 'Twitter',
        isFollowing: false,
    },
    {
        userName: 'juan',
        name: 'Juan Pérez',
        isFollowing: false,
    },
    {
        userName: 'eihik',
        name: 'Eihik Ushiromiya',
        isFollowing: true,
    }]

    return (
        <section className='App'>
            {/* Mapea sobre el array de usuarios y crea un componente TwitterFollowCard para cada uno. */}
            {
                users.map(user => {
                    const { userName, name, isFollowing } = user
                    return (
                        <TwitterFollowCard userName={userName} initialIsFollowing={isFollowing}>
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}