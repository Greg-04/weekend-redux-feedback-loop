import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './CommentsForm.css';

function CommentsForm() {
  //Setting up local state of understanding
  const [inputComment, setInputComment] = useState('');
  //setting up dispatch
  const dispatch = useDispatch();

  //add passenger handle
  const handleAddComment = (event) => {
    dispatch({
      type: 'COMMENT_ADD',
      payload: inputComment,
    });

    //clear form field
    setInputComment('');
  };

  //handle name input change
  const handleChangeComment = (event) => {
    setInputComment(event.target.value);
  };

  return (
    <>
      <main className="comments">
        <h2>Any comments you want to leave?</h2>
        <form>
          <div>
            Comments
            <input
              data-testid="input"
              type="text"
              onChange={handleChangeComment}
              value={inputComment}
            />
          </div>
          <div>
            <button onClick={handleAddComment} data-testid="next">
              <Link to="/reviewPage">NEXT</Link>
            </button>
          </div>
        </form>
      </main>
    </>
  );
}

export default CommentsForm;
