class BookRepository {
    constructor(db) {
      this.db = db;
    }
  
    insert(book) {
      return new Promise((resolve, reject) => {
        this.db.insert(book, (err, library) => {
          if(err)
            reject(err)
          else
            resolve()
        })
      });
    }
  
    update(book) {
      return new Promise((resolve, reject) => {
        this.db.update({_id: book._id}, book, { upsert: true }, (err, numReplaced) => {
          if(err)
            reject(err)
          else
            resolve(numReplaced)
        })
      });
    }
  
    findAll() {
      return new Promise((resolve, reject) => {
        this.db.find(
          {}, 
          (err, library) => {
            if(err) 
              reject(err)
            else {
              resolve(library)
            }
          }
        )
      });
    }
  }
  
export default BookRepository;