const AWS = require('aws-sdk')
const {
  MY_AWS_ACCESS_KEY_ID,
  MY_AWS_SECRET_ACCESS_KEY,
  MY_AWS_REGION,
  MY_AWS_TABLE_NAME
} = process.env

const dynamoDb = new AWS.DynamoDB.DocumentClient({
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

const SHARD_ID = 0
exports.handler = async (event, context) => {
  try {
    const data = JSON.parse(event.body)
    if (validate(data) === false) {
        throw { statusCode: 422 }
    }
    const result = await dynamoDb.put({
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
    return {
        statusCode: 201,
      }
  } catch (error) {
    console.log('error', error)
    return {
      statusCode: error.statusCode || 500,
    }
  }


}