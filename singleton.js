var booksToBeLent  = (function () {
    // lets create a consistent instance of this object
    
    var constInstance;
    //lets have a constant function for all initialization
     function forAllInitialxn () {
    var privateVarQuestion = "what is your name?";//  think this should be a function
    var users = ['nogozi', 'ifeanyi', 'chioma'];
    var books= ['eloquent_js', 'design_patterns', 'acrimony','native_son', 'obinna'];

        //a function to manipulat our private variables will be inside the return scope with curly brackets
   
     return {
           // To show a list of users
           allUsers : function (){
         var getUsers =prompt('Here are list of all our users '+ users.toString() + " please choose a name for your self");
              
               function ifUserExistInArray (value) {          
                return value === getUsers; 
                        };
            var validUser = users.find(ifUserExistInArray);
                if (validUser) {
                    alert("Hello " + getUsers + " very good, we can proceed to the next stuff");
                   var allBooks =  prompt('Here are the list of books ***' + books.toString() + '***PLease Choose a book you will add to your store. Lets Go!');

                   function ifBookExistInArray(value){
                       return value ===  allBooks;
                   }
                   var validBook = books.find(ifBookExistInArray);
                    if (validBook) {
                          getUser = [];
                         var UsersBooks = getUsers.push(validBook);
                        alert ( getUsers +" You have added "+ allBooks + " successfully"); 
                        var anotherBook =prompt("Add just one more book");
                        console.log(UsersBooks);
                        //fuction to check if the first book have been added again and to just validate
                        function ifAnotherBookExistInArray(value){
                            return value ===  anotherBook;
                        }
                        var anotherValidBook =  UsersBooks.find(ifAnotherBookExistInArray);
                             
                        function validateAnotherBookEntry() {

                                if (validBook) {
                                    console.log("yo this book does not exist");
                                } else if (anotherValidBook){
                                    console.log("You already added this");
                                 } else { }
                                }
                        } else {
                            alert("The books does not exist!!!");
                        }
                    
                } else  {
                    alert("We have no user like that");
                }
           }
         
    }
  
     }

     // lets write code to create only one instantiation
    return {
     getTheInstance :  function(){
     if (!constInstance) {
     constInstance = forAllInitialxn();
     }
      //else return the value of constInstance which is what is below
      return constInstance;
      
     }
    }
    
    })();

    var  instanciator = booksToBeLent.getTheInstance();
    console.log(instanciator.allUsers());
    