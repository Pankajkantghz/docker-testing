import express from "express";
import { prisma } from "./lib/prisma.js";
const app = express();
app.use(express.json());
// GET all users
app.get("/", async (req, res) => {
    const data = await prisma.user.findMany();
    res.json({ data });
});
// CREATE user
app.post("/", async (req, res) => {
    const user = await prisma.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString(),
        },
    });
    res.json({ user });
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
