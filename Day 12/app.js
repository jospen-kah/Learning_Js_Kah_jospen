
// //Note: public_only and private_only cant be sent at same time

// const blog =async()=>{
//    const getData= await fetch("https://notpadd.vercel.app/api/public",{
//    headers:{
//     USER_KEY:'dXNlcl8ybVpCMDZKQzRhc2hhNHlVeW14MjN2QjVXWjI',
//     USER_SECRET:'OGVjN2QxNGEtNWU4Zi00ODUxLWE4MDMtYzgwOWRlNzI5NmY5',
//     public_only:"true",
//    }
//    })
   
// }
// const displayPosts = (data) => {
//     const postContainer = document.getElementById('post-list'); // Ensure you have a container for displaying posts
//     postContainer.innerHTML = '';
  
//     // Loop through each post and display
//     data.forEach(post => {
//       const postElement = document.createElement('div');
//       postElement.className = 'post';
//       postElement.innerHTML = `
//         <h3>${post.title}</h3>
//         <p>${post.content}</p>
//       `;
//       postContainer.appendChild(postElement);
//     });
//   };
  
//   // Call the blog function to fetch and display data
//   blog();

const blog = async () => {
    try {
      const response = await fetch("https://notpadd.vercel.app/api/public", {
        method: "GET",
        headers: {
            USER_KEY:'dXNlcl8ybVpCMDZKQzRhc2hhNHlVeW14MjN2QjVXWjI',
            USER_SECRET:'OGVjN2QxNGEtNWU4Zi00ODUxLWE4MDMtYzgwOWRlNzI5NmY5',
            public_only:"true",
         
        }
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      displayPosts(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };
  
  const displayPosts = (data) => {
    const postContainer = document.getElementById('post-list');
    postContainer.innerHTML = '';
  
    data.forEach(post => {
      const postElement = document.createElement('div');
      postElement.className = 'post';
      postElement.innerHTML = `
        <h3>${post.title}</h3>

        <p>${post.content}</p>
      `;
      postContainer.appendChild(postElement);
    });
  };
  
  blog();
  