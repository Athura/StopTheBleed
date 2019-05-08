const express = require("express");
const connectDB = require("./config/database");

const app = express();
connectDB();

// New bodyparser middleware
app.use(express.json({
    extended: false
}));

app.use("/api/users", require("./routes/users"));
app.use("/api/class", require("./routes/class"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});