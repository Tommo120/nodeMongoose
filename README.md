# nodeMongoose

Simple app that connects to a MongoDB database.
The database contains entries for bands.
Implements Yargs to allow simpler and more fool-proof command line integration.

## Commands

### Add
The add command takes 3 arguments:
Artist, Members and Genre.

The user may add multiple bands using one command by entering each argument multiple times, ensuring that the data is entered in the correct order.

### List
The list command simply returns a complete list of every entry on the database.

### Search
The search command allows the user to search the database by any of the 3 key fields; Artist, Members, or Genre. The command simply takes a single parameter which is the text to be searched for.

### Update
The update command allows the user to search for a band by their title. The next two parameters identify the key field which is to be updated, and the new data that is to be input into the specified field.

### Delete
The delete command removes all entries from the database with the matching artist name.