##### Users table in Sqlite

![alt text](images/DbBeforeReg1.png "Users model in Sqlite")

<br>
##### Sending JSON in POST request to register (Validation in AuthRepository)

![alt text](images/UserRegistering2.png "Users model in Sqlite")

<br>
##### User now added to Users table

![alt text](images/DbAfterReg3.png "Users model in Sqlite")
<br>
<p>All Routes defined in AuthController.<br> AuthController inherits from IAuthRepository which is the Interface for AuthRepository here we have all of our authentication methods</p>
1.Register
2.Login
<p>and other helper methods.</p>
