//CRUD
//Create, Read, Update, Delete
const miniTwitter = {
    usuarios: [
        {
            username: 'mien',
            
        }
    ],
    posts: [
        {
            owner: 'mien',
            content: 'my first post'
        }
    ]
}

function createPost (dados){
    miniTwitter.posts.push({
        owner: dados.owner,
        content: dados.content
    })
}

console.log(miniTwitter.posts)
