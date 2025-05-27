const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Countries API",
      version: "1.0.0",
      description: "API documentation for the Countries application",
    },
    servers: [
      {
        url: "http://localhost:4000",
        description: "Development server",
      },
    ],
  },
  apis: ["./routes/*.js", "./docs/*.js"],
};

const specs = swaggerJsdoc(options);

module.exports = specs;
