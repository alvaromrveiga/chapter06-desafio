export const handle = async (event) => {
  console.log("olá");
  
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hi",
    }),
  };
};
