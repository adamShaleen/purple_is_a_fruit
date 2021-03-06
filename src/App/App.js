import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "../containers/Header/Header";
import Entry from "../containers/Entry/Entry";
import Footer from "../containers/Footer/Footer";
import Content from "../stub/stub";

const App = () => {
    // const [entries, setEntries] = useState([]);

    // const getEntries = async () => {
    //     const response = await fetch("http://localhost:3001/getAllEntries");
    //     const data = await response.json();
    //     setEntries(data);
    // }

    // useEffect(() => {
    //     getEntries();
    // }, []);

    // Sort the entries by id so the newest is at the top
    const entries = Content.entries.sort((a, b) => b.id - a.id);

    return (
        <section>
            <Header/>
            {entries.map(({ date, title, contentBlocks, tags }) => 
                <Entry 
                    key={date} 
                    date={date} 
                    title={title} 
                    contentBlocks={contentBlocks} 
                    tags={tags} />
                )}
            <Footer/>
        </section>
      );
}

export default App;