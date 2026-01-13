fetch("../server/data/newbuild.json")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Get the first user from the users array (or find specific user)
    const user = data.users[0];
    const userInfoDiv = document.getElementById("userInfo");
    userInfoDiv.innerHTML = `
      <h1 class="user-info-username">${user.username}</h1>
      <h3 class="user-info-email">${user.contact_info.email}</h3>
      <h4 class="user-info-membership">${user.rank}</h4>
      <p class="user-info-bio">${user.bio}</p>
      <h2 class="user-info-join-date">Joined: ${user.join_date}</h2>
    `;
  })
  .catch(error => {
    if (typeof ClientErrorHandler !== 'undefined') {
      ClientErrorHandler(error);
    } else {
      console.error('Error:', error);
    }
  });

