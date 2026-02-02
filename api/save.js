import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "state.json");

  fs.writeFileSync(
    filePath,
    JSON.stringify(req.body, null, 2)
  );

  res.status(200).json({ success: true });
}
