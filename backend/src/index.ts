import express from "express";

const app = express();
app.get("/health", (_req, res) => res.json({ status: "ok" }));

const port = Number(process.env.PORT ?? 3001);
app.listen(port, () => console.log(`Whole Woman Global backend listening on ${port}`));
