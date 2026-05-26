import cors from "cors"
import express from "express"

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
    console.log("Server running at http://localhost:3000");
});