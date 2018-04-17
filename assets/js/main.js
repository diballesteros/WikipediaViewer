/*
App Component
Main Component, contains the state, handlers, layout for the components to the page
*/
class App extends React.Component {
    state = {
        wiki: []
    }

    /*
    Function to call the Wiki API
    Uses Axios to parse the JSON and set the State to the results
    */
    searchWikiHandler = () => {
        let call = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=revisions&list=search&rvprop=content&srsearch="
            + document.getElementById("search").value + "&srlimit=15&srprop=snippet";

        let html = '';

        axios.get(call).then(response => {
            console.log(response.data.query.search);
            this.setState({ wiki: response.data.query.search })
        });
    }

    /*
    Function to open a wiki entry in a new window depending on the ID of the page
    */
    openWikiHandler = (id) => {
        window.open("https://en.wikipedia.org/?curid=" + id);
    }

    render() {
        /*
        Constant to hold the Results from the API call.
        */
        const entries = this.state.wiki.map(entry => {
            return <Results
                key={entry.pageid}
                title={entry.title}
                snippet={entry.snippet}
                clicked={() => this.openWikiHandler(entry.pageid)} />
        });

        /*
        Search, Randomizer, Results
        */
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

/*
Random Component
Upon clicking opens a new tab with a random wiki article
*/
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

/*
Component for a Result Entry
Contains the title of the Article and a snippet of relevant information. Filtered to remove HTML tags.
*/
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

/*
Search Component
Validates if pressed to invoke search function in App component
*/
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

/*
Aux component to wrap elements without divs
*/
const Aux = (props) => props.children;


/*
Render the REACT Code
*/
ReactDOM.render(<App />, document.getElementById('root'));