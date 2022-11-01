class Organization {
    constructor(name, url, roles) {
        this.name = name
        this.url = url
        this.roles = roles
    }
}

class Role {
    constructor(what, when, description) {
        this.what = what
        this.when = when
        this.description = description
    }
}

export { Organization, Role }