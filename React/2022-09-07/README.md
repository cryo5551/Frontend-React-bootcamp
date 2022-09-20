07-09-2022

### Concatenation
- combining or linking two datatypes together.
- for Strings '+' is concat oprator.


## Hetrogenous concatination
### number and String
- in JS '+' oprator is having multiple purposes.
 - Integer + Integer -> Integer
 - String + String -> String

- but when faced with a String and a Integer, it gives priority to String so
 - String + Integer -> String
 - Integer + String -> String

 ### Array and String 
 - itll concat directly with last array element and put commas in between elements.
 - ex- 42;

 - if we try to use '-' it'll give NaN;
  - cz can't convert a array to a Integer;
  - Ex - 46;


## String Templating / Template Literals / String Literals
- introduced in ES 6;
- template is idea like how is this thing gonna look like;
- it can be as simple as a otp massage or a invitation card;
- Example: 
 - Getting OTP massage for a transaction;
 - Massage -> yor OTP for transaction of 6969 rupees with card number ending with xxx069 is 420069 
 - Template -> yor OTP for transaction of <Amount> rupees 
   with card number ending with XX<CardNumber> is <OTP>
- this is string that we define fill it with actual data that we have and then use it;
- Syntax: 
 - to create a string we use `` 
 - if we want to use a variable in the template we use ${}
 - inside {} can be any JS execution(variable, function, calculation etc...).

Ex: 48;


### Assignment ✅✅
- create a form and take name and email as input;
- after clicking submit pop up an alert
- template -> Hello <f_name> <l_name> your response has been rcieved we'll reach out to you shortly on <email> in 20 wotking days;




