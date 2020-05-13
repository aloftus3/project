#Developer Manual

Dependencies:
The required dependencies include: npm, express, node-fetch
To install the required dependencies, navigate to the project directory in the
command line:
1. Enter "npm install"
2. Enter "npm install --save express"
3. Enter "npm install --save node-fetch"
4. Enter "npm start"
This will start the server and the application within your project directory on
the server

API:
Our API is located at https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json
To access the API, a token is needed. This can be created at
https://data.princegeorgescountymd.gov/profile/edit/developer_settings
Our token used is: zXkKoYL09JMeHS0iVhnXpcs78
The full API link is: https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json?$limit=100000&$$app_token=zXkKoYL09JMeHS0iVhnXpcs78

To interact with the API in the html pages, use a fetch request:
fetch('https://data.princegeorgescountymd.gov/resource/wb4e-w4nf.json?$limit=100000&$$app_token=zXkKoYL09JMeHS0iVhnXpcs78')

To interact with the API in server.js, use a fetch request and enter the URL
for the data you would like to retrieve:
fetch(baseURL)
