import React from 'react';

class App extends React.Component {

  searchFunction = (e) => {
    e.preventDefault();
    let text = document.getElementById('inputText').value;
    let searchTerm = document.getElementById('inputTerm').value;
    this.binarySearchSplit(text, searchTerm);
  }

  linearSearch = (text, searchTerm) => {

    let searchArray = text.split(' ');

    let index = 0;

    let count = 0;

    for (let i = 0; i < searchArray.length; i++) {
      if (searchArray[i] == searchTerm) {
        index = i;
      }

      count ++;
    }
  
    console.log(count, index, searchArray.length)
  }

  binarySearchSplit = (text, searchTerm) => {
    let searchArray = text.split(' ');

    let sortArray = searchArray.sort();

    /* console.log(sortArray, searchTerm); */

    this.binarySearch(sortArray, searchTerm);

  }

  binarySearch = (array, searchTerm, start, end) => {

    let term = parseInt(searchTerm);

    let start = start === undefined ? 0 : start;
    let end = end === undefined ? array.length : end;

    let count = 0;
    count ++;

    if (start > end) {
      return `Term not found. Searched ${count} times`;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    if (item == term) {
      return `Term found at ${index}. Took ${count} tries`;
    }
    else if (item < term) {
      return this.binarySearch(array, term, index + 1, end);
    }
    else if (item > term) {
      return this.binarySearch(array, term, start, index - 1);
    }
  }

  render() {

    return (
      <main className='App'>
        <form className='inputForm' id='inputForm' onSubmit={(e) => this.searchFunction(e)}>
          <textarea className='inputText' name='inputText' id='inputText'></textarea>
          <input type='number' name='inputTerm' id='inputTerm' />
          <button type='submit' htmlFor='inputForm'>Submit</button>
        </form>
      </main>
    );
  }
}

export default App;