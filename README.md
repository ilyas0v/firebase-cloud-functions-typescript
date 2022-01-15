# Firebase Cloud Functions with Typescript
Simple implementation of Firebase Cloud Functions with with Typescript. Coding API with Express framework and using Firestore Database to store data.

## Clone the repo
`git clone https://github.com/ilyas0v/firebase-cloud-functions-typescript.git && cd firebase-cloud-functions-typescript`

## Create new project on Firebase Console
https://console.firebase.google.com/

## Firestore Database
Create a Firestore Database inside the project.

## Write project ID in .firebaserc file
You can find your project ID on "Project Settings" tab on Firebase Console.

## Upgrade plan from 'Spark' to 'Blaze'
After upgrading your plan, you can deploy your functions into cloud.

## Login to firebase
`firebase login`

## Change directory to "functions" folder
`cd functions`

## Install dependencies
`npm install`

## Deploy the function
`npm run deploy`



## After deploying, test the following endpoints:

### POST {YOUR_APP_URL}/api
**Header**
`Content-Type: application/json`\

**Body**
``` 
{
    "key" : "value"
}
```


### GET {YOUR_APP_URL}/api
**Response**
```
[
   {
    "id": "Qtjw6SOOzaCN6pvQ0qiG",
    "data": {
      "key": "value"
    }
  }, 
]
```