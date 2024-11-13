import viteLogo from '/vite.svg'

export default function AppFooter() {
    return (
        <footer>
            <img src={viteLogo}></img>
            <p>&copy; {new Date().getFullYear()}Tutti i diritti riservati</p>
        </footer>
    )
}