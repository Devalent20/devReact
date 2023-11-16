import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

    return (
        <section className='App'>
            <TwitterFollowCard userName={'midudev'} initialIsFollowing = {true}>
                Miguel Ángel Durán
            </TwitterFollowCard>
            <TwitterFollowCard userName={'twitter'}>
                Twitter
            </TwitterFollowCard>
            <TwitterFollowCard userName={'juan'}>
                Juan
            </TwitterFollowCard>
        </section>
    )
}