class App extends React.Component {
    render() {
        return (
<<<<<<< HEAD
            <div className="App">
                <h1>This is a Test</h1>
=======
            <div>
                <div className="InputGroup">
                    <Search />
                    <Random />
                    
                </div>
>>>>>>> 3b484b6c18bc1c21df4daa0630f6184bfec79296
            </div>
        );
    }
}

<<<<<<< HEAD
ReactDOM.render(<App />, document.getElementById('root'));

// $(document).ready(function () {


//     var results = document.getElementById("results");

//     $(document).on('keyup', function (e) {
//         if ($("#search").is(":focus") && e.key == "Enter") {

=======
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
    //let urly = "https://en.wikipedia.org/?curid=";
    render() {
        return (
            <article className="Post">
                <h1>{props.title}</h1>
            </article>
        );
    }
}

class Search extends React.Component {
    state = {
        wiki: []
    }

    searchWikiHandler = () => {
        //let results = document.getElementById("results");
        let call = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=revisions&list=search&rvprop=content&srsearch="
            + document.getElementById("search").value + "&srlimit=15&srprop=snippet";

        let html = '';

        axios.get(call).then(response => {
            console.log(response.data.query.search);
            this.setState({ wiki: response.data.query.search })
        });
>>>>>>> 3b484b6c18bc1c21df4daa0630f6184bfec79296

        // $.getJSON(call, function (json) {
        //     json.query.search.forEach(function (val) {
        //         html += "<li>" + val.title + "</li>";
        //     });
        //     results.innerHTML = html;
        // });

<<<<<<< HEAD
//             var call = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&prop=revisions&list=search&rvprop=content&srsearch="
//                 + document.getElementById("search").value + "&srlimit=15&srprop=snippet";

//             var html = '';

//             var urly = "https://en.wikipedia.org/?curid=";

//             $.getJSON(call, function (json) {
//                 json.query.search.forEach(function (val) {
//                     html += "<li>" + val.title + "</li>";
//                 });
//                 results.innerHTML = html;
//             });


//         }
//     });


// });
=======
    }

    render() {
        const entries = this.state.wiki.map(entry => {
            return <Results
                key={entry.pageid}
                title={entry.title} />
        });

        return (
            <Aux>
                <input type="text" id="search"
                    className="Search" placeholder="Search Wikipedia"
                    onKeyPress={event => {
                        if (event.key === 'Enter') {
                            this.searchWikiHandler();
                        }
                    }}></input>
                    {entries}
            </Aux>
        );
    }
}

const Aux = (props) => props.children;

ReactDOM.render(<App />, document.getElementById('root'));
>>>>>>> 3b484b6c18bc1c21df4daa0630f6184bfec79296
