const AWS = require('aws-sdk')
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

exports.handler = async (event, context) => {
  try {
    const slug = event.queryStringParameters.slug

    var params = {
        TableName : MY_AWS_TABLE_NAME,
        KeyConditionExpression: "slug = :s",
        ExpressionAttributeValues: {
            ":s": slug
        }
    };
    return await client.query(params).promise()
    .then(result => ({
      statusCode: 201,
      body: result.Items
    }))
  } catch (error) {
    return {
      body: JSON.stringify({
        result: error.stack
      }),
      statusCode: error.statusCode || 500,
    }
  }


}