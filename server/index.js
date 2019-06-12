const express = require("express");
const cors = require("cors");
const app = express();
const AWS = require("aws-sdk");

const awsConfig = {
    "region": "us-west-2",
    "endpoint": "http://dynamodb.us-west-2.amazonaws.com"
};

AWS.config.update(awsConfig);

app.use(cors());

app.get("/getAllEntries", (req, res) => {
    const documentClient = new AWS.DynamoDB.DocumentClient();
    const params = {TableName: "purpleisafruit"};
    
    documentClient.scan(params, (err, data) => {
        if (err) console.log(`There was an error: ${err}`);
        res.send(data.Items);
    });
});

app.listen(3001, () => console.log("Listening on 3001"));