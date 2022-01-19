## MongoDB Problem Set #2: Intro to Operators

---

Assume all questions pertain to the sample_training
database unless stated otherwise. All problems in this
assigment will use the Data Explorer.

## Problem 1: Comparison Operators
Comparison operators like "$eq", "$ne", "$gt", "$lt",
"$gte", and "$lte" let us search for documents
based on the values at specific fields.

1. Write a query to return all documents in the zips
collection with a population
of less than 100 people.
2. Write a query to return all 
documents in the grades collection with a class id
greater than or equal to 400.
3. Write a query to return
all documents in the grades collection with
a student id not equal to 0.

<details>
<summary>Solutions</summary>

1. `{ "pop" : {"$lt" : 100} }`
2. `{ "class_id" : {"$gte" : 400} }`
3. `{ "student_id" : {"$ne" : 0} }`
</details>

## Problem 2: Logical Operators
Logical operators (including "$and", "$or", "$nor", and "$not")
allow us to combine our query clauses in ways that
let us make more sophisticated queries. "$and" is the default
logical operator, and we will only use it explicitly when more
than one expression of the same type (such as two "$or" operators)
are used in the same query.

1. Write a query to return all the documents 
in the zips collection with a
zip code of 79104 or in the state of Utah.
2. Return all documents in the zips collection 
that are neither in the state
of Alabama, nor in the state of Arkansas, nor in the city
of Phoenix.
3. Return all documents in the routes collection coming
into or out of LAX on a 737 or 777 model airplane.

<details>
<summary>Solutions</summary>

1. `{"$or" : [{"zip" : "79104"}, {"state" : "UT"}] }`
2. `{ "$nor" : [{"state" : "AL"}, {"state" : "AK"}, {"city" : "PHOENIX"}] }`
3. `{ "$and" : [ { "$or" : [ {"src_airport" : "LAX"}, {"dst_airport" : "LAX"} ] }, { "$or" : [{"airplane" : 737}, {"airplane" : 777}]  } ] }`

### More Info

---

An explicit use of the and operator is required to solve part three
of this problem because the same operator ("$or") is used in multiple
expressions. Without it, our cursor would contain values where either
or expression evaluated to true, even if both did not evaluate to true.
</details>

## Problem 3: Expression Operator
The "$expr" operator allows us to compare the values at different fields.

1. In the trips collection, show all documents that have the
same start station name and end station name
2. In the companies collection, write a query to 
show all documents in which the company's number of employees
is greater than or equal to the year in which the company
was founded (such as 1999, 2005, etc.).

<details>
<summary>Hint: Syntax Example</summary>

Check out the query below for an example. This query
finds all documents where the value of "spent" is less
than the value of "budget":

`{ $expr: { $lt: [ "$spent" , "$budget" ] } } `
</details>

<details>
<summary>Solution</summary>

1. `{ "$expr" : { "$eq" : [ "$start station name", "$end station name" ] }}`
2. `{ "$expr" : { "$gte" : ["$number_of_employees", "$founded_year"] } }`
</details>

## Problem 4: All Operator
The $all operator selects all documents where the value of
the specified field is an array that contains all the given
elements regardless of their order.

Write a query that finds all documents in the movies collection in the
sample_mflix database that are short westerns.

<details>
<summary>Hint: Syntax</summary>

This is the syntax that the $all operator uses:
`{ <field>: { $all: [ <value1> , <value2> ... ] } }`
</details>

<details>
<summary>Solution</summary>

1. `{ "genres" : { "$all" : ["Short", "Western"] } }`
</details>

## Problem 5: Element Match Operator
In the same way that the $all operator allows us to
check the contents of an array, the $elemMatch operator
lets us access sub-documents (objects) in an array field.

1. In the posts collection of the sample_training database,
write a query using $elemMatch that returns all the
documents with comments written by "Santiago Dollins".
2. In the scores collection, write a query
that returns all documents with a score greater than 99.99
on at least one of their assignments.

<details>
<summary>Hint: Syntax</summary>

To use $elemMatch, you will have to specify an array field
and queries like so:
`{ <field>: { $elemMatch: { <query1>, <query2>, ... } } }`
</details>

<details>
<summary>Solution</summary>

1. `{ "comments" : {"$elemMatch" : {"author" : "Santiago Dollins" } } }`
2. `{ "scores" : { "$elemMatch" : { "score" : { "$gt" : 99.999 } } } }`
</details>


## Problem 6: The Dot Operator
Like any object we've seen so far, the sub-documents
in MongoDB contain fields that can be access with the dot
(".") operator.

1. Write a query that returns all the documents in the
inspections collection with an address city of New York.
2. Write a query that returns all the documents in the
companies collection that
have an executive with the first name of Chris.

<details>
<summary>Solution</summary>

1. `{ "address.city" : "NEW YORK" }`
2. `{ "relationships.person.first_name" : "Chris" }`
</details>


## Problem 7: Find Zuck with the Regex Operator!
We use the $regex operator to match content inside a 
string field. This means that if a field's value is 
"McDonalds Burgers", a $regex given "Burger" will return the document 
containing that field.

Write a query that filters for executives with a last name
that includes "Zuck" in the companies collection.

<details>
<summary>Hint: Syntax</summary>

The most basic query using $regex looks like this:

`{ "<field>" : { "$regex" : "<YourString>"} }`
</details>

<details>
<summary>Solution</summary>

This is the query you're looking for:

`{ "relationships.person.last_name" : { "$regex" : "Zuck"} }`

Uh oh! Looks like Mark's not the only Zuck in town.
</details>