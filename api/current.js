export default function handler(req, res) {

  const ORDER = ["workout","study","reading","test","mock"]

  let q = req.query

  let done = []

  ORDER.forEach(t=>{
    if(q[t]==="1") done.push(t)
  })

  let filename = "none_done.png"

  if(done.length===1){
    filename = `${done[0]}_done.png`
  }
  else if(done.length>=5){
    filename = "all_done.png"
  }
  else if(done.length>1){
    filename = `${done.join("_")}_done.png`
  }

  res.redirect(`/wallpapers/${filename}`)
}
