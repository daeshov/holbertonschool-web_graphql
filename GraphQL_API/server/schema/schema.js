const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = require('graphql');

// Define a TaskType
const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: {
    id: { type: GraphQLString },
    title: { type: GraphQLString },
    weight: { type: GraphQLInt },
    description: { type: GraphQLString },
  },
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // Define queries here
  },
});

// Define the GraphQL schema
module.exports = new GraphQLSchema({
  query: RootQuery,
});
