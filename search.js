//1) How many searches?

//Sorted list - [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
//Target number - 8
//Using recursive binary search algo, identify the sequence of numbers each recursive call will search to try and find 8

//Recursive call 1 - start at 11, 8 is less than 11 (index of 4), so will call again with index of 3 - searches [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
//Recursive call 2 - searches [3, 5, 6, 8]
//Will return with index of 4 - arr[4] = 8

//Sorted list - [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
//Target number - 16
//Recursive call 1 - [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
//Recursive call 2 - [12, 14, 15, 17, 18]
//Recursive call 3 - [14, 15, 17, 18]
//Recursive call 4 - [15, 17, 18]
//Recursive call 5 - [17, 18]
//Recursive call 6 - [18]
//Return -1

//2) Adding a React UI 

//see created react app

//3) Find a book

const library = [
"005.133 Mike Cowlishaw: The REXX Language",
"005.133 Sams: Teach Yourself C++ In 21 Days",
"005.133 Bjarne Stroustrup: The C++ Programming Language",
"005.2762 Douglas Crockford: JavaScript: The Good Parts",
"005.2762 David Flanagan: JavaScript: The Definitive Guide",
"005.44684 Meinhard Schmidt: Windows Vista for Dummies", //It certainly is...
"220.52081 Zondervan: NIV Study Bible",
"231.7652 Dr Russell Humphries: Starlight and Time",
"623.82509051 Frederick Thomas Jane: Jane's Fighting Ships", //So far, the ships are winning.
"796.8092 Chuck Norris: The Official Chuck Norris Fact Book",
];

let findBook = function(library, dewey, title) {
    let start = 0;
    let end = library.length;
    
    while (start < end) {
        let middle = Math.floor((start + end) / 2);
        if (library[middle].dewey == dewey) {
            //code has been found. has book been found?
            if (library[middle].title == title) {
                return library[middle];
            }
            for (let i = middle + 1; library[i].dewey == dewey; i++) {
                if (library[i].title == title) {
                    return library[i]
                }
            }
            for (let i = middle - 1; library[i].dewey == dewey; i--) {
                if (library[i].title == title) {
                    return library[i];
                }
            }

            return null;
        }
        if (library[middle].dewey < dewey) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }

        return null;
    }
}

console.log(findBook(library));

//4) Searching in a BST:

//Binary tree in-order traversal - [14, 15, 19, 25, 27, 35, 79, 89, 90, 91]
//Binary tree pre-order traversal - [35, 25, 15, 14, 19, 27, 89, 79, 91, 90]
//What would be its postorder traversal? - 
        //Root - always the first element of the preorder traversal (35)
        //Postorder traversal = [14, 19, 15, 27, 25, 90, 91, 79, 89, 35]

//Postorder traversal is [5, 7, 6, 9, 11, 10, 8] - what is the pre-order traversal?
        //Preorder traversal = [8, 6, 5, 7, 10, 9, 11]

//5) Implement different tree traversals 

        //See binary search tree file

//6) Find the next commanding officer
        //People are at same rank - same level of the tree
        //More experienced individuals are on the left  (experience decreases as you move left to right)
        //Write program that outlines the ranking officers in their ranking order

        //See binary search tree file for implementation


