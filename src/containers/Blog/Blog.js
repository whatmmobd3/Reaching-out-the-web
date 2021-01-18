import React from "react";
import './Blog.css'

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";

import axios from "../../common/axios";

class App extends React.Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false,
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then((res) => {
        const posts = res.data.slice(9, 13);
        const updatePosts = posts.map((e) => {
          return {
            ...e,
            author: "David",
          };
        });
        this.setState({ posts: updatePosts });
      })
      .catch((err) => {
        this.setState({ error: true });
      });
  }


  render() {
    const { posts, selectedPostId } = this.state;

    let element = <p style={{ textAlign: "center" }}>Something went wrong !</p>;
    if (!this.state.error) {
      element = posts.map(e => {
        return <Post 
        key={e.id}
        title={e.title}
        author={e.author}
        clicked={() => this.setState({selectedPostId: e.id})}
        />
      })

    }
    return (
      <div>
        <section className="Posts">
            {element}
        </section>
        <section>
          <FullPost id={selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default App;
