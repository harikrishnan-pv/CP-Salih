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

                <div className="flex items-center pt-10 justify-center">
                    <p className="text-7xl py-40 font-bold">
                        Activities
                    </p>
                </div>

                <div className="">
                    
                    <main>
                        <div className="wrapper pb-10">
                            <Posts posts={this.state.articles} />
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}
