
// DataStructure: A data structure is a specfic  way of organizing, storing , and accesing data.

// Algorithm: A set of instructions that tells to computer how to do somthing , or you can say step-by-step solution of the problem is called algorithm.


// Big O (Time && Space ) : Big O notation helps us understand how long an algorithm will take time to run (or) howmuch memory it will need as the amount of data it handles grows.

// O(n) : Signifies that the execution time of the algrithm grows linearly in propogation to the size of the input data(n)

    const users = ["vinay", "Anil", "Raju", "Nagesh", "Damaodhar"];
    //O(n)
    const findUser = (user) => {
        for (let i = 0; i < users.length; i++) {
            if (users[i] === user) {
                console.log(`Found User ${user}`); 
                return;  // Exit the function after finding the user
            }
        }
        console.log('User not found');  // Print a default message if user is not found
    }

    findUser("vinay");  

//O(1) : O(1) aka constant time, signifies that the excuetion time of an algorithm remian constant regardless of the input size.

    const numbers = [ 1, 2, 3, 4, 5];
    // O(1)
    const getElement = ( arr, index) => arr[index];

    console.log(getElement(numbers, 0))

//O(n^2) : Indiactes that the algorithms execution time grows quadratically with the size of the input data(represented by n).

//Example: Imagine you have a box of items and want to compare each item with every item to find the specfic pairs. As the number of items(n) increses , the number of comparsions(n^2)grows much faster.

    const findPairs = (arr) =>{
        //o(n^2)
        for(let i = 0; i < arr.length; i++){
            console.log(`${i}`)
            for(let j = i + 1; j < arr.length; j++) {
                console.log(`${j}`)
                console.log(`Pair : ${arr[i]} ${arr[j]}`);
            }
        }
    }

    findPairs([1,2,3,4])

//O(log n) : O(log n) time complexity refers to an algorithms runtime that grows logarthimaically with the size of the input (represented by n).
 
// Example : In simple terms as the input size increses, the time it takes for the algorithm to run increses slowly.



