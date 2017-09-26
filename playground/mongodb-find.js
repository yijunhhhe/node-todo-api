//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        console.log('unable to connect to mongodb server');
    } 
    console.log('connected to mongodb server');
    
//    db.collection('Todos').find({
//        _id: new ObjectID("59caa94440a3d54c986ad932")
//    }).toArray().then((docs) => {
//        console.log('todo');
//        console.log(JSON.stringify(docs, undefined, 2));
//    }, (err) => {
//        console.log('unable to fetch todos', err);
//    });
    
      db.collection('Users').find({name:'jj'}).count().then((count) => {
        console.log(`todo ${count}`);
        
    }, (err) => {
        console.log('unable to fetch todos', err);
    });
    
    //db.close();
});