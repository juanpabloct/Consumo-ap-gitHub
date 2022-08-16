export const conection=async(user:string="octocat")=>{
   const data=await  fetch(`https://api.github.com/users/${user}`).then(res=>res.json())
   return data
}
