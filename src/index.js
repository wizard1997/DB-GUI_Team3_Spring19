import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import Amplify from "aws-amplify";
import config from "./config";


//initialize AWS Amplify
Amplify.configure({
    Auth: {
      mandatorySignIn: true,
      region: config.cognito.REGION,
      userPoolId: config.cognito.USER_POOL_ID,
      identityPoolId: config.cognito.IDENTITY_POOL_ID,
      userPoolWebClientId: config.cognito.APP_CLIENT_ID
    },
    Storage: {
      region: config.s3.REGION,
      bucket: config.s3.BUCKET,
      identityPoolId: config.cognito.IDENTITY_POOL_ID
    },
    API: {
      endpoints: [
        {
          name: "notes",
          endpoint: config.apiGateway.URL,
          region: config.apiGateway.REGION
        },
      ]
    }
  });
  /*
Amplify refers to Cognito as Auth, S3 as Storage, and API Gateway as API.

The mandatorySignIn flag for Auth is set to true because we want our users to be signed in before they can interact with our app.

The name: "notes" is basically telling Amplify that we want to name our API. Amplify allows you to add multiple APIs that your app is going to work with. In our case our entire backend is just one single API.

The Amplify.configure() is just setting the various AWS resources that we want to interact with. It isn’t doing anything else special here beside configuration. So while this might look intimidating, just remember this is only setting things up.
  */

ReactDOM.render(
    <Router>
      <App />
    </Router>,
    document.getElementById("root")
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
