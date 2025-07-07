import { useEffect, useState } from "react";

export function usePostTitle() {
    const [post, setPost] = useState({});

    async function getPosts() {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const json = await response.json();
        setPost(json);
    }

    useEffect(() => {
        getPosts();
    }, [])

    return post.title;
}

export function useFetch(url, retryTime) {
    const [finalData, setFinalData] = useState({});
    const [loading, setLoading] = useState(true);

    async function getDetails() {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setFinalData(json);
        setLoading(false);
    }

    useEffect(() => {
        getDetails();
    }, [url])

    useEffect(() => {
        const intervalId = setInterval(getDetails, retryTime * 1000);
        return () => clearInterval(intervalId);
    }, [retryTime])

    return { finalData, loading }
}

//----------------------------------------------------------------------------------------------------------------------------------------------

// App.jsx

// import React, { useEffect, useState } from "react";
// import { useFetch } from './customHooks/useFetch'

// function App() {
//     const [currentPost, setCurrentPost] = useState(1);
//     const { finalData, loading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${currentPost}`, 10);

//     if (loading) 
//         return <div>
//             Loading..
//         </div>
    
//     return (
//         <div>
//             <button onClick={() => setCurrentPost(1)}>1</button>
//             <button onClick={() => setCurrentPost(2)}>2</button>
//             <button onClick={() => setCurrentPost(3)}>3</button>
//             {JSON.stringify(finalData)}
//         </div>
//     )
// }

// export default App