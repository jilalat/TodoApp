'use strict';

let userName = document.querySelector('.user-name');

let modal = document.querySelectorAll('.modal');
let overlay = document.querySelector('.overlay');
let closeModalBtn = document.querySelectorAll('.close-modal');
let cancelModalBtn = document.querySelectorAll('.cancel-modal');

let noteSection = document.querySelector('.top-section');
let addSearchDiv = document.querySelector('.add-and-search-icons');
let add = document.querySelector('.add');
let search = document.querySelector('.search');

let submitBar = document.querySelector('.submit-bar');
let noteInput = document.querySelector('.add-note');
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

let note = document.querySelectorAll('.note');
let noteList = document.querySelector('.note-list');

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

// modals & overlay
for (let i = 0; i < modal.length; i++) {
  cancelModalBtn[i].addEventListener('click', () => {
    modal[i].classList.add('hidden');
    overlay.classList.add('hidden');
  });
  overlay.addEventListener('click', () => {
    modal[i].classList.add('hidden');
    overlay.classList.add('hidden');
  });
  closeModalBtn[i].addEventListener('click', () => {
    modal[i].classList.add('hidden');
    overlay.classList.add('hidden');
  });
  document.addEventListener('keydown', esc => {
    if (esc.key === 'Escape' && !modal[i].classList.contains('hidden')) {
      modal[i].classList.add('hidden');
      overlay.classList.add('hidden');
    }
  });
}

//top section :
add.addEventListener('mouseenter', () => {
  if (noteInput.value === '') submitBtn.classList.add('hidden');
  addSearchDiv.classList.add('hidden');
  submitBar.classList.remove('hidden');
  noteInput.classList.remove('hidden');
  noteInput.focus();
  // submitBtn.classList.add('hidden');
});

noteInput.addEventListener('input', () => {
  if (noteInput.value.trim() !== '') { submitBtn.classList.remove('hidden'); } else {submitBtn.classList.add('hidden'); }
});

submitBar.addEventListener('mouseleave', () => {
  addSearchDiv.classList.remove('hidden');
  submitBar.classList.add('hidden');
  noteInput.classList.add('hidden');
  // if (addmyNotes.length !== 0) noteInput.value = '';
});

search.addEventListener('mouseenter', () => {
  if (searchNote.value === '') clearLoupe.classList.add('hidden');
  addSearchDiv.classList.add('hidden');
  searchBar.classList.remove('hidden');
  searchNote.classList.remove('hidden');
  searchNote.focus();
  // clearLoupe.classList.add('hidden');
  // colorClearLoupe.classList.add('hidden');
});

searchNote.addEventListener('input', () => {
  if (searchNote.value !== '') clearLoupe.classList.remove('hidden');
});

clearLoupe.addEventListener('mouseenter', () => {
  clearLoupe.classList.add('hidden');
  colorClearLoupe.classList.remove('hidden');
});

colorClearLoupe.addEventListener('mouseleave', () => {
  clearLoupe.classList.remove('hidden');
  colorClearLoupe.classList.add('hidden');
});

searchBar.addEventListener('mouseleave', () => {
  addSearchDiv.classList.remove('hidden');
  searchBar.classList.add('hidden');
  searchNote.classList.add('hidden');
  // if (searchNote.value !== 0) searchNote.value = '';
});

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

//note :


//submit :


// let noteContentP1 =
//   '<div class="note-list"><div class="note flex"><img class="checked-icon hidden" src="./images/checked.svg" alt=""><img class="unchecked-icon" src="./images/unchecked.svg" alt=""><p class="task">';
// let noteContentP2 =
//   '<span class="line-through hidden"></span></p><img class="color-edit-icon hidden" src="./images/color-edit.svg" alt=""><img class="edit-icon hidden" src="./images/edit.svg" alt=""><img class="delete-icon hidden" src="./images/delete.svg" alt=""><img class="red-delete-icon hidden" src="./images/red-delete.svg" alt=""></div>';
// let note = noteInput.value;
// localStorage.setItem('notes', note);

// onload if localStorage empty (localStorage.length === 0) notesMessage.innerHTML = `there is no saved notes ;-)`; else

// let addNewNote2 = () => {
//   let newDiv = document.createElement('div');
//   newDiv.setAttribute('class', 'note flex');

//   let newCheckedIcon = document.createElement('img');
//   newCheckedIcon.setAttribute('src', './images/checked.svg');
//   newCheckedIcon.setAttribute('class', 'checked-icon hidden');

//   let newUncheckedIcon = document.createElement('img');
//   newUncheckedIcon.setAttribute('src', './images/unchecked.svg');
//   newUncheckedIcon.setAttribute('class', 'unchecked-icon');

//   let newTask = document.createElement('p');
//   newTask.setAttribute('class', 'task');
//   newTask.textContent = noteInput.value;

//   let newSpan = document.createElement('span');
//   newSpan.setAttribute('class', 'line-through hidden');

//   let newColorEdit = document.createElement('img');
//   newColorEdit.setAttribute('src', './images/color-edit.svg');
//   newColorEdit.setAttribute('class', 'color-edit-icon hidden');

//   let newEditIcon = document.createElement('img');
//   newEditIcon.setAttribute('src', './images/edit.svg');
//   newEditIcon.setAttribute('class', 'edit-icon hidden');

//   let newDeleteIcon = document.createElement('img');
//   newDeleteIcon.setAttribute('src', './images/delete.svg');
//   newDeleteIcon.setAttribute('class', 'delete-icon hidden');

//   let newRedDeleteIcon = document.createElement('img');
//   newRedDeleteIcon.setAttribute('src', './images/red-delete.svg');
//   newRedDeleteIcon.setAttribute('class', 'red-delete-icon hidden');

//   noteList.appendChild(newDiv);
//   newDiv.appendChild(newCheckedIcon);
//   newDiv.appendChild(newUncheckedIcon);
//   newDiv.appendChild(newTask);
//   newDiv.appendChild(newSpan);
//   newDiv.appendChild(newColorEdit);
//   newDiv.appendChild(newEditIcon);
//   newDiv.appendChild(newRedDeleteIcon);
// };
// let myNotes = [];

// let noteInput.value = noteInput.value;
// let saveNotes = () => {
// let newNote = noteInput.value;
// localStorage.setItem('myNotes', newNote )
// myNotes.push(noteInput.value);
// return myNotes;
// };
let myNotes = [];
// submitBtn.addEventListener('click', e => {
//   e.preventDefault();
//   notesMessage.innerHTML = '';
//   noteList.innerHTML += `${noteContentP1}${noteInput.value}${noteContentP2}`;
//   localStorage.setItem('myNotes', noteInput.value)
//   addMessage.innerHTML = `the ${noteInput.value} note is saved ;-)`
//   noteInput.value = '';
//   submitBtn.classList.add('hidden');
// })

submitBar.addEventListener('submit', e => {
  e.preventDefault();
  // let localItems = JSON.parse(localStorage.getItem(localItems));
  // if (localItems === null) {
    //   myNotes = [];
    // } else {
      //   myNotes = localItems;
      // }
  let localItems = JSON.parse(localStorage.getItem(newNote));
  if (localItems == null) {
    myNotes = [];
  } else {
    myNotes = JSON.parse(localItems);
  }
  myNotes.push(noteInput.value);
  localStorage.setItem('newNote', JSON.stringify(myNotes));
  ShowNotes();
  });

let ShowNotes = () => {
  let localItems = JSON.parse(localStorage.getItem(newNote));
  if (localItems == null) {
    myNotes = [];
  } else {
    myNotes = JSON.parse(localItems);
  }

  notesMessage.innerHTML = '';
  myNotes.push(noteInput.value);
  localStorage.setItem('newNote', JSON.stringify(myNotes));
  myNotes.forEach((element, i) => {
    noteList.innerHTML += `<div class="note flex"><img class="checked-icon" src="./images/checked.svg" alt=""><img class="unchecked-icon" src="./images/unchecked.svg" alt=""><p class="task">'${element}<span class="line-through"></span></p><img class="color-edit-icon" src="./images/color-edit.svg" alt=""><img class="edit-icon" src="./images/edit.svg" alt=""><img class="delete-icon" src="./images/delete.svg" alt=""><img class="red-delete-icon" src="./images/red-delete.svg" alt=""></div>`;
    myNotes.push(noteInput.value)
    addMessage.classList.remove('hidden');
    addMessage.innerHTML = `the ${noteInput.value} note is saved ;-)`;
    noteInput.value = '';
    submitBtn.classList.add('hidden');
    return myNotes;
  })
}
      // localStorage.setItem('localItems', JSON.stringify(myNotes));

// window.addEventListener('load', () => {
//   ShowNotes();
// })
//     window.addEventListener('load', () => {
//   let localItems = JSON.parse(localStorage.getItem(localItems));
//   if (localItems !== null) {
//     for (let i = 0; i < myNotes.length; i++) {
//       noteList.innerHTML += `${noteContentP1}${myNotes[i]}${noteContentP2}`;
//     }
//   } else {
//     // myNotes = localItems;

//     notesMessage.classList.remove('hidden');
//     notesMessage.innerHTML = `you dont have any note here :(`;
//     // myNotes = [];
//     for (let i = 0; i < myNotes.length; i++) {
//       noteList.innerHTML += `${noteContentP1}${myNotes[i]}${noteContentP2}`;
//     }
//   }
// });








    
    // myNotes = JSON.parse(localStorage.setItem('myNotes'));

//     // myNotes = JSON.parse(localStorage.getItem('myNotes'));
//     //     // for (let i = 0; i < localStorage.getItem(myNotes).length)
//     //     // notesMessage.innerHTML = localStorage.getItem(myNotes);
//   }

// }
// let saveData = () => {
//   localStorage.getItem(getData);
// };
// });
// console.log(myNotes);
// console.log(getData());









































// // update :
// let updateBtn = document.querySelector('.update-btn');

// // check/uncheck note
// let uncheckedIcon = document.querySelectorAll('.unchecked-icon');
// let checkedIcon = document.querySelectorAll('.checked-icon');
// let lineThrough = document.querySelectorAll('.line-through');
// let tasks = document.querySelectorAll('.task');
// for (let i = 0; i < myNotes.length; i++) {
//   // checkedIcon[i].classList.add('hidden');
//   // uncheckedIcon[i].classList.remove('hidden');
//   // lineThrough[i].classList.add('hidden');

//   tasks[i].addEventListener('click', () => {
//     checkedIcon[i].classList.remove('hidden');
//     uncheckedIcon[i].classList.add('hidden');
//     lineThrough[i].classList.remove('hidden');
//   });
//   uncheckedIcon[i].addEventListener('click', () => {
//     checkedIcon[i].classList.remove('hidden');
//     uncheckedIcon[i].classList.add('hidden');
//     lineThrough[i].classList.remove('hidden');
//   });
//   checkedIcon[i].addEventListener('click', () => {
//     checkedIcon[i].classList.add('hidden');
//     uncheckedIcon[i].classList.remove('hidden');
//     lineThrough[i].classList.add('hidden');
//   });
// }

// // Edit note
// let blackEditIcon = document.querySelectorAll('.edit-icon');
// let colorEditIcon = document.querySelectorAll('.color-edit-icon');
// let editnoteModal = document.querySelector('.update-note-modal');
// let modalInput = document.querySelector('.modal-input');

// for (let j = 0; j < blackEditIcon.length; j++) {
//   blackEditIcon[j].addEventListener('mouseenter', () => {
//     blackEditIcon[j].classList.add('hidden');
//     colorEditIcon[j].classList.remove('hidden');
//   });
//   colorEditIcon[j].addEventListener('mouseleave', () => {
//     blackEditIcon[j].classList.remove('hidden');
//     colorEditIcon[j].classList.add('hidden');
//   });
//   colorEditIcon[j].addEventListener('click', () => {
//     editnoteModal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//     modalInput.focus();
//   });
// }

// // Delete note
// let deleteIcon = document.querySelectorAll('.delete-icon');
// let redDeleteIcon = document.querySelectorAll('.red-delete-icon');
// let deletenoteModal = document.querySelector('.delete-note-modal');

// for (let j = 0; j < blackEditIcon.length; j++) {
//   note[j].addEventListener('mouseenter', () => {
//     blackEditIcon[j].classList.remove('hidden');
//     deleteIcon[j].classList.remove('hidden');
//   });
//   note[j].addEventListener('mouseleave', () => {
//     blackEditIcon[j].classList.add('hidden');
//     deleteIcon[j].classList.add('hidden');
//     colorEditIcon[j].classList.add('hidden');
//     redDeleteIcon[j].classList.add('hidden');
//   });
//   deleteIcon[j].addEventListener('mouseenter', () => {
//     deleteIcon[j].classList.add('hidden');
//     redDeleteIcon[j].classList.remove('hidden');
//   });
//   redDeleteIcon[j].addEventListener('mouseleave', () => {
//     deleteIcon[j].classList.remove('hidden');
//     redDeleteIcon[j].classList.add('hidden');
//   });
//   redDeleteIcon[j].addEventListener('click', () => {
//     deletenoteModal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });
// }

// // remove :
// let deleteNote = document.querySelector('.delete-btn');
// for (let i = 0; i < myNotes.length; i++) {
//   deleteNote.addEventListener('click', e => {
//     e.preventDefault();
//     // let note[i] = e.target.parentElement;
//     // rightSection.removeChild(note[i]);
//     // noteList.removeChild(note[i]);
//     // note[i].parentNode.remove();
//     note[i].parentNode.removeChild(note[i]);
//     // note[i].remove();
//     // break;
//     // return false;
//     modal[i].classList.add('hidden');
//     overlay.classList.add('hidden');
//   });
// }

// // del note

// // search :
// colorClearLoupe.addEventListener('click', e => {
//   e.preventDefault();
//   searchNote.value = '';
//   colorClearLoupe.classList.add('hidden');
//   // clearLoupe.classList.add('hidden');
// });
// // if no results
// // searchMessage.innerHTML = `the ${noteInput.value} note is saved ;-)`;
