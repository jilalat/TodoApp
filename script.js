'use strict';

let userName = document.querySelector('.user-name');

let modal = document.querySelectorAll('.modal');
let overlay = document.querySelector('.overlay');
let closeModalBtn = document.querySelectorAll('.close-modal');
let cancelModalBtn = document.querySelectorAll('.cancel-modal');

let deleteNoteModal = document.querySelector('.delete-note-modal');
let editNoteModal = document.querySelector('.update-note-modal');
let modalInput = document.querySelector('.modal-input');
let deleteBtn = document.querySelector('.delete-btn');
let updateBtn = document.querySelector('.update-btn');

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

let noteList = document.querySelector('.note-list');
let noteBar = document.querySelectorAll('.note');

let addMessage = document.querySelector('.add-message');
let searchMessage = document.querySelector('.search-message');
let notesMessage = document.querySelector('.notes-message');

let uncheckedIcon = document.querySelector('.unchecked-icon');
let checkedIcon = document.querySelector('.checked-icon');
let lineThrough = document.querySelector('.line-through');
let tasks = document.querySelector('.task');

let blackEditIcon = document.querySelector('.edit-icon');
let colorEditIcon = document.querySelector('.color-edit-icon');

let deleteIcon = document.querySelector('.delete-icon');
let redDeleteIcon = document.querySelector('.red-delete-icon');

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

//submit :
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

let submitNotes = JSON.parse(localStorage.getItem('arr'))
  ? JSON.parse(localStorage.getItem('arr'))
  : [];

let addNewNoteBar = () => {
  submitNotes.push(noteInputField.value);
  localStorage.setItem('arr', JSON.stringify(submitNotes));
  noteList.innerHTML += `<div class="note flex"><img class="checked-icon hidden" src="./images/checked.svg" alt=""><img class="unchecked-icon" src="./images/unchecked.svg" alt=""><p class="task">${noteInputField.value}<span class="line-through hidden"></span></p><img class="color-edit-icon hidden" src="./images/color-edit.svg" alt=""><img class="edit-icon hidden" src="./images/edit.svg" alt=""><img class="delete-icon hidden" src="./images/delete.svg" alt=""><img class="red-delete-icon hidden" src="./images/red-delete.svg" alt=""></img></div>`;
  noteStyle();
};

submitBar.addEventListener('submit', e => {
  e.preventDefault();
  addNewNoteBar();
  notesMessage.classList.add('hidden');
  submitBtn.classList.add('hidden');
  noteInputField.value = '';
});

submitBar.addEventListener('mouseleave', () => {
  addSearchDiv.classList.remove('hidden');
  submitBar.classList.add('hidden');
  noteInputField.classList.add('hidden');
});

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

window.addEventListener('load', () => {
  if (localStorage.getItem('arr') !== null) {
    submitNotes.forEach(element => {
      noteList.innerHTML += `<div class="note flex"><img class="checked-icon hidden" src="./images/checked.svg" alt=""><img class="unchecked-icon" src="./images/unchecked.svg" alt=""><p class="task">${element}<span class="line-through hidden"></span></p><img class="color-edit-icon hidden" src="./images/color-edit.svg" alt=""><img class="edit-icon hidden" src="./images/edit.svg" alt=""><img class="delete-icon hidden" src="./images/delete.svg" alt=""><img class="red-delete-icon hidden" src="./images/red-delete.svg" alt=""></img></div>`;
      // noteStyle();
    });
  } else {
    notesMessage.classList.remove('hidden');
    notesMessage.innerHTML = `you dont have any note here :(`;
  }
});

let noteStyle = () => {
  for (let i = 0; i < submitNotes.length; i++) {
    //note hover :
    document.querySelectorAll('.note')[i].addEventListener('mouseenter', () => {
      document.querySelectorAll('.edit-icon')[i].classList.remove('hidden');
      document.querySelectorAll('.delete-icon')[i].classList.remove('hidden');
    });
    document.querySelectorAll('.note')[i].addEventListener('mouseleave', () => {
      document.querySelectorAll('.edit-icon')[i].classList.add('hidden');
      document.querySelectorAll('.delete-icon')[i].classList.add('hidden');
      document.querySelectorAll('.color-edit-icon')[i].classList.add('hidden');
      document.querySelectorAll('.red-delete-icon')[i].classList.add('hidden');
    });

    // // check/uncheck note

    document
      .querySelectorAll('.unchecked-icon')
      [i].addEventListener('click', () => {
        document
          .querySelectorAll('.checked-icon')
          [i].classList.remove('hidden');
        document.querySelectorAll('.unchecked-icon')[i].classList.add('hidden');
        document
          .querySelectorAll('.line-through')
          [i].classList.remove('hidden');
        document.querySelectorAll('.note')[i].style.backgroundColor = 'pink';
      });

    document
      .querySelectorAll('.checked-icon')
      [i].addEventListener('click', () => {
        document.querySelectorAll('.checked-icon')[i].classList.add('hidden');
        document
          .querySelectorAll('.unchecked-icon')
          [i].classList.remove('hidden');
        document.querySelectorAll('.line-through')[i].classList.add('hidden');
        document.querySelectorAll('.note')[i].style.backgroundColor = 'white';
      });

    // Edit / Update note
    document
      .querySelectorAll('.edit-icon')
      [i].addEventListener('mouseenter', () => {
        document.querySelectorAll('.edit-icon')[i].classList.add('hidden');
        document
          .querySelectorAll('.color-edit-icon')
          [i].classList.remove('hidden');
      });
    document
      .querySelectorAll('.color-edit-icon')
      [i].addEventListener('mouseleave', () => {
        document.querySelectorAll('.edit-icon')[i].classList.remove('hidden');
        document
          .querySelectorAll('.color-edit-icon')
          [i].classList.add('hidden');
      });
    document
      .querySelectorAll('.color-edit-icon')
      [i].addEventListener('click', () => {
        editNoteModal.classList.remove('hidden');
        overlay.classList.remove('hidden');
        modalInput.focus();
      });

    // Delete note
    document
      .querySelectorAll('.delete-icon')
      [i].addEventListener('mouseenter', () => {
        document.querySelectorAll('.delete-icon')[i].classList.add('hidden');
        document
          .querySelectorAll('.red-delete-icon')
          [i].classList.remove('hidden');
      });
    document
      .querySelectorAll('.red-delete-icon')
      [i].addEventListener('mouseleave', () => {
        document.querySelectorAll('.delete-icon')[i].classList.remove('hidden');
        document
          .querySelectorAll('.red-delete-icon')
          [i].classList.add('hidden');
      });
    document
      .querySelectorAll('.red-delete-icon')
      [i].addEventListener('click', () => {
        deleteNoteModal.classList.remove('hidden');
        overlay.classList.remove('hidden');
      });
  }
};

// deleteBtn
deleteBtn.addEventListener('click', (e) => {
  e.preventDefault();
  // submitNotes = JSON.parse(localStorage.getItem('arr'));
      let noteIndex = document.querySelector('.task').innerText;
    submitNotes.splice(submitNotes.indexOf(noteIndex), 1);
    localStorage.setItem('arr', JSON.stringify(submitNotes));
  deleteNoteModal.classList.add('hidden');
  overlay.classList.add('hidden');


});

//updateBtn
