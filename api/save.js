import fs from "fs";
import path from "path";

export default function handler(req,res){
  const file = path.join(process.cwd(),"state.json");
  fs.writeFileSync(file, JSON.stringify(req.body,null,2));
  res.status(200).json({ok:true});
}
