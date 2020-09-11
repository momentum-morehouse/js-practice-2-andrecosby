// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.
//
// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.


function remove(nameSet , name){
    return nameSet.filter(person => person !== name);


// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.

// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.


function sum(numberSet){
    let numberCount = numberSet[0];
    if(numberSet.length !== 0){
        if(numberSet.length !== 1){
            
            for(let i = 1; i < numberSet.length; i ++){
                numberCount +=  numberSet[i];
            }
            return numberCount;
        }else{
            return numberSet[0];
        }
    }else{
        return 0;
    }


    // 4. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.


function average(numberSet){
    if(numberSet.length !== 0){
        return sum(numberSet)/numberSet.length;
    }else{
        return undefined;
    }
    }
// 5. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.


function minimum (numberSet){
    var smallestNum = numberSet[0];                     //Base value for the possible smallest number

    if(numberSet.length !== 0){                         //If there is no numbers in the array return undefined or proceed
        if(numberSet.length !== 1){                     //If there is one number in the array return that one number
            for(let i = 1; i < numberSet.length; i ++){ //For loop to run scan and compare all the numbers in the array
                if(smallestNum > numberSet[i]){        // Compares the possible smallest number to another number of the array
                    smallestNum = numberSet[i];         // Changes the smallestNumber integer to the currently compared number

                }
            }
            return smallestNum;                         //Returns the smallest number at the end of the loop 

        }else{
           return smallestNum;

        }

    }else{
        return undefined;

    }
    }
// 6. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.


function selectionSort (numberSet){
    let smallestNum = numberSet[0];                     
    let numberSetCopy= numberSet.slice(0);
    let orderedSet= [];
    
    if(numberSet.length !== 0){   

        if(numberSet.length !== 1){   
            do{                    
                for(let i = 0; i < numberSetCopy.length; i ++){ 
                    if(smallestNum > numberSetCopy[i]){        
                        smallestNum = numberSetCopy[i];         
                        
                    }                

                }
                numberSetCopy = numberSetCopy.filter(largerNum => largerNum !== smallestNum);
                orderedSet.push(smallestNum);
                

            }while(orderedSet.length !== numberSet.length);
            return orderedSet;

        }else{
            return numberSet;

        }

    }else{
        return numberSet;

    }
}



// 7. Create a function called `textList` that takes an array and joins its elements
// into a string separated by commas.
//
// For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// `"Cadence,Ordel,Marion"`.


function textList (text){
    let oneText = "";
    if(text.length !== 0){
        for(let i = 0; i < text.length; i++){
        
            if(i !== text.length -1){
                oneText += (text[i] + ",");
            }else{
                oneText += text[i];
                return oneText;
            }
        }
    }else{
        return oneText
    }
}

