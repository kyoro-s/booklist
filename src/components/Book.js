class Book {
    constructor(
      title,
      authors = [],
      publisher = '',
      publishDate = '',
      tags = [],
      rating = 0,
      coverUri = '',
      archiveUri = '',
      sampleUris = [],
      ISBN = '',
      series = '',
      seriesIndex = 0
    ) {
      this.title = title;
      this.authors = authors;
      this.publisher = publisher;
      this.publishDate = publishDate;
      this.tags = tags;
      this.rating = rating;
      this.coverUri = coverUri;
      this.archiveUri = archiveUri;
      this.sampleUris = sampleUris;
      this.ISBN = ISBN;
      this.series = series;
      this.seriesIndex = seriesIndex;
    }
  }

  export default Book;