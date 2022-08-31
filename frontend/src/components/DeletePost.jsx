import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom';

const DeletePost = () => {
    const navigate = useNavigate();
    const { postID } = useParams();

    // Delete data 
    const deletePost = (e) => {
        e.preventDefault();

        axios
            .delete(`http://127.0.0.1:8000/post/${postID}/`)
            .then(res => {
                console.log('success', res)
                navigate('/')  // redirect to home page
            })
            .catch(err => console.log(err));
        // navigate('/')
        // window.location.reload();
    };

    // cancel 
    const cancel = () => {
        navigate('/')
    }

    return (
        <div className="text-center mt-5">
            <h3 className="text-info">Do you want to Delete?</h3>
            <div className="text-center my-4">
                <button type='button' onClick={deletePost}  className="btn btn-danger">Submit</button>
                <button type='button' onClick={cancel}  className="btn btn-secondary ms-2">Cancel</button>
            </div>
        </div>
    )
}
export default DeletePost;