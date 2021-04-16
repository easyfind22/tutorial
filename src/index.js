import React from 'react';
import ReactDom from 'react-dom';
import './index.css'

const books = [
{
  id:1,
 img: 'https://images-eu.ssl-images-amazon.com/images/I/417-p2FWoJL._AC_SX368_.jpg',
 title:'I love you to the moon and back',
 author: 'Amelia Hepworth'
},
{
  id:2,
  img: 'https://images-na.ssl-images-amazon.com/images/I/51wlUnNtsHL._AC_SX368_.jpg',
  title:'Our class is a Family',
  author: 'Shannon Olsen'
 },
 {
  id:3,
  img: 'https://images-na.ssl-images-amazon.com/images/I/81-ivK3sKGL.__BG0,0,0,0_FMpng_AC_UL210_SR210,210_.jpg',
  title:'Win',
  author: 'Brit Bennet'
 },
];

function BookList() {
  return (
     <section className="booklist">
     {books.map((book) => {
       const {img, title, author } = book;
      return  <Book key={book.id} {...book}></Book>;
        
     })}</section>
  );
}

const Book = ({img, title, author }) => {
 
//attribute,eventHandler
//onClick, onMouseOver
const clickHandler = () => {
     alert('hello world');
};
  return <article className="book">
    <img src={img}></img>
    <h1  onClick={clickHandler}>{title}</h1>
    <h4>{author}</h4>
    <button type="button" onClick={clickHandler}></button>
  </article>;

};

ReactDom.render(<BookList/>, document.getElementById('root'));