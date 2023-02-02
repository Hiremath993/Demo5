import classes from './Post.module.css';

function Post({ author, body}){
    return (
    <>
        <ul className={classes.post}>
            <p className={classes.author}>{author}</p>
            <p className={classes.text}>{body}</p>
        </ul>
    </>
    );
}
export default Post;