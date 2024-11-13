import style from "./BlogCards.module.css"
import Button from "../Button/Button"

export default function BlogCards({ post }) {
    return (
        <div className={style.card}>
            <div>
                <img src={post.image} alt="" className={style.postPic} />
            </div>
            <div className={style.details}>
                <h3>{post.title}</h3>
            </div>
            <div className={style.details}>
                <p>{post.content}</p>
            </div>
            <div className={style.details}>
                <p>{post.tags}</p>
            </div>
            <div className={style.details}>
                <Button />
            </div>
        </div>
    )
}