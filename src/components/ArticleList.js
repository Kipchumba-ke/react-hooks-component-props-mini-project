import Article from "./Article"
import blogData from "../data/blog"

function ArticleList(){
    return (
        <main>
            {blogData.posts.map((p)=>(
                <Article key={p.id} title={p.title} date={p.date} preview={p.preview}/>
            ))}
        </main>
    )
}
export default ArticleList