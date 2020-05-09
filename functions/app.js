const express = require('express')
const serverless = require('serverless-http')
const app = express()
const AWS = require('aws-sdk')
const bodyParser = require('body-parser');
const {
  MY_AWS_ACCESS_KEY_ID,
  MY_AWS_SECRET_ACCESS_KEY,
  MY_AWS_REGION,
  MY_AWS_TABLE_NAME
} = process.env

const client = new AWS.DynamoDB.DocumentClient({
    region: MY_AWS_REGION,
    credentials: new AWS.Credentials(
      MY_AWS_ACCESS_KEY_ID,
      MY_AWS_SECRET_ACCESS_KEY
    )
  })

const validate = (data) => {
    if (data.hasOwnProperty("human")) {
        return false
    }
    if (data.hasOwnProperty("slug") &&
        data.hasOwnProperty("name") &&
        data.hasOwnProperty("text")) {
            return true
        }
    return false
}


const CUSTOM_EPOCH = 1577836800000;
function generate(shard) {
    var ts = new Date().getTime() - CUSTOM_EPOCH;
    var randid = Math.floor(Math.random() * 512);
    ts = (ts * 64);
    ts = ts + shard;
    return (ts * 512) + (randid % 512);
}


app.use(bodyParser.raw())


const SHARD_ID = 0
app.post('/comment', async (req, res, next) => {
    try {
        const data = JSON.parse(req.body)
        if (validate(data) === false) {
            throw { statusCode: 422 }
        }
        await client.put({
          TableName: MY_AWS_TABLE_NAME,
          Item: {
            id: generate(SHARD_ID),
            slug: data.slug,
            name: data.name,
            email: data.email,
            text: data.text,
            date: new Date().toISOString(),
            reply: data.reply
          }
        }).promise()
        res.status(201).end()
      } catch (error) {
        console.log(error)
        res.status(error.statusCode || 500).end()
      }
})

app.get('/comments', async (req, res) => {
  try {
    const slug = req.query.slug
    var params = {
        TableName : MY_AWS_TABLE_NAME,
        KeyConditionExpression: "slug = :s",
        ExpressionAttributeValues: {
            ":s": slug
        }
    };
    const result = await client.query(params).promise()
    res.send(result.Items)
  } catch (error) {
    res.status(error.statusCode || 500).end()
  }

})

module.exports.server = serverless(app)
