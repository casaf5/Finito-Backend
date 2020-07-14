const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

// CONFIG
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  secret: 'dirbalakkk 123',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "public")));
} else {
  const corsOptions = {
    origin: ["http://127.0.0.1:8080", "http://localhost:8080"],
    credentials: true,
  };
  app.use(cors(corsOptions));
}

// ROUTES
const toyRoute = require("./api/toy/toy.route");
const authRoutes = require("./api/auth/auth.routes");
const userRoutes = require("./api/user/user.routes");
const reviewRoutes = require('./api/review/review.routes')
const connectSockets = require("./api/socket/socket.routes");

app.use("/api/toy", toyRoute);
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use('/api/review', reviewRoutes)
connectSockets(io);

// LOGGER
const logger = require("./services/logger.service");

//APP SETUP
const PORT = process.env.PORT || 3030;
http.listen(PORT, () => {
  logger.info("Running On PORT " + PORT);
});
