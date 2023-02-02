import { useState } from 'react';

import Post from './Post';
import NewPost from './NewPost';
import classes from './PostsList.module.css';
import Modal from './Modal';

function PostsList({isPosting, onStopPosting}){
    const [ enteredBody, setEnteredBody ] = useState('');
    const [ enteredAuthor, setEnteredAuthor ] = useState('');

    function bodyChangeHandler(event){
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event){
      setEnteredAuthor(event.target.value);
    }

//     let modalContent;

//     if(modalIsVisible){
//         modalContent = (
//         <Modal onClose = {hideModalHandler}>
//             <NewPost
//                 onBodyChange={bodyChangeHandler}
//                 onAuthorChange={authorChangeHandler}
//             />
//         </Modal> 
//        );
//    }

    return (
        <>
          {isPosting && (
           <Modal onClose = {onStopPosting}>
              <NewPost
                onBodyChange={bodyChangeHandler}
                onAuthorChange={authorChangeHandler}
                onCancel={onStopPosting}
              />
           </Modal> 
        )}
        <ul className={classes.Post}> 
            <Post author={enteredAuthor} body={enteredBody}/> 
            <Post author="Manuel" body="Check out full course"/>
        </ul>
        </> 
    );
}

export default PostsList;