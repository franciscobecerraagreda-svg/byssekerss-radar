export default async function handler(req,res){
 return res.json({
  count: 3,
  items: [
   {titulo: "NASA - Anomaly Report", desc: "Nuevo reporte de fenómeno anómalo detectado", link: "https://www.nasa.gov"},
   {titulo: "DOD - UAP Update", desc: "Actualización Pentágono", link: "https://www.defense.gov"},
   {titulo: "FAA - Airspace", desc: "Restricción aérea inusual", link: "https://www.faa.gov"}
  ]
 })
}
