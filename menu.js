///////////////////////////////////////////////
///////////////////MENU.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code that
    deals with food objects, arrays of objects
    and filtering those arrays. 
*/


//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)

    Make sure that you give your properties values
    of the correct data type.

    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

// const Pizza = {
//     name: 'This pizza',
//     price: 5.99,
//     category: 'This is category',
//     popularity: 1,
//     rating: 4,
//     tags: [`1`,`2`]

    
// }



//////////////////PROBLEM 2////////////////////
/* 
    Let's print a few values from our pizza object.

    First, log the popularity of pizza. 
    Use dot notation to access the value.
*/

console.log(Pizza.popularity)


/*
    Second, log the second tag in your pizza's
    tags array.
    Use a combination of dots and brackets to
    get the value.
*/

console.log(Pizza['tags'])


/*
    Third, destructure the price off of the
    pizza object.
    
    Print the value of your new price variable.
*/
console.log(Pizza.tags[1])




/*
    Fourth, and last, destructure the category
    property.

    Print the value of your category variable. 
*/

const {category} = Pizza


console.log(category)


//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.

    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/

const foodArr = [
    {
    name: 'cookies',
    price: 7.99,
    category: 'entree',
    popularity: 10,
    rating:  1,
    tags: [`chocolate, yummy, family favorite`]
    },
{
    name: `Iceream`,
    price: 4,
    category: 'enteer',
    popularity:  7,
    rating: 5,
    tags: ['cold, good, yummy']
},

{
    name: 'pizza',
    price: 18,
    category: 'entree',
    popularity: 6,
    rating: 10,
    tags:[` yummy, hot, warm`]

},




{
    name: 'cake',
    price: 15,
    category: 'entree',
    popularity: 8,
    rating: 3,
    tags:[` yummy, hot, warm`]

},
{
    name: 'Strawberry',
    price: 13,
    category: 3,
    popularity: 4,
    rating: 2,
    tags:['good', 'cherry','yummy']

}
]


//////////////////PROBLEM 4////////////////////
/* 
    Let's filter the food objects according
    to their tags.

    Write a callback function below that will
    return only food objects that have a certain tag.

    You can check for any tag that at least 1 of
    your food objects has.
*/

//CODE HERE

 const filteredFood = foodArr.filter(food => food.tags.includes('chocolate'))
 console.log(filteredFood)



//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.

    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 

    The property will be a string (rating,
    popularity, or price)

    The number will be the number that you want
    to compare against 

    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property

    Inside the function, create a variable to hold
    a filtered array

    Use the filter method to filter the foodArr

        In the callback, check if the `type` is `above`, 
        if it is, return objects whose value for the given
        property is greater than the `number` passed in

        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

const filteredByProperty = (property,number,type) => {
    const filterByArray = foodArr.filter((element)=>{
        if(type == 'above'){
            return element[property] > number
        }else if(type === 'below'){
            return element[property] <number
        }
    })
    return filterByArray

}



/*
    Invoke the `filterByProperty` function passing
    in a value for each paramter.

    You'll have to console.log to see the filtered array
*/

console.log(filteredByProperty(`price`, 20, 'below'))