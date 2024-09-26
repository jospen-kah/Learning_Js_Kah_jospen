const blog = async () => {
  try {
    const response = await fetch("https://notpadd.vercel.app/api/public", {
      method: "GET",
      headers: {
        USER_KEY: 'dXNlcl8ybVpCMDZKQzRhc2hhNHlVeW14MjN2QjVXWjI',
        USER_SECRET:'Y2Q3MDE5ZGMtZmRhOC00ZWU5LTkxMTQtZWQ5M2E0NmM4Nzg3',
          // USER_KEY:'dXNlcl8ybVpCMDZKQzRhc2hhNHlVeW14MjN2QjVXWjI',
          // USER_SECRET:'OGVjN2QxNGEtNWU4Zi00ODUxLWE4MDMtYzgwOWRlNzI5NmY5',
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
      <img src="${post.image}" alt="${post.title}"> 
      <p>${post.description}</p>
    `;
    postContainer.appendChild(postElement);
  });
};

blog();
