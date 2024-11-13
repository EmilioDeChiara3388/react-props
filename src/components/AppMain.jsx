import posts from "../assets/database/posts.js"
import BlogCards from "./BlogCards/BlogCards"
export default function AppMain() {
    return (
        <main>
            <section className="container">
                {posts.map((post, index) => <BlogCards key={index} post={post} />)}
            </section>
        </main>
    )
}