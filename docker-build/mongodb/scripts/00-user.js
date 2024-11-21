//@ts-nocheck
db = connect( 'mongodb://root:mainpass@localhost:27017/admin' );

db.createUser(
    {
        user: 'app',
        pwd: 'app',
        roles: [
            {
                role: 'dbOwner',
                db: 'eventsDb'
            } ]
} );

printjson( db.getUsers() );