import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

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
    }]

    return (
        <section className='App'>
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