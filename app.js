// How to fetech API
//need to connect with github server and fetech that data by using window.fetch()
window
  .fetch('https://api.github.com/users')
  .then(data => {
    console.log(data); //o/p-buffer(not iterable)
    //res buffer into json
    data
      .json()
      .then(info => {
        // console.log(info);
        let output = [];
        for (let user of info) {
          //   console.log(user);
          output += `
                <section>
                <article>
                <img src=${user.avatar_url}/>
                <h1>${user.login}</h1>
                <p><a href=${user.html_url} target="_blank">Check Profile</a></p>
                </article>
                </section>
                `;
        }
        document.getElementById('template').innerHTML = output;
      })
      .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
