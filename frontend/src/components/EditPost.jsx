import { useState, useEffect } from "react";
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom';


const EditPost = () => {
    const initial_values = { title: "", content: "", slug: "" };
    const [formData, updateFormData] = useState(initial_values);

    const navigate = useNavigate();
    const { postID } = useParams();

    // change on input 
    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        // const { name, value } = e.target;
        // setFormValues({ ...formValues, [name]: value });
        // console.log(formValues);
        updateFormData({
            ...formData,
            // Trimming any whitespace
            // [e.target.name]: e.target.value.trim(),
            [e.target.name]: e.target.value,
        });
    };

    const cancel = () => {
        navigate('/')
    }

    // update data 
    const updatePost = (e) => {
        e.preventDefault();
        console.log(formData);

        axios
            .put(`http://127.0.0.1:8000/post/${postID}/`, {
                title: formData.title,
                slug: formData.slug,
                content: formData.content,
            })
            .then(res => {
                console.log('success', res)
                navigate('/')  // redirect to home page
            })
            .catch(err => console.log(err));
        // navigate('/')
        // window.location.reload();
    };


    useEffect(() => {
        // refreshPage()
        axios
            .get(`http://127.0.0.1:8000/post/${postID}/`)
            .then(res => {
                console.log('success', res)
                console.log('Title=> ', res.data.title)
                updateFormData({
                    ...formData,
                    ['title']: res.data.title,
                    ['content']: res.data.content,
                    ['slug']: res.data.slug,
                });
            })
            .catch(err => console.log(err));
    }, [updateFormData]);

    return (
        <section>
            <div className="container d-flex justify-content-center form-bg py-5 mt-5">
                <div className="card mt-4 col-md-8 shadow card-style">
                    <div className="card-title mt-3 ">
                        <h2 className="text-success text-center">Edit Post </h2>
                    </div>
                    <div className="card-body col-md-10 m-auto">
                        <div className="mb-4">
                            <h5 className="text-start">title: </h5>
                            <input
                                className="form-control text-center"
                                type="text"
                                placeholder="title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-4">
                            <h5 className="text-start">Content: </h5>
                            <textarea
                                className="form-control text-center"
                                type="text"
                                placeholder="Content"
                                name="content"
                                rows={3}
                                value={formData.content}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <div className="mb-4">
                            <h5 className="text-start">Slug: </h5>
                            <input
                                className="form-control text-center"
                                type="text"
                                placeholder="Slug"
                                name="slug"
                                value={formData.slug}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="text-center my-4">
                            <button type='button' onClick={updatePost} className="btn btn-success">Submit</button>
                            <button type='button' onClick={cancel} className="btn btn-secondary ms-2">Cancel</button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default EditPost;