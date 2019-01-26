import React from 'react'
import fetch from 'unfetch'

const SERVER_URL = '//localhost:8888/'

export class App extends React.Component {
    state = { serverData: null }

    componentDidMount() {
        this.getServerData()
    }

    getServerData = async () => {
        const serverData = await fetch(SERVER_URL).then((resp) => resp.json())

        this.setState({ serverData })
    }

    renderClientData = () => {
        const clientData = {
            message: 'Hello React app :)',
            now: new Date().toISOString(),
            random: Math.random(),
        }

        return JSON.stringify(clientData, null, 4)
    }

    renderServerSection = () => {
        if (!this.state.serverData) {
            return null
        }

        return (
            <>
                Server data:
                <pre>{JSON.stringify(this.state.serverData, null, 4)}</pre>
            </>
        )
    }

    render() {
        return (
            <div>
                Client data:
                <pre>{this.renderClientData()}</pre>
                {this.renderServerSection()}
            </div>
        )
    }
}
