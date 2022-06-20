This is boiler plate code for node, express and mongodb backend authentication

Tech Stack:

Node js,
Exprss js,
mongodb,
json web token,
nodemailer

which includes: -
user Register , login , forgot and reset password

to use it

1) yarn install

setup env file in config/config.env

which includes

PORT = XXXX

JWT_SECRET = "XXXXXXXXXXXXXXXXXXXXXXXXX"
JWT_EXPIRE = XX like  10d for 10 days 

COOKIE_EXPIRE = X

SMPT_SERVICE = "XXXX" like "yahoo" or "gmail" or etc.
SMPT_MAIL = "YOUR_MAIL"
SMPT_PASSWORD="YOUR_PASSWORD"
SMPT_HOST=RESPECTIVE_HOST
SMPT_PORT=465
