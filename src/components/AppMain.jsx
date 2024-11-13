import posts from "../assets/database/posts.js"
import BlogCards from "./BlogCards/BlogCards"
export default function AppMain() {
    return (
        <main>
            <section className="container">
                {posts.map((post, index) => <BlogCards key={index} post={post} />)}
            </section>
            <section className="differentTags">
                <h4>Tag Presenti nei Posts</h4>
                {posts.map(post => post.tags.toString())}
            </section>
        </main>
    )
}