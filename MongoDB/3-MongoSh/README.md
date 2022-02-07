# MongoDB Problem Set #3: MongoSh

---

MongoSh is the command line tool created by MongoDB.
It allows us to interact with our cluster directly
from our terminal. It also gives us access to some
important functionality that we can't use in the
Data Explorer.

Whenever you need to connect to your cluster, simply
go to your cluster page on MongoDB and click "Connect"
in the top left corner of your cluster view. Select
"Connect with MongoDB Shell", then select "I have the
MongoDB Shell installed". Copy and paste the command
from the window and run it in your command line. Make 
sure you have your password handy.

Assume that all problems pertain to the sample_training
database unless otherwise specified.

## Problem 1: Find Documents
Navigate to the zips collection in the sample_training 
database. Then, execute a command that returns all
the documents in the state of Alaska. The findOne()
command returns a random document and can help you
create the correct query based on your data's structure.

<details>
<summary>Hint 1: Navigating Your Cluster</summary>

The `show dbs` command shows you all the databases in
your cluster. Similarly, the `show collections` command
shows the collections in the current database. Remember that
`use <database name>` gives you access to the collections 
in a database and is necessary to interact with your data.
</details>

<details>
<summary>Hint 2: Getting to Know Your Documents</summary>

Run `db.<collection name>.findOne()` to return a random
document in the collection. This will allow you to look
at the object returned and see how its fields and values
are structured. Once you know this structure, creating
your query will be easier.
</details>

<details>

<summary>Solution</summary>

1. After connecting with my cluster, I always run
the following command to remind myself of which
databases I have to work with:
``` 
show dbs
```
2. Then, run this command to access the sample_training
database:
``` 
use sample_training
```
3. Now that you are inside your database, this is handy
command to know that shows the collections in the database
you're currently using:
```
show collections
```
4. Finally, execute this command to return all documents
with a field named "state" that has the value "AL":
``` 
db.zips.find( {"state" : "AL"} )
```

### More Info

---

The `find()` command allows us to create queries, just like
the ones we saw in the previous two MongoDB problem sets. 
We can use the techniques we learned in the previous problem
sets by giving a query as an argument to the `find()` function.

For instance, in Problem Set 1 Problem #2, we found all documents
related to the state of texas by typing in `{ "state" : "TX" }` in
the search bar of the Data Explorer. We can run
`db.zips.find( {"state" : "TX"} )` in our shell to receive the exact same
output.

We can also use the operators we learned in Problem Set #2. For instance,
in Problem #3, we used the "$expr" operator and the "$eq" operator,
as well as "$" to access field values like this:

`{ "$expr" : { "$eq" : [ "$start station name", "$end station name" ] }}`

We can make the exact same query from the command line like this:
`db.trips.find( { "$expr" : { "$eq" : [ "$start station name", "$end station name" ] }} )`

Hopefully now you can see that the work we did in Problem Sets #1 and #2
directly translate into our work in the MongoDB shell.
</details> 

## Problem 2: Insert Documents
It looks like this database is old and doesn't reflect
Facebook's rebrand. Let's help them out by
inserting a new document into the company collection:
```
{
  name: 'Meta',
  permalink: 'meta',
  crunchbase_url: 'https://www.crunchbase.com/organization/facebook',
  homepage_url: 'http://meta.com',
  blog_url: 'http://meta.com',
  blog_feed_url: 'http://meta.com',
  twitter_username: 'None lol',
  category_code: 'world domination',
  number_of_employees: "Too many",
  tag_list: 'metaverse, corporate greed, surveillance, mind control, advertising, social networks',
  email_address: 'zuck@farmersonly.com',
  description: 'Controlling reality itself'
}
```

<details>
<summary>Solution</summary>

You should use this general format to insert
one new document into a collection: 

`db.<collection name>.insertOne()`
Your new document (curly braces must be included) will go inside the
parentheses of `insertOne()`. `insertMany()` is the command you
will use to insert many documents at once.
</details>


## Problem 3: Update Your Document using "$set"
Update the document you created in Problem 2 to include
a new field called "founding_location" with a value of
"Zuck's dirty dorm room".

<details>
<summary>Hint: Syntax</summary>

You will have to use the `updateOne()` command here. The
command takes two arguments, a search query and an action
to perform (this part needs an operator like 
"$set" or "$inc" to do anything useful). Here's the outline: 

`db.<collection name>.updateOne( {<search query>}, {<action to perform>} )`
</details>

<details>
<summary>Solution</summary>

Using the MongoDB update functions follows this general form:

`db.<collection name>.updateOne( {<search query>}, {<action to perform>} )`

I decided to search the collection with the document's
Twitter username, although you can use any field that you wish.
This is the command I wrote to update the document:
```
db.companies.updateOne( {"twitter_username" : "None lol"}, 
{ "$set" : { "founding_location" : "Zuck's dirty dorm room" } } )
```

Then, you should probably use find() to verify that your 
document was successfully updated:
```
db.companies.find({ "twitter_username" : "None lol" } )
```

### More Info

---

`updateOne()` and `updateMany()` are used to update existing
documents. In this exercise, we saw how these commands can 
create a new field in a document and set its value. However,
if the field already exists in the document, its value is
updated to the new value you provide to the operator.

</details>


## Problem 4: Delete Your Document
Delete the document you just created and updated in Problem #2
and Problem #3.

<details>
<summary>Solution</summary>

The MongoDB shell commands that allow us to delete 
documents are `deleteOne()` and `deleteMany()`. Since we
are only wishing to delete one document, we can use
`deleteOne()`. However, commands like `insertOne`,
`deleteOne()`, and `updateOne()` are dangerous because
they will delete one random matching element even if
multiple elements are found by the query.

However, we can be sure that we are deleting the right
document (and thus safely using `deleteOne()`) by querying
with the document's unique "_id" value. The unique id
of the document I created was "61e830a94758c56554fe96ec",
so the following command lets me delete the correct document:

```
db.companies.deleteOne({ "_id" : ObjectId("61e830a94758c56554fe96ec") })
```
</details>

## Problem 5: Drop a Collection
Erase the neighborhoods collection 
and all its documents from the sample_restaurants database.

<details>
<summary>Solution</summary>

1. Run `use sample_restaurants` to switch into the correct
database for this problem.
2. Run `show collections` to see which collections are
in the database.
3. Use `db.neighborhoods.drop()` to drop the neighborhoods collection 
from the database. This deletes all of its documents and removes the
collection too, so be very careful with this command.
4. Run `show collections` again to verify that you successfully
dropped the neighborhoods collection.
</details>

## Problem 6: Projection
We use projection to limit the fields contained in the documents
we receive as output from our queries.

1. Use projection to show the population (and only the population,
   do not include the _id field) of every zip code in Alaska.
2. Use projection to show the destination airport and the
   number of stops (you can
   show the _id field) of all
   documents in the routes collection with a source airport of
   Amarillo (AMA)
3. Use projection to show all documents in the companies
   collection with founding dates after 2010, without showing their
   company names.

<details>
<summary>Hint: Syntax</summary>

You will put your projection inside the parentheses of the
find() like this: `find({<query>}, {<projection>})`. Projection
works by labeling fields either 1 (include) or 0 (exclude).
You must use either 1 OR 0 in a projection, with the exception
that the "_id" field can be specified as 1 or 0 in any projection.
</details>

<details>
<summary>Solutions</summary>

1. ```db.zips.find({ "state" : "AL"}, {"pop" : 1, "_id" : 0})```
2. ```db.routes.find({"src_airport" : "AMA"}, {"dst_airport" : 1, "stops": 1})```
3. ```db.companies.find({"founded_year" : {"$gt" : 2005}}, {"name" : 0})```
</details>

## Problem 7: Prettier Output
Write a query to find out if there are any lucky students in the
grades collection of the sample_training database that have 
the same student_id as their class_id. Make your output pretty!
Every field and value pair in your query's output should be on a new line.

<details>
<summary>Hint: Operators To Use</summary>

Since you are comparing the values at two different 
fields, you will need to use the "$expr" operator.
Look back at Problem Set #2 for a refresher on 
how to use this operator.
</details>

<details>
<summary>Solution</summary>

This is the command to run:
```
db.grades.find({ "$expr" : {"$eq" : ["$student_id", "$class_id"]} }).pretty()
```
</details>

## Problem 8: Count Your Results
How many zip codes are there in the state of Texas? Use
the zips collection to find out.

<details>
<summary>Solution</summary>

In order to count the results of a query, use `count()`.
The following command returns the number of zip codes in Texas:
```
db.zips.find( {"state" : "TX"} ).count()
```
</details>

## Problem 9: Sorting Your Output
1. Return every document in the zips collection
sorted from lowest population to highest population. If two zip
codes have the same population, they should appear in alphabetical
order.
2. Return the documents in the inspections collection that
were inspected in the month of October
sorted by their business names in reverse alphabetical order.


<details>
<summary>Hint 1: Syntax</summary>

The command you will use here is `sort()`. Inside the parentheses,
you will pass in the fields you want to sort by separated
by commas, as well as
an indicator of if you want to sort in ascending or descending
order.
</details>

<details>
<summary>Hint 2: Ascending or Descending Order</summary>

Inside the parentheses, of `sort()`, you indicate that you want
to sort by ascending or descending order by providing a 1 or a -1,
respectively. For example, the following code sorts by a field
named count and returns documents in increasing order:

``` 
sort({"count" : 1})
```
</details>

<details>
<summary>Hint 3: October</summary>

The "date" field in the inspections collection
contains the month, day,
and year all in one string. You will need to use
the '$regex' operator to look inside this string
and pull out the month.

</details>

<details>
<summary>Solution</summary>

1. ```db.zips.find().sort({ "pop" : 1, "state": 1 })```
2. ```db.inspections.find({ "date" : { "$regex" : "Oct" }} ).sort( {"business_name" : -1} )```

Check out the hints above for more information on
the syntax shown here. 
</details>


## Problem 10: Limit the Number of Results
Find the one trip in the trips collection that was 
the longest by trip duration.

<details>
<summary>Solution</summary>

The `limit()` function takes in only one argument,
the maximum number of documents to return from the query.
Thus, sorting on trip duration in descending order
and returning just one value gives us the document
with the longest trip duration.
```
db.trips.find().sort( {"tripduration" : -1} ).limit(1)
```

### More Info

---

MongoDB will return the same output for both of the
below commands:

```
db.trips.find().sort( {"tripduration" : -1} ).limit(1)
```
and
```
db.trips.find().limit(1).sort( {"tripduration" : -1} )
```

Hopefully this strikes you as strange. In the second command,
we limit the result of `find()` to just one document, and then
we conduct our sort. Since `find()` returns a random document,
we might expect `limit(1)` to always return that same random
document, thus rendering our sorting worthless.

Since it rarely makes sense to limit your query
results before sorting them, MongoDB always sorts first, then limits
the result of the search.

Note that projection and `limit()` are very different things.
Projection modifies the fields shown in the output documents while
`limit()` determines the number of documents that are returned. They
can also be combined (and they frequently are) like this command
that only returns the "_id" and "tripduration" field values, sorts
to find the largest "tripduration" value, and then limits to only
return one document:
```
db.trips.find({},{"tripduration" : 1}).sort( {"tripduration" : -1} ).limit(1)
```

</details>

## Problem 11 (Challenge): Backup Your Data
First, close your connection with your cluster. Then,
make a backup of the data in the zips collection of the
sample_training database. Export the collection in JSON format
from the cluster to your computer and store the collection in a 
new file named "zipcodes.json".

<details>
<summary>Hint 1: Close Your Connection with the Cluster</summary>

To do this, run `quit()`. This command exits the current
MongoDB shell session.
</details>

<details>
<summary>Hint 2: Mongo's Export Shell Command</summary>

To export your data from your cluster to your computer in
JSON format, use the `mongoexport` command.
</details>

<details>
<summary>Hint 3: Mongo's Export Command Flags </summary>

The `mongoexport` command needs two flags to operate properly:
uri (`--uri`) and collection (`--collection`). Finally, a third
optional flag, out (`--out`), allows you to name the output file
that will end up on your computer. Without the out flag, 
MongoDB will automatically name the resulting file the same name
as the collection.
</details>

<details>
<summary>Hint 4: Flag Values</summary>

Here are some example values for what to put in your `--uri`,
`--collection`, and `--out` flags: 

1. The uri flag should follow this format:
```
--uri="mongodb+srv://<your username>:<your password>@<your cluster>.mongodb.net/<database name>"
```
2. The collection flag does not need to be a string, it can
be specified like this:
```
--collection=<your collection name>
```
3. The out flag specifies the file name of the file that the exported data
will reside in like this:
```
--out=<yourFileName.json>
```
</details>

<details>
<summary>Solution</summary>

Keep in mind that I have substituted my own
username and password into this command. Please reference
Hint 4 for advice about how to format your flags. The uri
flag value should follow a similar format to the `mongosh` command you ran to 
connect to your cluster originally.

The whole command should look something like this:
``` 
mongoexport --uri mongodb+srv://CWilson1901:zC7eJKdG.BqSdb%21@cluster0.guijn.mongodb.net/sample_training --collection zips --out zipcodes.json
```

For extra guidance, you can look at MongoDB's "Cmd Line Tools"
tab in your Cluster. A similar concept applies to importing data
from your computer to your databases.
</details>
