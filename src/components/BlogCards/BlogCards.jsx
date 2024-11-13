import style from "./BlogCards.module.css"
import BlogImg from "../../assets/images/blog1.jpg"
import Button from "../Button/Button"

const postTitle = "Titolo del Post"
const postContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga praesentium unde quasi placeat provident consectetur neque odio officia esse aut iusto nostrum maxime natus corrupti hic, temporibus repellendus molestiae voluptate?"
export default function BlogCard() {
    return (
        <div className={style.card}>
            <div>
                <img src={BlogImg} alt="" className={style.postPic} />
            </div>
            <div className={style.details}>
                <h3>{postTitle}</h3>
            </div>
            <div className={style.details}>
                <p>{postContent}</p>
            </div>
            <div className={style.details}>
                <Button />
            </div>
        </div>
    )
}