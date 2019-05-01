export default {
    s3: {
      REGION: "us-east-2",
      BUCKET: "YOUR_S3_UPLOADS_BUCKET_NAME"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "http://ec2-3-14-146-143.us-east-2.compute.amazonaws.com:8080/login"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "YOUR_COGNITO_USER_POOL_ID",
      APP_CLIENT_ID: "YOUR_COGNITO_APP_CLIENT_ID",
      IDENTITY_POOL_ID: "YOUR_IDENTITY_POOL_ID"
    }
  };
  /*

YOUR_S3_UPLOADS_BUCKET_NAME and YOUR_S3_UPLOADS_BUCKET_REGION with the your S3 Bucket name and region from the Create an S3 bucket for file uploads chapter. In our case it is notes-app-uploads and us-east-1.

YOUR_API_GATEWAY_URL and YOUR_API_GATEWAY_REGION with the ones from the Deploy the APIs chapter. In our case the URL is https://ly55wbovq4.execute-api.us-east-1.amazonaws.com/prod and the region is us-east-1.

YOUR_COGNITO_USER_POOL_ID, YOUR_COGNITO_APP_CLIENT_ID, and YOUR_COGNITO_REGION with the Cognito Pool Id, App Client id, and region from the Create a Cognito user pool chapter.

YOUR_IDENTITY_POOL_ID with your Identity pool ID from the Create a Cognito identity pool chapter.



  */