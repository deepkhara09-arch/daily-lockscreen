import fs from "fs";
import path from "path";

export default function handler(req, res) {
  try {
    const statePath = path.join(process.cwd(), "state.json");
    const state = JSON.parse(fs.readFileSync(statePath, "utf8"));

    const done = [];

    if (state.workout) done.push("workout");
    if (state.study) done.push("study");
    if (state.reading) done.push("reading");
    if (state.test) done.push("test");
    if (state.mock) done.push("mock_interview");

    let file = "none_done.png";

    if (done.length === 1) file = `${done[0]}_done.png`;
    if (done.length > 1 && done.length < 5)
      file = `${done.join("_")}_done.png`;
    if (done.length === 5) file = "all_done.png";

    const imagePath = path.join(process.cwd(), "wallpapers", file);
    const image = fs.readFileSync(imagePath);

    res.setHeader("Content-Type", "image/png");
    res.status(200).send(image);

  } catch (err) {
    res.status(500).send("Error generating wallpaper");
  }
}
