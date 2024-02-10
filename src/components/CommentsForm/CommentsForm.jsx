import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function CommentsForm() {
  //setting up dispatch
  const dispatch = useDispatch();

  return (
    <>
      <h2>Any comments you want to leave?</h2>
      <form>
        <div>
          Comments
          <input data-testid="input" type="text"/>
        </div>
        <div>
          <button data-testid="next">
            <Link to="/reviewPage">NEXT</Link>
          </button>
        </div>
      </form>
    </>
  );
}

export default CommentsForm;
