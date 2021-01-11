export default class SiteParser {

  constructor(sitemap) {
    this.sitemap = sitemap;
    this.baseURL = sitemap.config.apiUrl
    this.path = []
    this.pages = []
    this.endpoints = []
  }

  parseSite() {
    this.sitemap.children.forEach(page => {
      this.parse(page)
    })
  }

  parse(node) {
    if (node.slug !== "") {
      this.path.push(node.slug)
    }

    if ('resource' in node && (node.resource !== "")) {
      this.endpoints.push(node.resource)
    }

    if ('children' in node) {
      node.children.forEach(child => {
        this.parse(child)
      });
    }

    if (this.path.length == 0) { this.path = ["index"] }
    let pageObj = {
      path: [...this.path],
      page: node.title,
      apiResource: this.makeAPIURL()
    }

    this.pages.push(pageObj)
    this.path.pop()
    this.endpoints.pop()


  }

  makeAPIURL() {
    if (this.endpoints.length == 0) { this.endpoints = ["index"] }
    return [this.baseURL, ...this.endpoints].join("/")
  }

}
