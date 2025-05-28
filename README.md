# Countries Backend API

A robust RESTful API for countries data built with Node.js, Express, MongoDB, and Redis. Provides comprehensive country and region information with caching, documentation, and containerized deployment.

🌐 **Frontend Application:** [Countries Client](https://countries-client-sigma.vercel.app)

## 🚀 Tech Stack

- **Runtime:** [Node.js](https://nodejs.org/) - JavaScript runtime environment
- **Framework:** [Express.js](https://expressjs.com/) - Fast, unopinionated web framework
- **Language:** [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Database:** [MongoDB](https://www.mongodb.com/) - NoSQL document database
- **Caching:** [Redis](https://redis.io/) - In-memory data structure store
- **Documentation:** [Swagger](https://swagger.io/) - API documentation and testing
- **Containerization:** [Docker](https://www.docker.com/) - Container platform
- **Process Manager:** [Nodemon](https://nodemon.io/) - Development auto-restart

## 📁 Project Structure

```
├── api/                   # API entry point
│   └── index.js          # Main API router
├── config/               # Configuration files
│   ├── cors.js          # CORS configuration
│   ├── db.js            # MongoDB connection
│   ├── redis.js         # Redis configuration
│   └── swagger.js       # Swagger documentation setup
├── controllers/          # Request handlers
│   ├── country.js       # Country-related endpoints
│   └── region.js        # Region-related endpoints
├── data/                # Static data files
├── docker/              # Docker configuration
│   ├── docker-compose.yml # Docker services setup
│   └── Dockerfile       # Container definition
├── docs/                # API documentation
│   ├── countries.js     # Countries endpoint docs
│   └── regions.js       # Regions endpoint docs
├── middleware/          # Custom middleware
│   └── cache.js         # Redis caching middleware
├── models/              # Database models
│   ├── Country.js       # Country data model
│   └── Region.js        # Region data model
├── routes/              # API routes
│   ├── countries.js     # Countries routes
│   └── regions.js       # Regions routes
└── services/            # Business logic
    ├── country.js       # Country service layer
    └── region.js        # Region service layer
```

## 🎯 Features

- **RESTful API:** Clean, intuitive endpoints for countries and regions
- **MongoDB Integration:** Efficient document-based data storage
- **Redis Caching:** High-performance caching for improved response times
- **Swagger Documentation:** Interactive API documentation and testing interface
- **Docker Support:** Containerized deployment with Docker Compose
- **TypeScript:** Type-safe development with modern JavaScript features
- **CORS Configuration:** Cross-origin resource sharing support
- **Error Handling:** Comprehensive error handling and logging
- **Data Validation:** Input validation and sanitization
- **Scalable Architecture:** Modular design with separation of concerns

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- MongoDB (local or cloud instance)
- Redis (optional, for caching)
- Docker & Docker Compose (for containerized setup)

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/Mav-Ivan/Countries-BackEnd.git
cd Countries-BackEnd
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Create .env file
cp .env.example .env

# Configure your environment variables
MONGODB_URI=mongodb://localhost:27017/countries
REDIS_URL=redis://localhost:6379
PORT=4000
NODE_ENV=development
```

4. Start the development server:
```bash
npm start
```

### Docker Setup

1. Start all services with Docker Compose:
```bash
npm run docker:up
```

2. Stop all services:
```bash
npm run docker:down
```

The Docker setup includes:
- Node.js application container
- MongoDB database container
- Redis cache container
- Automatic service linking and networking

## 📱 Available Scripts

- `npm start` - Start development server with Nodemon
- `npm run lint` - Run ESLint for code quality
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run docker:up` - Start Docker containers
- `npm run docker:down` - Stop Docker containers

## 🔌 API Endpoints

### Countries
- `GET /api/countries` - Get all countries
- `GET /api/countries/:id` - Get specific country by ID

### Regions
- `GET /api/regions` - Get all regions

## 📚 API Documentation

Interactive Swagger documentation is available at:
- **Local:** `http://localhost:4000/api-docs`
- **Production:** `https://countries-back-end-five.vercel.app`

The documentation includes:
- Complete endpoint descriptions
- Request/response schemas
- Interactive testing interface
- Authentication requirements
- Example requests and responses

## 🔧 Configuration

### Environment Variables
```env
# Database
MONGODB_URI=mongodb://localhost:27017/countries
REDIS_URL=redis://localhost:6379

# Server
PORT=4000
NODE_ENV=development

# API
CACHE_DURATION=3600
```