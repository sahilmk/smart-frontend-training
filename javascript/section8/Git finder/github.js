class Github {
    constructor() {
        this.client_id = '4b325528694f20a80806';
        this.client_secrets = '77e56d4f32a2b349fe3bdfc5d69ed7c20f0b8594';
    }

    async finduser(username) {
        const userresponse = await fetch(`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secrets=${this.client_secrets}`);

        // const userresponse = await fetch(`https://api.github.com/users/${username}`);

        const reporesponse = await fetch(`https://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secrets=${this.client_secrets}`);

        const userdata = await userresponse.json();
        const userrepo = await reporesponse.json();
        return { userdata, userrepo }
    }
}