import { useDispatch } from 'react-redux';

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
        <button>NEXT</button>
      </div>
    </>
  );
}

export default CommentsForm;
