const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB.DocumentClient();
const TableName = "UserInfo";

exports.handler = async (event, context) => {
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ message: "" }),
  };
  
  const userId = (JSON.parse(event.body)).userId

  // TODO: 削除対象のテーブル名と削除したいデータのkeyをparamに設定
  const param = {
    TableName,
    Key:{
      userId
    }
  };
  
  
 try{
    // dynamo.delete()を用いてデータを削除
    await dynamo.delete(param).promise();
    response.statusCode = 204;
    // TODO: 成功後の処理を記載(status codeを指定する。)
  
  }catch(e){
    response.statusCode = 500;
    response.body = JSON.stringify({
      message: "予期せぬエラーが発生しました。",
      errorDetail: e.toString()
    });
  }
  
  return response;
};