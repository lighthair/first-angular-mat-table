const express = require('express');
const billingRoutes = express.Router();
const MongoClient = require("mongodb");
const config = require("../config/mongocfg.json");

// Defined store route
billingRoutes.route('/').post(async function (req, res) {
    console.log("/post");
    const client = await MongoClient.connect(config.url, { useNewUrlParser: true })
        .catch(err => { console.log(err); });
    if (!client) {
        return;
    }
    try {
        const db = client.db(config.db);
        let collection = db.collection(config.collection);
        let result = await collection.insertOne(req.body.bill);

        res.status(200).json({ 'add': `${JSON.stringify(result)}` });
        console.log(res);
    } catch (err) {
        res.status(500).json(`${JSON.stringify(result)}`);
        console.log(err);
    } finally {
        client.close();
    }
});



// Defined get data(index or listing) route
billingRoutes.route('/').get(async function (req, res) {
    console.log("/get");
    const client = await MongoClient.connect(config.url, { useNewUrlParser: true, useUnifiedTopology: true })
        .catch(err => { console.log(err); });
    if (!client) {
        return;
    }
    try {
        const db = client.db(config.db);
        let collection = db.collection(config.collection);
        let result = await collection.find({}).toArray();
        res.status(200).json(result);
        return result;
    } catch (err) {
        res.status(500).json(`${JSON.stringify(result)}`);
        console.log(err);
    } finally {
        client.close();
    }
});



// Defined delete | remove | destroy route
billingRoutes.route('/:id').delete(async function (req, res) {
    console.log("/delete");
    const client = await MongoClient.connect(config.url, { useNewUrlParser: true, useUnifiedTopology: true })
        .catch(err => { console.log(err); });
    if (!client) {
        return;
    }
    try {
        const db = client.db(config.db);
        let collection = db.collection(config.collection);
        let result = await collection.deleteOne({ _id: req.params.id });
        res.status(200).json(`${JSON.stringify(result)}`);
        console.log(JSON.stringify(result));
        return res;
    } catch (err) {
        res.status(500).json(`${JSON.stringify(result)}`);
        console.log(err);
    } finally {
        client.close();
    }

});

module.exports = billingRoutes;