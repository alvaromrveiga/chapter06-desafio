import { APIGatewayProxyHandler } from "aws-lambda";
import { document } from "src/utils/dynamodbClient";

export const handle: APIGatewayProxyHandler = async (event) => {
  const { user_id } = event.pathParameters;

  const response = await document
    .query({
      TableName: "users_todos",
      KeyConditionExpression: "user_id = :user_id",
      ExpressionAttributeValues: {
        ":user_id": user_id,
      },
    })
    .promise();

  const userTodos = response.Items;

  if (!userTodos[0]) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Invalid user or no To Dos created!",
      }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(userTodos),
  };
};
