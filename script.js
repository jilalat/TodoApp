'use strict';

let userName = document.querySelector('.user-name');

let noteSection = document.querySelector('.top-section');
let addSearchDiv = document.querySelector('.add-and-search-icons');
let add = document.querySelector('.add');
let search = document.querySelector('.search');

let submitBar = document.querySelector('.submit-bar');
let noteInputField = document.querySelector('.add-note');
let submitBtn = document.querySelector('.submit-btn');

let searchBar = document.querySelector('.search-bar');
let searchNote = document.querySelector('.search-note');
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

let notesContainer = document.querySelector('.note-list');

let addMessage = document.querySelector('.add-message');
let searchMessage = document.querySelector('.search-message');
let notesMessage = document.querySelector('.notes-message');

//set name
if (localStorage.getItem('Name') == null) {
  let setName = prompt('Add You Name here Please ..');
  localStorage.setItem('Name', setName);
  userName.innerHTML = localStorage.getItem('Name');
} else {
  userName.innerHTML = localStorage.getItem('Name');
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

let addNewNote = () => {
  submitNotes.push(noteInputField.value);
  localStorage.setItem('arr', JSON.stringify(submitNotes));

  //create Elements :
  let newNote = document.createElement('div');
  let checkedIcon = document.createElement('img');
  let uncheckedIcon = document.createElement('img');
  let noteContent = document.createElement('div');
  let noteTxt = document.createElement('p');
  let noteValue = document.createTextNode(noteInputField.value);
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
  lineThrough.setAttribute('class', 'line-through hidden');
  deleteIcon.setAttribute('src', './images/delete.svg');
  deleteIcon.setAttribute('class', 'delete-icon hidden');
  redDeleteIcon.setAttribute('src', './images/red-delete.svg');
  redDeleteIcon.setAttribute('class', 'red-delete-icon hidden');

  //Append Child :
  notesContainer.appendChild(newNote);
  newNote.appendChild(checkedIcon);
  newNote.appendChild(uncheckedIcon);
  newNote.appendChild(noteContent);
  noteContent.appendChild(noteTxt);
  noteContent.appendChild(deleteIcon);
  noteContent.appendChild(redDeleteIcon);
  noteTxt.appendChild(noteValue);
  noteTxt.appendChild(lineThrough);

  // notesContainer.innerHTML += newNote;

  //Add Styles

  //Note Hover
  newNote.addEventListener('mouseenter', () => {
    deleteIcon.classList.remove('hidden');
  });
  newNote.addEventListener('mouseleave', () => {
    deleteIcon.classList.add('hidden');
    redDeleteIcon.classList.add('hidden');
  });
  // check/uncheck note
  // noteTxt.addEventListener('click', () => {
  //   checkedIcon.classList.remove('hidden');
  //   uncheckedIcon.classList.add('hidden');
  //   lineThrough.classList.remove('hidden');
  //   newNote.style.backgroundColor = 'pink';
  // });
  // lineThrough.addEventListener('click', () => {
  //   checkedIcon.classList.add('hidden');
  //   uncheckedIcon.classList.remove('hidden');
  //   lineThrough.classList.add('hidden');
  //   newNote.style.backgroundColor = 'white';
  // });
  uncheckedIcon.addEventListener('click', () => {
    checkedIcon.classList.remove('hidden');
    uncheckedIcon.classList.add('hidden');
    lineThrough.classList.remove('hidden');
    newNote.style.backgroundColor = 'pink';
  });
  checkedIcon.addEventListener('click', () => {
    checkedIcon.classList.add('hidden');
    uncheckedIcon.classList.remove('hidden');
    lineThrough.classList.add('hidden');
    newNote.style.backgroundColor = 'white';
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
      let noteIndex = noteContent.children[0].innerText;
      if (submitNotes.includes(noteIndex)) {
        submitNotes.splice(submitNotes.indexOf(noteIndex), 1);
        noteContent.parentNode.remove();
      }
      noNotes();
      localStorage.setItem('arr', JSON.stringify(submitNotes));
    }
  });
};

let submitNotes = JSON.parse(localStorage.getItem('arr'))
  ? JSON.parse(localStorage.getItem('arr'))
  : [];

submitBar.addEventListener('submit', e => {
  e.preventDefault();
  addNewNote();
  notesMessage.classList.add('hidden');
  notesMessage.classList.add('hidden');
  submitBtn.classList.add('hidden');
  noteInputField.value = '';
});

//search Bar
search.addEventListener('mouseenter', () => {
  if (searchNote.value.trim() !== '') {
    clearLoupe.classList.remove('hidden');
  } else {
    clearLoupe.classList.add('hidden');
  }
  addSearchDiv.classList.add('hidden');
  searchBar.classList.remove('hidden');
  searchNote.classList.remove('hidden');
  searchNote.focus();
});

searchNote.addEventListener('input', () => {
  if (searchNote.value.trim() !== '') {
    clearLoupe.classList.remove('hidden');
  } else {
    clearLoupe.classList.add('hidden');
  }
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
  searchNote.value = '';
});

searchBar.addEventListener('mouseleave', () => {
  addSearchDiv.classList.remove('hidden');
  searchBar.classList.add('hidden');
  searchNote.classList.add('hidden');
});

// // search :
// // if no results
// // searchMessage.innerHTML = `the ${noteInputField.value} note is saved ;-)`;


// add fct for this
let noNotes = () => {
  if (notesContainer.childElementCount === 0) {
    notesMessage.classList.remove('hidden');
    notesMessage.innerHTML = `you dont have any note here :(`;
  };
};
// noNotes();



// window.addEventListener('load', () => {
//   if (localStorage.getItem('arr') !== null) {

//     // || localStorage.getItem('arr') !== null

//     for (let i = 0; i < submitNotes.length; i++) {
//       noteList.innerHTML += `<div class="note flex"><img class="checked-icon" src="./images/checked.svg" alt=""><img class="unchecked-icon" src="./images/unchecked.svg" alt=""><p class="task">${submitNotes[i]}<span class="line-through"></span></p><img class="color-edit-icon" src="./images/color-edit.svg" alt=""><img class="edit-icon" src="./images/edit.svg" alt=""><img class="delete-icon" src="./images/delete.svg" alt=""><img class="red-delete-icon" src="./images/red-delete.svg" alt=""></img></div>`;

//     }
//   } else {
//     notesMessage.classList.remove('hidden');
//     notesMessage.innerHTML = `you dont have any note here :(`;
//   }
// });