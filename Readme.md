background
#F3F2F0
rgb(243, 242, 240)
cream 

cards
#EBEBEB
rgb(235, 235, 235)
soft white

#002B5B
rgb(0, 43, 91)

#2B4865
rgb(43, 72, 101)

#256D85
rgb(37, 109, 133)

#8FE3CF
rgb(143, 227, 207)

#496789
rgb(73, 103, 137)

Grey taupe white - rgb(247,247,247)
blueish white - rgb(246, 247, 248)
medium dark pewter blue - rgb(28, 43, 57)

https://colorhunt.co/palette/2ec1ac3e978bd2e603eff48e
lemon lime - rgb(239, 244, 142)
lime - rgb(210, 230, 3)
muted teal - rgb(62, 151, 139)
bright teal - rgb(46, 193, 172)

https://colorhunt.co/palette/2331424f9da6facf5aff5959
navy - rgb(35, 49, 66)
teal - rgb(79, 157, 166)
bright teal - rgb(46, 193, 172)
gold - rgb(250, 207, 90)
coral - rgb(255, 89, 89)

28 December 2022
Selected color scheme
Researched logos and fonts
Drafted logo mockups

3 January 2023
SVG cat log done

8 January 2023
Decided final logo

 - 8 January 2023
NEXT STEPS

 6 February 2023
  - Pepper logo will be cleaned up to just silhouette to add elements of neumorphism.
  - rethink landing page with subtle outline of cat head and one color, then add touches of the contrast color elsewhere for making buttons and controls easier to find/stand out

7 February 2023
Reviewed Node--how to set up routes

9 February 2023
Continued reviewing node
Set up server.js and user and posts routes
Installed .env  bcrytp  pg (for postgres)  body-parser  express 
Created db, pepper_jobboard
Created table, users
Created table, posts
Created an increment primary key in users as user_id
Created foreign key to link users data to posts data via user_id
Admin and password are set up for .env
Database is connected and both tables are appearing in the console.

10 February 2023
Database is set up in it's own file location and imports to the routers.
Found a decent downloadable cat sound.
Set up ejs partials
Set up home page to link to:
Log in page with form
Sign up page with form
Set up new posts page with form

11 Feruary 2023
Sign up form works.
Client data from sign up form pushes to postgres.
Bcrypt hash function works but can't resolve the promise so it won't insert into the pool query to upload into postgres.

12 February 2023
Sign up page takes new user data in postgres (records a new user_id, email, and encrypted password.) then redirects to the all posts page.
Sign up page console logs if password confirm doesn't match.
Sign up page console logs if email is already in postgres then redirects to home page/sign up link.
Sorted out the conditional postgres search to check if email already exists.

13 February 2023 
The search query for log in isn't working so the bcrypt compare can't run properly bcs it isn't taking up the password from the DB correctly.

14 February 2023
Updated the forms to have labels.
Experimenting eith the logger function so we can fully understand how to log in and out once sessions are added to the code.
Still trying every possible combination to do the search to return the whole row of table data that matches the condition WHERE.
I can't do the search query in pg so it will need to take map method and then extract the row that meets the condition. Even though, there are methods that will return a row or table etc--things specific to postgres.

15 February 2023
Login now starts at /login, takes in the email and password then creates a db search that compares the database email column to that which was entered. If userCheck is true meaning the email matches that in the database, then next another db search is performed to filter out each of the table rows and find the email that was entered. Once completed, the result is the entire table row so that these can be stored in variables for settin up the next stage. 
After, the password that was entered as well as the password from the returned row are compared with bcrypt and if the hash matches then the user is taken to the posts page. 
From login page, the user id populates the path so the session can be built from that users own personal dashboard and account

16 February 2023
Changed new user sign up to redirect to log in page.
Changed the log in successful to redirect to the user dash with the user id set through the param.

17 February 2023
Updated the new user intake data form email and password to emailSignup and passwordSignup.
Created access token secret and refresh token secret and added them to env file
Used
require('crypto').randomBytes(64).toString('hex')
direct in terminal after accessing node library to created the random strings.
Access token is created under Log In form and logs to the console but cannot perform a redirect directly after or it crashes "Cannot set headers after they are sent to the client".
The token can be returned in the console log but it won't allow the redirect.
FINAL - Registration generates the hash then takes the user to the log in page. 

SPINNING OUT OF CONTROL
AFTER BRCYPT IN THE SIGN UP PAGE, GO TO LOG IN AND IMPLIMENT JWT THERE.

19 Februry 2023
Combined the users and posts route files so the params can be used together without the complication of importing and exporting. And so a new post has access to the userIdSession which is used to set the userId param and extract user_id from the database tables.
Followed the npm directions for jwt and it console logs the token now.
Set new user email input to lowercase.
Set login email input to lowercase.

20 February 2023
Worked on jwt token some more--same state.

21 February 2023 
Set up the routes so they all direct to the correct ejs file.
Found that the userId param doesn't carry over so spend the day trying to find a better way to set up the user data at login so that it can be hoisted to global and access by all funtions/routes.

23 February 2023
Created a function called logger that records the userSession data. Stores it in a variable but it's still only available within that function.

25 February 2023
Tried to remove the second pool query so make the userSession data more accessible in the entire app but it sent the node message--cannot set header after already sent to client??? 
Cleaned up users table--now all new user entiries will have bcrypt hashed passwords.

26 February 2023
Changed the jwt code to insert the token into the db.
Added access_token to users table.
Return 42601 syntax error.

1 March 2023
Jwt saves to the user table.

2 March 2023
Changed first redirect page to ALL POSTS
Set up the /posts & posts.ejs data and functionality.

3 March 2023
JWT works. The token verifies. Didn't work yesterday because I didn't add the next function.
Dabbled with captureUserId to figure out how to capture the user id of the person who logs in then run that elsewhere in the code but we haven't found a way.

4 March 2023
JWT was only validating because the form was verfied but it wasn't being checked against the user token.

6 March 2023
Researched and tested jwt and logger and middleware.

7 March 2023
Researched and tested some ways to draw out the data to make it 'global'.

8 March 2023
Tested the jwt verify. Still unable to link the tokens to compare.

9 March 2023
Tried different variations of accessing the header but none worked.

10 March 2023
Set the jwt to store in cookies with cookie-parser.

11 March 2023
Created a session cookie at login
Set up logout route and function.
Logout deleted token and session (user id) cookies.

12 March 2023
Set up all posts and post/postId routes.
Researched url formatting to nothing.

13 March 2023
Set the routes up using variables within the post requests.
Logout link complete and set to each ejs file.
My Pepper link complete and set to each ejs file.
Pepper link complete and set to each ejs file.
My posts link: read all complete.
My posts link: create all complete.
My posts link: read: single post partially complete.
My account link complete.
Set up a link at the bottom of each spooled up job post. Not complete. It currently appends the job post id to the current route. Fails to load. Is set up in the get request to go to /post/ which is set up to spool out the db. Post id needs to be sent along with the link so it will apply the condition to the forEach in /post/.

17 March 2023
Eliminated 'saved' feature.
Moved the routes around so only Pepper, my posts, my account, log out links.

18 March 2023
Cleaned up routes.
Organized the html into cards and proper margins.
Set classes to the elements.
 
 19 March 2023
 Styling almost done just need to check over the css and do the small screen size.
 
 20 March 2023
 Styling is done - except a few tweaks and maybe do phone size.
 User can delete a post.
 User can update password which gets a new hash.
 user can deactivate their account. 
