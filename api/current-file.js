import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "current.txt");

  if (req.method === "POST") {
    const { file } = req.body;
    fs.writeFileSync(filePath, file);
    return res.status(200).json({ ok: true });
  }

  if (fs.existsSync(filePath)) {
    const name = fs.readFileSync(filePath, "utf8");
    return res.status(200).send(name);
  }

  return res.status(200).send("none_done.png");
}
