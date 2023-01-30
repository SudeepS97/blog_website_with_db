const mongodb = require("mongodb")

exports.listDatabases = async function (client) {
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

exports.createPost = async function (client, db, collection, newPost) {
    const result = await client.db(db).collection(collection).insertOne(newPost);
    console.log(`New blog post created with the following id: ${result.insertedId}`);
};

exports.findAllPosts = async function (client, db, collection) {
    let result = await client.db(db).collection(collection).find().toArray();
    return result
};

exports.deleteTaskByID = async function (client, db, collection, id) {
    const result = await client.db(db).collection(collection).deleteOne({ _id: new mongodb.ObjectID(id) });
    console.log(`${result.deletedCount} document(s) was/were deleted.`);
}