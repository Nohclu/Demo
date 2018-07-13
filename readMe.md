##### Users table in Sqlite

![alt text](images/DbBeforeReg1.png "Users model in Sqlite")

<br></br>
##### Sending JSON in POST request to register (Validation in AuthRepository)

![alt text](images/UserRegistering2.png "Post request")

<br></br>
##### User now added to Users table

![alt text](images/DbAfterReg3.png "Users model after in Sqlite")
<br>
<p>All Routes defined in AuthController.<br> AuthController inherits from IAuthRepository which is the Interface for AuthRepository here we have all of our authentication methods</p>
1. Register <br>
2. Login <br>
<p>and other helper methods.</p>



### Angular and .Net Api 

##### Login

![alt text](images/LoginAndToken.png "Angular login")
<p>Using a Postman injected user, we take their credentials and try to sign in</p>
<br></br>

![alt text](images/LoginAndTokenshown.png "Token stored")
<p>Login was successfully and token sent back by api and stored locally</p>