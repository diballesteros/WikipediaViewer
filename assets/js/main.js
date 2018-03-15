class App extends React.Component {
    state = {
        wiki: []
    }

    searchWikiHandler = () => {
        let call = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=revisions&list=search&rvprop=content&srsearch="
            + document.getElementById("search").value + "&srlimit=15&srprop=snippet";

        let html = '';

        axios.get(call).then(response => {
            console.log(response.data.query.search);
            this.setState({ wiki: response.data.query.search })
        });
    }

    openWikiHandler = (id) => {
        window.open("https://en.wikipedia.org/?curid=" + id);
    }

    render() {
        const entries = this.state.wiki.map(entry => {
            return <Results
                key={entry.pageid}
                title={entry.title}
                snippet={entry.snippet}
                clicked={() => this.openWikiHandler(entry.pageid)} />
        });

        return (
            <div>
                <div className="InputGroup">
                    <Search
                        search={event => {
                            if (event.key === 'Enter') {
                                this.searchWikiHandler();
                            }
                        }} />
                    <Random />

                </div>
                <div className="InputGroup">
                    <ul>
                        {entries}
                    </ul>
                </div>
            </div>
        );
    }
}

class Random extends React.Component {
    render() {
        return (
            <Aux>
                <a href="https://en.wikipedia.org/wiki/Special:Random"
                    target="_blank">
                    <button type="button" className="Button">Random</button>
                </a>
            </Aux>
        );
    }
}

class Results extends React.Component {
    render() {
        return (
            <li className="Post" onClick={this.props.clicked}>
                <h1>{this.props.title}</h1>
                <p>{this.props.snippet.replace(/<(?:.|\n)*?>/gm, '')}</p>
            </li>
        );
    }
}

class Search extends React.Component {

    render() {
        return (
            <Aux>
                <input type="text" id="search"
                    className="Search" placeholder="Search Wikipedia..."
                    onKeyPress={this.props.search}></input>
            </Aux>
        );
    }
}

const Aux = (props) => props.children;

ReactDOM.render(<App />, document.getElementById('root'));