import React from 'react';

import Post from '../../components/Post/Post'
import FullPost from '../../components/FullPost/FullPost'
import NewPost from '../../components/NewPost/NewPost'

class App extends React.Component {
    render() {
        return (
            <div>
                <section className="Posts">
                    <Post />
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        )
    }
}

export default App