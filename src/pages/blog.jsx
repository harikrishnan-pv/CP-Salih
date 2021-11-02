import React, { Component } from 'react'
import { client } from '../client'
import Posts from '../components/posts'




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

                <div className="flex items-center pt-10 justify-center">
                    <p className="text-7xl py-40 font-bold">
                        Services
                    </p>
                </div>

                <div className="">
                    
                    <main>
                        <div className="wrapper">
                            <Posts posts={this.state.articles} />
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}
