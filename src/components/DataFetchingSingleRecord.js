import React, {useState, useEffect} from "react";
import axios from "axios";

function DataFetchingSingleRecord() {
    const [post, setPost] = useState({});
    const [postId, setPostId] = useState(1);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/' + postId)
            .then(res => {
                setPost(res.data);
            }).catch(err => console.log(err))
    })

    function updatePostId(e) {
        setPostId(e.target.value);
    }

    return (
        <div>
            <p>Enter Any Number between 1 to 100 to fetch post</p>
            <input type="text" onChange={updatePostId}/>
            <p>{post.title}</p>
        </div>
    )
}

export default DataFetchingSingleRecord;