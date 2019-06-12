import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Header from "../../containers/Header/Header.jsx";
import Entry from "../../containers/Entry/Entry.jsx";
import Footer from "../../containers/Footer/Footer.jsx";
import Content from '../../stub/stub.js';

const App = () => {
    // const [entries, setEntries] = useState([]);

    // const getEntries = async () => {
    //     const response = await fetch("http://localhost:3001/getAllEntries");
    //     const data = await response.json();
    //     setEntries(data);
    // }

    return (
        <div className="App">
          <Header/>
          {Content.entries.reverse().map(entry => 
            <Entry key={entry.date} 
                   date={entry.date} 
                   title={entry.title} 
                   contentBlocks={entry.contentBlocks} 
                   tags={entry.tags} />
          )}
          <Footer/>
        </div>
      );
}

ReactDOM.render(<App/>, document.getElementById("root"));