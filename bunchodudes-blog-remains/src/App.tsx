import * as React from "react";
import { Blog } from "./views";
import { Header } from "./containers";
import { Content } from "./stub";

// TODO: replace with real data from AWS Dynamo table
export const App = () => (
    <>
        <Header />
        <Blog content={Content} />
    </>
);
