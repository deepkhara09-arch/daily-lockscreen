import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "state.json");

  const emptyState = {
    workout:false,
    study:false,
    reading:false,
    test:false,
    mock:false
  };

  fs.writeFileSync(
    filePath,
    JSON.stringify(emptyState, null, 2)
  );

  res.status(200).json({ reset:true });
}
