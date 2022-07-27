class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }
    showdata(user) {
        this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
    }

    showalert(message, classname) {
        this.removealeart();
        const div = document.createElement('div');

        div.className = classname;

        div.innerText = message;

        const container = document.querySelector('.searchContainer');
        const input = document.querySelector('.search');

        container.insertBefore(div, input);

        setTimeout(() => {
            this.removealeart();
        }, 3000)
    }

    removealeart() {
        const alert = document.querySelector('.alert');
        if (alert) {
            alert.remove();
        }
    }

    showrepo(repo) {
        var html = '';
        repo.forEach(i => {
            html += `
            <div class="card card-body mb-2">
            <div class="row">
              <div class="col-md-6">
                <a href="${i.html_url}" target="_blank">${i.name}</a>
              </div>
              <div class="col-md-6">
              <span class="badge badge-primary">Stars: ${i.stargazers_count}</span>
              <span class="badge badge-secondary">Watchers: ${i.watchers_count}</span>
              <span class="badge badge-success">Forks: ${i.forms_count}</span>
              </div>
            </div>
          </div>
            `
        });

        document.getElementById('repos').innerHTML = html;
    }
}