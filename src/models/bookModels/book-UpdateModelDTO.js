class BookUpdateModelDTO {
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.author = data.author;
    this.published_date = data.published_date;
    this.isbn = data.isbn
  }
}
module.exports = BookUpdateModelDTO;