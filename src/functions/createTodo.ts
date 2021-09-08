import { APIGatewayProxyHandler } from "aws-lambda";
import { document } from "src/utils/dynamodbClient";

interface ITodoCredentials {
  id: string;
  title: string;
  deadline: Date;
}

export const handle: APIGatewayProxyHandler = async (event) => {
  const { id, title, deadline } = JSON.parse(event.body) as ITodoCredentials;
  const { user_id } = event.pathParameters;

  await document
    .put({
      TableName: "users_todos",
      Item: {
        id,
        user_id,
        title,
        done: false,
        deadline: new Date(deadline),
      },
    })
    .promise();

  return {
    statusCode: 201,
    body: JSON.stringify({
      message: "Todo Created!",
      id,
      user_id,
      title,
      deadline,
    }),
  };
};
