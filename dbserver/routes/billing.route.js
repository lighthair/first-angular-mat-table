const express = require('express');
const billingRoutes = express.Router();
const MongoClient = require("mongodb");
const ObjectId = require('mongodb').ObjectID;
const config = require("../config/mongocfg.json");

const connectMongo = async () => {
    return MongoClient.connect(config.url, { useNewUrlParser: true, useUnifiedTopology: true })
        .catch(err => {
            throw new Error("billing.route: Connect to mongo failed!" + err);
        });
}

const getCollection = (client) => {
    const db = client.db(config.db);
    return db.collection(config.collection);
}

const returnError = (err, res) => {
    res.status(500).json(`${JSON.stringify(err)}`);
    console.error(err);
    return res;
}

// Defined store route
billingRoutes.route('/').post(async function (req, res) {
    console.debug("billingRoutes /post");
    const client = await connectMongo();
    try {
        let collection = getCollection(client);
        let result = await collection.insertOne(req.body);
        res.status(200).json({ 'add': `${JSON.stringify(result)}` });
        return res;
    } catch (err) {
        return returnError(err, res);
    } finally {
        client.close();
    }
});



// Defined get data(index or listing) route
billingRoutes.route('/').get(async function (req, res) {
    console.debug("billingRoutes /get");
    const client = await connectMongo();
    try {
        let collection = getCollection(client);
        let result = await collection.find({}).toArray();
        res.status(200).json(result);
        return res;
    } catch (err) {
        return returnError(err, res);
    } finally {
        client.close();
    }
});



// Defined delete | remove | destroy route
billingRoutes.route('/:id').delete(async function (req, res) {
    console.debug("billingRoutes /delete");
    const client = await connectMongo();
    try {
        let collection = getCollection(client);
        let result = await collection.deleteOne({ _id: ObjectId(req.params.id) });
        if (result.deletedCount > 0) {
            res.status(200).json(`${JSON.stringify(result)}`);
        } else {
            res.status(404).json(`${JSON.stringify(result)}`);
        }
        return res;
    } catch (err) {
        return returnError(err, res);
    } finally {
        client.close();
    }

});

module.exports = billingRoutes;