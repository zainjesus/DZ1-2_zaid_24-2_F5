import { useState } from 'react';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleBodyChange = (e) => {
        setBody(e.target.value);
    };

    return (
        <div>
            <form>
                <input type="text" placeholder="Введите название поста" value={title} onChange={handleTitleChange} />
                <input type="text" placeholder="О чем вы хотите рассказать" value={body} onChange={handleBodyChange} />
                <button type="submit">Создать пост</button>
            </form>
        </div>
    );
};

export default CreatePost;