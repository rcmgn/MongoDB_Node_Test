let client = require('mongodb').MongoClient;
const connectionString = "mongodb://localhost:27017";

(async () => {
	let connection = await client.connect(connectionString, {useNewUrlParser: true});
	let db = connection.db('usersdb');

	try{
		let user = {name: 'Ivan', age: 25};
		const result = await db.collection('users').insertOne(user)
		console.log(JSON.stringify(result));
	} finally {
		connection.close();
	}

}) ().catch(error => console.log(error));
