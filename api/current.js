import fs from "fs";
import path from "path";

export default function handler(req,res){
  const file = path.join(process.cwd(),"state.json");
  const state = JSON.parse(fs.readFileSync(file,"utf8"));

  const order=["workout","study","reading","test","mock"];
  const done = order.filter(t=>state[t]);

  let name = done.length===0
    ? "none_done.png"
    : done.length===5
    ? "all_done.png"
    : done.join("_")+"_done.png";

  res.redirect(`/wallpapers/${name}`);
}
