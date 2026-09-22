export default async function handler(req,res){
 return res.json({count: 2, items: [
  {titulo: "MUFON - Nuevo caso", desc: "Reporte triangular", link: "https://mufon.com"},
  {titulo: "NUFORC - Avistamiento", desc: "Luces en Querétaro", link: "https://nuforc.org"}
 ]})
}
