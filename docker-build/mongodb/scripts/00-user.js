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
            },
            {
                role: 'dbOwner',
                db: 'rfmDb'
            } ]
} );

printjson( db.getUsers() );