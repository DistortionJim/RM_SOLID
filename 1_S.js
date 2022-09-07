// Single responsibility Principle

class News {
  constructor(title, text) {
    this.title = title
    this.text = text
    this.modified = false
  }
  updateText(text) {
    this.text = text
    this.modified = true
  }
}

class NewsPrinter {
  constructor(news) {
    this.news = news
  }
  html() {
    return `
      <div class="news">
        <h1>${this.news.title}</h1>
        <p>${this.news.text}</p>
      </div>
    `
  }
  json() {
    return JSON.stringify({
      title: this.news.title,
      text: this.news.text,
      modified: this.news.modified
    }, null, 4)
  }
  xml() {
    return `
      <news>
        <title>${this.news.title}</title>
        <text>${this.news.text}</text>
      </news>
    `
  }
}

const Printer = new NewsPrinter(
  new News('Russia', 'a Terrorist State')
)

console.log(Printer.xml());
console.log(Printer.html());
console.log(Printer.json());