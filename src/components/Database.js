import Datastore from 'nedb';
import path from 'path';

const bookDB = new Datastore({
    autoload: true,
    filename: path.join('./books.db')
  });
  
export default bookDB;