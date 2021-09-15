'use strict';

// modals & overlay
let modal = document.querySelectorAll('.modal');
let overlay = document.querySelector('.overlay');
let closeModalBtn = document.querySelectorAll('.close-modal');
let cancelModalBtn = document.querySelectorAll('.cancel-modal');

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
let addSearchDiv = document.querySelector('.add-and-search-icons');
let add = document.querySelector('.add');
let search = document.querySelector('.search');

let addSection = document.querySelector('.submit-bar');
let addNote = document.querySelector('.add-note');
let submitBtn = document.querySelector('.submit-btn');

let searchSection = document.querySelector('.search-bar');
let searchNote = document.querySelector('.search-note');
let loupe = document.querySelector('.loupe');

add.addEventListener('mouseenter', () => {
  addSearchDiv.classList.add('hidden');
  addSection.classList.remove('hidden');
  addNote.classList.remove('hidden');
  submitBtn.classList.add('hidden');
});

addNote.addEventListener('input', () => {
  if (addNote.length !== 0) submitBtn.classList.remove('hidden');
});

addSection.addEventListener('mouseleave', () => {
  addSearchDiv.classList.remove('hidden');
  addSection.classList.add('hidden');
  addNote.classList.add('hidden');
  if (addNote.length !== 0) addNote.value = '';
});

search.addEventListener('mouseenter', () => {
  addSearchDiv.classList.add('hidden');
  searchSection.classList.remove('hidden');
  searchNote.classList.remove('hidden');
  loupe.classList.add('hidden');
});

searchNote.addEventListener('input', () => {
  if (searchNote.value !== 0) loupe.classList.remove('hidden');
});

searchSection.addEventListener('mouseleave', () => {
  addSearchDiv.classList.remove('hidden');
  searchSection.classList.add('hidden');
  searchNote.classList.add('hidden');
  if (searchNote.value !== 0) searchNote.value = '';
});

// greeting date :

let date = new Date();
let today = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

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

document.querySelector('.date').textContent = `${today}${ordinalNumbers()} ${
  monthNames[month]
}, ${year}`;

//note :
let note = document.querySelectorAll('.note');
let noteList = document.querySelector('.note-list');

// check/uncheck note
let uncheckedIcon = document.querySelectorAll('.unchecked-icon');
let checkedIcon = document.querySelectorAll('.checked-icon');
let lineThrough = document.querySelectorAll('.line-through');
let tasks = document.querySelectorAll('.task');
for (let i = 0; i < note.length; i++) {
  tasks[i].addEventListener('click', () => {
    checkedIcon[i].classList.toggle('hidden');
    uncheckedIcon[i].classList.toggle('hidden');
    lineThrough[i].classList.toggle('hidden');
  });
  uncheckedIcon[i].addEventListener('click', () => {
    checkedIcon[i].classList.toggle('hidden');
    uncheckedIcon[i].classList.toggle('hidden');
    lineThrough[i].classList.toggle('hidden');
  });
  checkedIcon[i].addEventListener('click', () => {
    checkedIcon[i].classList.toggle('hidden');
    uncheckedIcon[i].classList.toggle('hidden');
    lineThrough[i].classList.toggle('hidden');
  });
}

// Edit note
let blackEditIcon = document.querySelectorAll('.edit-icon');
let colorEditIcon = document.querySelectorAll('.color-edit-icon');
let editnoteModal = document.querySelector('.update-note-modal');

for (let j = 0; j < blackEditIcon.length; j++) {
  blackEditIcon[j].addEventListener('mouseenter', () => {
    blackEditIcon[j].classList.add('hidden');
    colorEditIcon[j].classList.remove('hidden');
  });
  colorEditIcon[j].addEventListener('mouseleave', () => {
    blackEditIcon[j].classList.remove('hidden');
    colorEditIcon[j].classList.add('hidden');
  });
  colorEditIcon[j].addEventListener('click', () => {
    editnoteModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

// Delete note
let deleteIcon = document.querySelectorAll('.delete-icon');
let redDeleteIcon = document.querySelectorAll('.red-delete-icon');
let deletenoteModal = document.querySelector('.delete-note-modal');

for (let j = 0; j < blackEditIcon.length; j++) {
  note[j].addEventListener('mouseenter', () => {
    blackEditIcon[j].classList.remove('hidden');
    deleteIcon[j].classList.remove('hidden');
  });
  note[j].addEventListener('mouseleave', () => {
    blackEditIcon[j].classList.add('hidden');
    deleteIcon[j].classList.add('hidden');
    colorEditIcon[j].classList.add('hidden');
    redDeleteIcon[j].classList.add('hidden');
  });
  deleteIcon[j].addEventListener('mouseenter', () => {
    deleteIcon[j].classList.add('hidden');
    redDeleteIcon[j].classList.remove('hidden');
  });
  redDeleteIcon[j].addEventListener('mouseleave', () => {
    deleteIcon[j].classList.remove('hidden');
    redDeleteIcon[j].classList.add('hidden');
  });
  redDeleteIcon[j].addEventListener('click', () => {
    deletenoteModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

//submit :

submitBtn.addEventListener('click', e => {
  e.preventDefault();
  // let value = addNote.querySelector('input[type="text"]').value
  // console.log(value);
console.log(addNote.textContent);
  // document.createElement('');
  let newDiv = document.createElement('div');
  newDiv.setAttribute('class', 'note flex');
  
  let newCheckedIcon = document.createElement('img');
  newCheckedIcon.setAttribute('src', './images/checked.svg');
  newCheckedIcon.setAttribute('class', 'checked-icon hidden');
  
  let newUncheckedIcon = document.createElement('img');
  newUncheckedIcon.setAttribute('src', './images/unchecked.svg');
  newUncheckedIcon.setAttribute('class', 'unchecked-icon');
  
  let newTask = document.createElement('p');
  newTask.setAttribute('class',"task");
  
  let newSpan = document.createElement('span');
  newSpan.setAttribute('class',"line-through hidden");
  
  let newColorEdit = document.createElement('img');
  newColorEdit.setAttribute('src', './images/color-edit.svg');
  newColorEdit.setAttribute('class',"color-edit-icon hidden");
  
  let newEditIcon = document.createElement('img');
  newEditIcon.setAttribute('src', './images/edit.svg');
  newEditIcon.setAttribute('class',"edit-icon hidden");
  
  let newDeleteIcon = document.createElement('img');
  newDeleteIcon.setAttribute('src', './images/delete.svg');
  newDeleteIcon.setAttribute('class',"delete-icon hidden");
  
  let newRedDeleteIcon = document.createElement('img');
  newRedDeleteIcon.setAttribute('src', './images/red-delete.svg');
  newRedDeleteIcon.setAttribute('class',"red-delete-icon hidden");
  
  noteList.appendChild(newDiv);
  newDiv.appendChild(newCheckedIcon);
  newDiv.appendChild(newUncheckedIcon);
  newDiv.appendChild(newTask);
  newDiv.appendChild(newSpan);
  newDiv.appendChild(newColorEdit);
  newDiv.appendChild(newEditIcon);
  newDiv.appendChild(newRedDeleteIcon);


});

// update :
let updateBtn = document.querySelector('.update-btn');

// remove :
let deleteNote = document.querySelector('.delete-btn');
for (let i = 0; i < note.length; i++) {
  deleteNote.addEventListener('click', e => {
    // let note[i] = e.target.parentElement;
    // rightSection.removeChild(note[i]);
    // noteList.removeChild(note[i]);
    // note[i].parentNode.remove();
    note[i].parentNode.removeChild(note[i]);
    // note[i].remove();
    // break;
    // return false;
    modal[i].classList.add('hidden');
    overlay.classList.add('hidden');
  });
}

// del note

// search :



