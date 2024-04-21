# Getting Started with MongoDB on Ubuntu

MongoDB is a popular open-source NoSQL database that provides high performance, high availability, and easy scalability.
It stores data in flexible, JSON-like documents, making it suitable for a wide range of applications. This guide will
walk you through the basics of installing MongoDB on Ubuntu and using the `mongosh` command-line interface.

## Installation

### MongoDB Community Server

- MongoDB is available in the default Ubuntu repository. You can install it using `apt`.

  ```shell
  sudo apt update
  sudo apt install mongodb
  ```

- After installation, MongoDB will start automatically. You can verify the status using:

  ```shell
  sudo systemctl status mongod
  ```

- If you receive an error similar to `Failed to start mongod.service: Unit mongod.service not found`, run the following
  command first:

  ```shell
  sudo systemctl daemon-reload
  ```

## Interacting with MongoDB

### 1. MongoDB Shell (mongo)

MongoDB provides a shell interface called `mongo` for interacting with databases.

- Open a terminal.
- Run the `mongo` command to start the MongoDB shell.
- You can now execute various commands to manage databases, collections, documents, etc.

### 2. MongoDB Shell (mongosh)

Starting with MongoDB 5.0, a new, modernized shell called `mongosh` is available.

- Open a terminal.
- Run the `mongosh` command to start the MongoDB shell.
- You can now execute various commands to manage databases, collections, documents, etc.

### Basic Operations

#### Show Databases

To view the list of databases, you can use the `show dbs` command in the MongoDB shell:

```shell
show dbs
```

#### Show Collections

To view the list of collections in the current database, you can use the `show collections` command in the MongoDB
shell:

```shell
show collections
```

#### Creating a Database

To create a new database, you can use the `use` command in the MongoDB shell:

```shell
use mydatabase
```

#### Creating a Collection

Collections are created implicitly when you insert documents into them. To explicitly create a collection, you can use
the `db.createCollection()` method in the shell:

```shell
db.createCollection("mycollection")
```

#### Inserting Documents

To insert documents into a collection, you can use the `insertOne()` or `insertMany()` methods:

```shell
db.mycollection.insertOne({ name: "John", age: 30 })
```

#### Querying Documents

To retrieve documents from a collection, you can use the `find()` method:

```shell
db.mycollection.find()
```

#### Updating Documents

To update documents in a collection, you can use the `updateOne()` or `updateMany()` methods:

```shell
db.mycollection.updateOne({ name: "John" }, { $set: { age: 35 } })
```

#### Deleting Documents

To delete documents from a collection, you can use the `deleteOne()` or `deleteMany()` methods:

```shell
db.mycollection.deleteOne({ name: "John" })
```

### Additional Operations

#### Start MongoDB

You can start the MongoDB service using the following command:

```shell
sudo systemctl start mongod
```

#### Verify MongoDB Status

To verify that MongoDB has started successfully, use:

```shell
sudo systemctl status mongod
```

#### Enable MongoDB to Start on Reboot

Ensure MongoDB starts following a system reboot by issuing:

```shell
sudo systemctl enable mongod
```

#### Stop MongoDB

Stop the MongoDB service as needed using:

```shell
sudo systemctl stop mongod
```

#### Restart MongoDB

Restart the MongoDB service with:

```shell
sudo systemctl restart mongod
```

#### Monitoring MongoDB

Monitor the MongoDB process for errors or important messages by watching the output in the `/var/log/mongodb/mongod.log`
file.

## Conclusion

This guide covers the basics of getting started with MongoDB on Ubuntu, including installation using `apt`, starting the
MongoDB server, and using the `mongo` and `mongosh` shells for interacting with MongoDB databases. Explore further
documentation and tutorials to dive deeper into MongoDB's features and capabilities.