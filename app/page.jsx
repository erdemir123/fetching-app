async function getPhotos(){
  let res =await fetch("https://jsonplaceholder.typicode.com/photos")
  return res.json()
}




export default async function Home() {
  let photos = await getPhotos()
  
  return <div>sadık</div>;
}
