import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Only POST allowed");
  }

  try {
    const statePath = path.join(process.cwd(), "state.json");
    const body = req.body;

    fs.writeFileSync(statePath, JSON.stringify(body, null, 2));

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to save" });
  }
}
