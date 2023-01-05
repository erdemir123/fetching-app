import Styles from "./style.module.css"
async function getPhotos(){
  let res =await fetch("https://jsonplaceholder.typicode.com/photos")
  return res.json()
}




export default async function Home() {
  let photos = await getPhotos()
  
  return <div className={Styles.container}>
  {photos.map((item)=>(
    <div className={Styles.imgContainer}>
      <img src={item.url} alt="" className={Styles.img} />
      <p className={Styles.title}>{item.title}</p>
    </div>
    
  
  ))}
  </div>;
}
