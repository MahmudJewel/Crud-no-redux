import { useState } from "react";
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom';


const CreatePost = () => {
    const initial_values = { title: "", content: "", slug: "" };
    const [formValues, setFormValues] = useState(initial_values);
    const navigate = useNavigate();  // redirecting

    const handleChange = (e) => {
        // console.log(e.target);
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    };

    const refreshPage = () => {
        // if (submitted) {
        window.location.reload();
        // }
    }

    let saveProduct = (event) => {
        event.preventDefault();

        const data = {
            title: formValues["title"],
            content: formValues["content"],
            slug: formValues['slug'],
        };
        console.log('All info: ', data)
        axios
            .post("http://127.0.0.1:8000/post/", data)
            .then(res => {
                console.log('success', res)
                navigate('/')  // redirect to home page
            })
            .catch(err => console.log(err));
    }

    return (
        <section>
            <div className="container d-flex justify-content-center form-bg py-5 mt-5">
                <div className="card mt-4 col-md-8 shadow card-style">
                    <div className="card-title mt-3 ">
                        <h2 className="text-success text-center">Create Post </h2>
                    </div>
                    <div className="card-body col-md-10 m-auto">
                        <div className="mb-4">
                            <h5 className="text-start">title: </h5>
                            <input
                                className="form-control text-center"
                                type="text"
                                placeholder="title"
                                name="title"
                                value={formValues.title}
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
                                value={formValues.content}
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
                                value={formValues.slug}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="text-center my-4">
                            <button type='button' onClick={saveProduct} className="btn btn-success">Submit</button>
                            <button type='button' onClick={refreshPage} className="btn btn-secondary ms-2">Refresh</button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default CreatePost;