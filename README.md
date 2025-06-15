INTRODUCTION:
-------------
        • Developed an intuitive expense tracking app, enabling users to efficiently manage transactions, create references, and analyze financial data.
        • Implemented features like editing, deleting, sorting, and custom date filtering for seamless user experience.
        • Designed and integrated comprehensive reporting tools, offering users insights into expenditure patterns through percentage-wise distribution in pie charts.

TECHNOLOGIES USED:
-------------------
        • HTML
        • CSS
        • JavaScript
        • NodeJs
        • Express(framework)
        • Mongoose
        • ReactJs
        • AntDesign
 

To Run Project:
-------------------
        • npm run dev


DEPENDENCIES INSTALLED:
------------------------
        • colors
        • concurrently
        • cors
        • dotenv
        • express
        • moment
        • mongoose
        • morgan
        • nodemon
        

CONFIGURATION : 
---------------
        In this folder, I have given all the values that can change in the application when used on different environment and systems. The DataBase information is also given in this folder.

MODELS :
--------
        I have created 2 models here namely, 
                • Transaction Model
                • User Model


CONTROLLERS : 
-------------
        This is the place where all the functionalities are defined for all the models present in the application. All the functionalities are accessed by using APIs from the authenticated and authorized users.

        TRANSACTION CONTROLLER:
        ----------------
                This the place where the user will be make control their transactions with  with robust capabilities, including search, sort, create, read, update, delete, and retrieval of all transactions for enhanced user management and experience.
    
        USER CONTROLLER:
        --------------------
                Implemented a user controller enabling seamless login, registration, and logout functionality by leveraging local storage.



ROUTES:
-------
        This is the folder where every API call source is present, for each API call control is transferred to the correct controller file where all the functionalities are done. Before passing the control to the controllers, middlewares are called to check the authenticity and validation of the API call.
                • Transaction Route
                • User Route


DOTENV FILE:
-------------------
        • PORT=YOUR_PORT_CONNECTION
        • DEV_MODE=YOUR_DEVELOPMENT_MODE
        • MONGO_URL=YOUR_MONGO_CONNECTION


GIT COMMANDS:
-------------------
        • git init
        • git add .  
        • git status
        • git commit -m 'First Commit'
        • git remote add origin GITHUB_ORIGIN
        • git push origin master
        • git pull origin master
        • git push origin master
