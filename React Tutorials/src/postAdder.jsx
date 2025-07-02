import { useState } from "react";

function App() {

  const [posts, setPosts] = useState([]);

  const PostComponents = posts.map(post => (
    <PostComponent
      avatar={post.avatar}
      name={post.name}
      followers={post.followers}
      time={post.time}
      content={post.content}
    />
  ));

  function addPost() {
    setPosts([...posts, {
      avatar: "https://projects.100xdevs.com/_next/image?url=https%3A%2F%2Fappx-wsb-gcp.akamai.net.in%2Fsubject%2F2023-01-17-0.17044360120951185.jpg&w=384&q=75",
      name: "100xdevs",
      followers: "13,888 followers",
      time: "12m",
      content: "Want to know how to win big? Check out how these folks won $6000 in bounties."
    }]);
  }

  return (
    <div>
      <button onClick={addPost}>Add Post</button>
      <div style={{ background: "#dfe6e9", minHeight: "100vh" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            {PostComponents}
          </div>
        </div>
      </div>
    </div>
  );
}

const style = {
  width: 200,
  backgroundColor: "white",
  borderRadius: 10,
  border: "1px solid gray",
  padding: 20
};

function PostComponent({ avatar, name, followers, time, content }) {
  return (
    <div style={style}>
      <div style={{ display: "flex" }}>
        <img
          src={avatar}
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%"
          }}
          alt="avatar"
        />
        <div style={{ fontSize: 10, marginLeft: 10 }}>
          <b>{name}</b>
          <div>{followers}</div>
          <div>{time}</div>
        </div>
      </div>
      <div style={{ fontSize: 12, marginTop: 10 }}>
        {content}
      </div>
    </div>
  );
}

export default App;