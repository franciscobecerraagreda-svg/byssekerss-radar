export default async function handler(req,res){
 return res.json({count: 2, items: [
  {titulo: "@elonmusk menciona UAP", desc: "Tendencia en X", link: "https://x.com"},
  {titulo: "Tendencia #UFOTwitter", desc: "Pico de menciones", link: "https://x.com"}
 ]})
}
