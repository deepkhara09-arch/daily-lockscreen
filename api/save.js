import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { file } = req.body;

  const filePath = path.join(process.cwd(), "current.txt");
  fs.writeFileSync(filePath, file);

  return res.status(200).json({ ok: true });
}
