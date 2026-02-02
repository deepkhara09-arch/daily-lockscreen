import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { file } = req.body;

  if (!file) {
    return res.status(400).json({ error: "Missing file value" });
  }

  const filePath = path.join(process.cwd(), "current.txt");

  fs.writeFileSync(filePath, file);

  return res.status(200).json({ saved: file });
}
