'use strict';

let userName = document.querySelector('.user-name');

let noteSection = document.querySelector('.top-section');
let addSearchDiv = document.querySelector('.add-and-search-icons');
let add = document.querySelector('.add');
let search = document.querySelector('.search');

let submitBar = document.querySelector('.submit-bar');
let noteInputField = document.querySelector('.submit-input');
let submitBtn = document.querySelector('.submit-btn');

let searchBar = document.querySelector('.search-bar');
let searchInputField = document.querySelector('.search-input');
let clearLoupe = document.querySelector('.clear-loupe');
let colorClearLoupe = document.querySelector('.color-clear-loupe');

let date = new Date();
let today = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

let notesContainer = document.querySelector('.notes-section');
let notesList = document.querySelector('.note-list');

let searchMessage = document.querySelector('.search-message');
let notesMessage = document.querySelector('.notes-message');

//set name
let nameGetLocalStorage = localStorage.getItem('Name');
if (nameGetLocalStorage === null) {
  let setName = prompt('Add You Name here Please ..');
  localStorage.setItem('Name', setName);
  if (!setName) {
    userName.textContent = 'Guess';
  } else {
    userName.innerHTML = localStorage.getItem('Name');
  }
} else if (nameGetLocalStorage == '' || nameGetLocalStorage == 'null') {
  userName.textContent = 'Guess';
} else {
  userName.innerHTML = nameGetLocalStorage;
}

// greeting date :
let ordinalNumbers = () => {
  let ordinalIndicator;
  if (today === 1) {
    ordinalIndicator = 'st';
  } else if (today === 2) {
    ordinalIndicator = 'nd';
  } else if (today === 3) {
    ordinalIndicator = 'rd';
  } else {
    ordinalIndicator = 'th';
  }
  return ordinalIndicator;
};

document.querySelector('.date').textContent = `${today}${ordinalNumbers()} ${
  monthNames[month]
}, ${year}`;

//submit Bar:
add.addEventListener('mouseenter', () => {
  if (noteInputField.value.trim() !== '') {
    submitBtn.classList.remove('hidden');
  } else {
    submitBtn.classList.add('hidden');
  }
  addSearchDiv.classList.add('hidden');
  submitBar.classList.remove('hidden');
  noteInputField.classList.remove('hidden');
  noteInputField.focus();
});

noteInputField.addEventListener('input', () => {
  if (noteInputField.value.trim() !== '') {
    submitBtn.classList.remove('hidden');
  } else {
    submitBtn.classList.add('hidden');
  }
});

submitBar.addEventListener('mouseleave', () => {
  addSearchDiv.classList.remove('hidden');
  submitBar.classList.add('hidden');
  noteInputField.classList.add('hidden');
});

let addNewNote = (inputValue, index) => {
  //create Elements :
  let newNote = document.createElement('div');
  let checkedIcon = document.createElement('img');
  let uncheckedIcon = document.createElement('img');
  let noteContent = document.createElement('div');
  let noteTxt = document.createElement('p');
  let noteValue = document.createTextNode(inputValue);
  let lineThrough = document.createElement('span');
  let deleteIcon = document.createElement('img');
  let redDeleteIcon = document.createElement('img');

  //create Classes :
  newNote.setAttribute('class', 'note flex');
  checkedIcon.setAttribute('src', './images/checked.svg');
  checkedIcon.setAttribute('class', 'checked-icon hidden');
  uncheckedIcon.setAttribute('src', './images/unchecked.svg');
  uncheckedIcon.setAttribute('class', 'unchecked-icon');
  noteContent.setAttribute('class', 'note-content flex');
  noteTxt.setAttribute('class', 'noteText');
  noteContent.setAttribute('note-index', index);
  lineThrough.setAttribute('class', 'line-through hidden');
  deleteIcon.setAttribute('src', './images/delete.svg');
  deleteIcon.setAttribute('class', 'delete-icon hidden');
  redDeleteIcon.setAttribute('src', './images/red-delete.svg');
  redDeleteIcon.setAttribute('class', 'red-delete-icon hidden');

  //Append Child :
  notesList.appendChild(newNote);
  newNote.appendChild(checkedIcon);
  newNote.appendChild(uncheckedIcon);
  newNote.appendChild(noteContent);
  noteContent.appendChild(noteTxt);
  noteContent.appendChild(deleteIcon);
  noteContent.appendChild(redDeleteIcon);
  noteTxt.appendChild(noteValue);
  noteTxt.appendChild(lineThrough);

  //Add Styles

  //Note Hover
  newNote.addEventListener('mouseenter', () => {
    deleteIcon.classList.remove('hidden');
    newNote.style.backgroundImage = 'url("./images/tasks.png")';
  });
  newNote.addEventListener('mouseleave', () => {
    deleteIcon.classList.add('hidden');
    redDeleteIcon.classList.add('hidden');
    newNote.style.backgroundImage = '';
  });

  // check/uncheck note
  uncheckedIcon.addEventListener('click', () => {
    checkedIcon.classList.remove('hidden');
    uncheckedIcon.classList.add('hidden');
    lineThrough.classList.remove('hidden');
  });
  checkedIcon.addEventListener('click', () => {
    checkedIcon.classList.add('hidden');
    uncheckedIcon.classList.remove('hidden');
    lineThrough.classList.add('hidden');
  });

  // Delete note
  deleteIcon.addEventListener('mouseenter', () => {
    deleteIcon.classList.add('hidden');
    redDeleteIcon.classList.remove('hidden');
  });
  redDeleteIcon.addEventListener('mouseleave', () => {
    deleteIcon.classList.remove('hidden');
    redDeleteIcon.classList.add('hidden');
  });
  redDeleteIcon.addEventListener('click', e => {
    e.preventDefault();
    let deleteNote = window.confirm(
      'Are you sure you wont to delete this note ??'
    );
    if (deleteNote === true) {
      submitNotes.splice(index, 1);
      noNotes();
      localStorage.setItem('arr', JSON.stringify(submitNotes));
      refresh(submitNotes);
    }
  });
};

//search Bar
search.addEventListener('mouseenter', () => {
  if (searchInputField.value.trim() !== '') {
    clearLoupe.classList.remove('hidden');
  } else {
    clearLoupe.classList.add('hidden');
  }
  addSearchDiv.classList.add('hidden');
  searchBar.classList.remove('hidden');
  searchInputField.classList.remove('hidden');
  searchInputField.focus();
});

clearLoupe.addEventListener('mouseenter', () => {
  clearLoupe.classList.add('hidden');
  colorClearLoupe.classList.remove('hidden');
});

colorClearLoupe.addEventListener('mouseleave', () => {
  clearLoupe.classList.remove('hidden');
  colorClearLoupe.classList.add('hidden');
});

colorClearLoupe.addEventListener('click', e => {
  e.preventDefault();
  colorClearLoupe.classList.add('hidden');
  clearLoupe.classList.add('hidden');
  searchInputField.value = '';
  searchInputField.focus();
  refresh(submitNotes);
});

searchBar.addEventListener('mouseleave', () => {
  addSearchDiv.classList.remove('hidden');
  searchBar.classList.add('hidden');
  searchInputField.classList.add('hidden');
});

searchInputField.addEventListener('input', () => {
  if (searchInputField.value.trim() !== '') {
    clearLoupe.classList.remove('hidden');
  } else {
    clearLoupe.classList.add('hidden');
  }
});

// search :

let filteredArr = arr => {
  let searchInputValue = searchInputField.value.toLowerCase();
  let filtered = arr.filter(note => {
    return note.toUpperCase().includes(searchInputValue) || note.toLowerCase().includes(searchInputValue)
  });
  return filtered;
};



searchInputField.addEventListener('keyup', () => {
  notesMessage.classList.add('hidden');
  if (filteredArr(submitNotes).length === 0) {
    notesList.innerHTML = null;
    searchMessage.classList.remove('hidden');
    searchMessage.innerHTML = `your keyword doesn't exist :(`;
  } else {
    refresh(submitNotes);
    searchMessage.classList.add('hidden');
  }
});


//submit
let arrGetLocalStorage = localStorage.getItem('arr');
let submitNotes = JSON.parse(arrGetLocalStorage) || [];

submitBar.addEventListener('submit', e => {
  e.preventDefault();
  searchMessage.classList.add('hidden');
  notesMessage.classList.add('hidden');
  submitNotes.unshift(noteInputField.value);
  localStorage.setItem('arr', JSON.stringify(submitNotes));
  noteInputField.focus();
  submitBtn.classList.add('hidden');
  noteInputField.value = '';
  // searchInputField.value = '';
  refresh(submitNotes);
});

// onLoad
let noNotes = () => {
  if (notesList.childElementCount === 0) {
    notesMessage.classList.remove('hidden');
    notesMessage.innerHTML = `you dont have any note here :(`;
  }
};

let refresh = refreshArr => {
  notesList.innerHTML = null;
  let searchedNotes = filteredArr(refreshArr) || refreshArr;
  searchedNotes.forEach((element, index) => {
    addNewNote(element, index);
  });
};

if (arrGetLocalStorage === null || arrGetLocalStorage == '[]') {
  noNotes();
} else {
  refresh(submitNotes);
}


