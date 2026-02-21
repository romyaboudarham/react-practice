
import {useState} from 'react';

function CreateNewPost({onPostSubmit}) {
    const [inputValue, setInputValue] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleInputChange = (e) => {
         setInputValue(e.target.value);
         setErrorMsg("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // prevent empty submissions
        inputValue.trim() ? onPostSubmit(inputValue) : setErrorMsg("posts should not be empty");
        setInputValue("");
    }

    return (
        <div className="create-post">
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleInputChange} placeholder="What's on your mind?" />
                <button type="submit">Post</button>
            </form>
            <p className="error-text">{errorMsg}</p>
        </div>
    )
}

export default CreateNewPost;