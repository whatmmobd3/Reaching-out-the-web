import React from 'react';
import './FullPost.css'

import axios from '../../common/axios'
class App extends React.Component {
    state={
        loaded: null
    }
    componentDidUpdate(){
        if (this.props.id) {
            if (!this.state.loaded || (this.state.loaded && this.state.loaded.id !== this.props.id)) {
                axios.get('/posts/' + this.props.id)
                .then(res => this.setState({loaded: res.data}))
                console.log(this.state.loaded && this.state.loaded.id !== this.props.id);
            }

        }

    }
    render() {
        const {loaded} = this.state
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if ( this.props.id ) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if(loaded){
            post = (
                <div className="FullPost">
                    <h1>{loaded.title}</h1>
                    <p>{loaded.body}</p>
                    <div >
                        <button onClick={this.deletePost}>Delete</button>
                    </div>
                </div>
            )
        }
        return post
    }
}

export default App