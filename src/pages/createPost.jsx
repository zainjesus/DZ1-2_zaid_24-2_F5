import { useState } from 'react';
import { useNavigate } from "react-router-dom"

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const post = {
            title: title,
            body: body,
            userId: 7
        };
    
       fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post),
        });

        navigate("/posts")
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" value={title} placeholder='Заголовок' onChange={(e) => setTitle(e.target.value) } />
            </div>
            <div>
                <textarea value={body} placeholder='О чем вы хотитите зассказать?' onChange={(e) => setBody(e.target.value)} />
            </div>
            <button type="submit">Create Post</button>
        </form>
    );

};


export default CreatePost;