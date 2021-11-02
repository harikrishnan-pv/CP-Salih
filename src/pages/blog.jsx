import React, { Component } from 'react'
import Posts from '../components/posts'
import { client } from '../client'




export default class Blog extends Component {

    state = {
        articles: []
    }

    componentDidMount() {
        client.getEntries()
            .then((response) => {
                console.log(response)
                this.setState({
                    articles: response.items
                })
            })
            .catch(console.error)
    }

    render() {
        return (
            <div>
                <div className="container">
                    <header>
                        <div className="wrapper">
                            <span>
                                Contentful Trial
                            </span>
                        </div>
                    </header>
                    <main>
                        <div className="wrapper">
                            <Posts posts={this.state.articles}/>
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}
