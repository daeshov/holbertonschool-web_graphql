const express = require('express');
const mongoose = require('mongoose');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');
const app = express();

mongoose.connect('mongodb+srv://daeshov:jtdt135101@cluster0.hgsnta2.mongodb.net/');
mongoose.connection.once('open', () =>
  console.log('connected to database')
);

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));
app.listen(4000, () => {
  console.log('now listening for request on port 4000');
});


