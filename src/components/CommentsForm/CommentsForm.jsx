import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function CommentsForm() {
  //setting up dispatch
  const dispatch = useDispatch();

  return (
    <>
      <h2>Any comments you want to leave?</h2>
      <div>
        Comments
        <input></input>
      </div>
      <div>
        <button>
          <Link to="/reviewPage">NEXT</Link>
        </button>
      </div>
    </>
  );
}

export default CommentsForm;
