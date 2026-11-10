import express from "express";

const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/status", (req, res) => {
    res
        .status(200)
        .json(
            {
                success: true,
                message: "Server is running"
            }
        )
})

app.get("/greet{/:name}", (req, res) => {
    const { name } = req.params;
    const { loud } = req.query;

    const greeting = `Hallo, ${name ?? "Welt"}`;
    res
        .status(200)
        .json(
            {
                success: true,
                message: loud === "true" 
                    ? (greeting.toUpperCase() + "!") 
                    : greeting
            }
        )
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));