//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        console.log('unable to connect to mongodb server');
    } 
    console.log('connected to mongodb server');
    
    // deleteMany
//    db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
//        console.log(result);
//    });
    
    // deleteOne
//    db.collection('Todos').deleteOne({text:'eat lunch'}).then((result) => {
//        console.log(result);
//    })

    // findOneAndDelete
//    db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
//        console.log(result);
//    })
//    
    db.collection('Users').deleteMany({name:'jj'});
    
    db.collection('Users').findOneAndDelete({_id: new ObjectID('59caad206a3d134d548a799e')}).then((results) => {
        consolo.log(JSON.stringify(results, undefined, 2));
    });
    
    //db.close();
});