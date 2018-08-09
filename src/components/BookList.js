import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    img: {
      height: 128,
    },
    chip: {
        margin: theme.spacing.unit,
    },
  });

const BookList = ({list, searchTerm, appFolder, onDismiss, classes}) => 
  <div>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell key="preview">プレビュー</TableCell>
                <TableCell key="">タイトル</TableCell>
                <TableCell key="">著者</TableCell>
                <TableCell key="">タグ</TableCell>
                <TableCell key="">レビュー</TableCell>
                <TableCell key="">出版社</TableCell>
                <TableCell key="">出版年月</TableCell>
                <TableCell key=""></TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
        {list.filter(isSearched(searchTerm)).map(book =>
            <TableRow key={book._id}>
                <TableCell>
                    <img src={"file://" + appFolder + "/bookcovers/" + book._id + ".jpg"} alt="preview" className={classes.img}/>
                </TableCell>
                <TableCell>
                    <Button 
                    href={book.uri} 
                    className={classes.button}
                    >{book.title}</Button>
                </TableCell>
                <TableCell>
                {book.authors.join(',')}
                </TableCell>
                <TableCell>
                {(Array.isArray(book.tags)) ? 
                    book.tags.map(tag => <Chip className={classes.chip} label={tag} /> ) : ''
                }
                </TableCell>
                <TableCell>
                {'★'.repeat(~~(book.rating))}{'☆'.repeat(5 - ~~(book.rating))}
                </TableCell>
                <TableCell>
                {book.publisher}
                </TableCell>
                <TableCell>
                {book.publishDate}
                </TableCell>
                <TableCell>
                    <Button variant="contained" color="secondary" onClick = { () => onDismiss(book._id) } className={classes.button}>
                    Dismiss
                    </Button>
                </TableCell>
            </TableRow>
        )}
        </TableBody>
    </Table>
  </div>

const isSearched = searchTerm => item => 
    searchTerm != undefined && item.title.toLowerCase().includes(searchTerm.toLowerCase());

const largeColumn = {
    width: '40%',
  };
  
  const midColumn = {
    width: '30%',
  };
  
  const smallColumn = {
    width: '10%',
  };
  
export default withStyles(styles)(BookList);