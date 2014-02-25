API Documentation

This API would be read-only thus would be limited to only get HTTP Requests.

The API would allow for get requests with two parameters based on a restful API structure.  The camera and the image desired.

example:
http://imageAPI/camera/:cameraID/image/:imageID

Since each user has a collection of cameras that are unique to them, the server would parse the url string so that camera 1 for the user on the server side would be converted the unique hash ID for that camera’s related photos when it was querying the database.  This unique ID for the camera would never be exposed to the client.

Therefore the request:

http://imageAPI/camera/1/image/:imageID would return what is respectively camera 1 configured for that user. 

To select the most recent photo the user would enter an imageID of 0.  0 is always the most recent photo, and it counts up from there.

This is due to the specific nature of how the user is accessing the data with this UI where they are looking at the most recent image and moving backward from there.  It also keeps the logic quite simple for the client, and the server-side logic and information isolated and protected.

when http://imageAPI/camera/1/image/0 hits the server, it parses the requests, does the appropriate lookup:

Camera 1 for this User
0 : Most Recent image for this Camera

It will then send back to the browser the associated Image URL which would be where the image is actually hosted.  These are kept separate so that database query requests and relational logic are kept single responsibility, isolated from CDN static assets.  This architecture allows for the possibility to improve CDN server time as geography and scaling require.


