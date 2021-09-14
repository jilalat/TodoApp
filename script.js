'use strict';



// modals & overlay
let modal = document.querySelectorAll('.modal');
let overlay = document.querySelector('.overlay');
let closeModalBtn = document.querySelectorAll('.close-modal');
let cancelModalBtn = document.querySelectorAll('.cancel-modal');
let closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  cancelModalBtn.classList.add('hidden');
};
let pressEscape = esc => {
  if (esc.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
};

// modal.forEach(ev => ev.addEventListener('click', closeModal));
// document.addEventListener('keydown', pressEscape);
// closeModalBtn.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);
// cancelModalBtn.addEventListener('click', closeModal);

// let modal = document.querySelector('.modal');
// let showModalBtn = document.querySelectorAll('.btn--show-modal');

// let section1 = document.getElementById('section--1');

// let scrollToBtn = document.querySelector('.btn--scroll-to');

// let toggleModal = () => {
//   modal.classList.toggle('hidden');
//   overlay.classList.toggle('hidden');
// };

// showModalBtn.forEach(Btn => Btn.addEventListener('click', toggleModal));

// overlay.addEventListener('click', toggleModal);
// closeModalBtn.addEventListener('click', toggleModal);
// document.addEventListener('keydown', pressEscape);
// scrollToBtn.addEventListener('click', () => {
//   section1.scrollIntoView({ behavior: 'smooth' });
// });

//top section :
let addSearchDiv = document.querySelector('.add-and-search-icons');
let add = document.querySelector('.add');
let search = document.querySelector('.search');

let addSection = document.querySelector('.add-section');
let addNote = document.querySelector('.add-note');
let submitBtn = document.querySelector('.submit-btn');

let searchSection = document.querySelector('.search-section');
let searchNote = document.querySelector('.search-note');
let loupe = document.querySelector('.loupe');

add.addEventListener('mouseenter', () => {
  addSearchDiv.classList.toggle('hidden');
  addSection.classList.toggle('hidden');
  addNote.classList.toggle('hidden');





  if (addNote.length === 0) {
    submitBtn.classList.remove('hidden');
  }

});
addSection.addEventListener('mouseleave', () => {
  addSearchDiv.classList.toggle('hidden');
  addSection.classList.toggle('hidden');
  addNote.classList.toggle('hidden');



});
search.addEventListener('mouseenter', () => {
  addSearchDiv.classList.toggle('hidden');
  searchSection.classList.toggle('hidden');
  searchNote.classList.toggle('hidden');
  loupe.classList.toggle('hidden');
});
searchSection.addEventListener('mouseleave', () => {
  addSearchDiv.classList.toggle('hidden');
  searchSection.classList.toggle('hidden');
  searchNote.classList.toggle('hidden');
  loupe.classList.toggle('hidden');
});

// greeting date :

let date = document.querySelector('.date');
// date.textContent = ""

//notes hover :
let notes = document.getElementsByClassName('notes');


// check Notes
let uncheckedIcon = document.querySelectorAll('.unchecked-icon');
let checkedIcon = document.querySelectorAll('.checked-icon');
let lineThrough = document.querySelectorAll('.line-through');
let tasks = document.querySelectorAll('.task');
for (let i = 0; i < notes.length; i++) {
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

// Edit Notes
// let editNoteHover = () => {
//   blackEditIcon[j].classList.toggle('hidden');
//   colorEditIcon.classList.toggle('hidden');
// };
// let editNote = () => {
//   editNotesModal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// blackEditIcon.addEventListener('mouseenter', editNoteHover);
// colorEditIcon.addEventListener('mouseleave', editNoteHover);
// colorEditIcon.addEventListener('click', editNote);
let blackEditIcon = document.querySelectorAll('.edit-icon');
let colorEditIcon = document.querySelectorAll('.color-edit-icon');
let editNotesModal = document.querySelector('.update-Notes-modal');

for (let j = 0; j < blackEditIcon.length; j++) {
  blackEditIcon[j].addEventListener('mouseenter', () => {
    blackEditIcon[j].classList.toggle('hidden');
    colorEditIcon[j].classList.toggle('hidden');
  });
  colorEditIcon[j].addEventListener('mouseleave', () => {
    blackEditIcon[j].classList.toggle('hidden');
    colorEditIcon[j].classList.toggle('hidden');
  });
  colorEditIcon[j].addEventListener('click', () => {
    editNotesModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

// // Delete Notes
let deleteIcon = document.querySelectorAll('.delete-icon');
let redDeleteIcon = document.querySelectorAll('.red-delete-icon');
let deleteNotesModal = document.querySelector('.delete-Notes-modal');

for (let j = 0; j < blackEditIcon.length; j++) {
  notes[j].addEventListener('mouseenter', () => {
    blackEditIcon[j].classList.toggle('hidden');
    deleteIcon[j].classList.toggle('hidden');
  });
  notes[j].addEventListener('mouseleave', () => {
    blackEditIcon[j].classList.toggle('hidden');
    deleteIcon[j].classList.toggle('hidden');
  });
  deleteIcon[j].addEventListener('mouseenter', () => {
    deleteIcon[j].classList.toggle('hidden');
    redDeleteIcon[j].classList.toggle('hidden');
  });
  redDeleteIcon[j].addEventListener('mouseleave', () => {
    deleteIcon[j].classList.toggle('hidden');
    redDeleteIcon[j].classList.toggle('hidden');
  });
  redDeleteIcon[j].addEventListener('click', () => {
    deleteNotesModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

// let deleteNoteHover = () => {
//   deleteIcon.classList.toggle('hidden');
//   redDeleteIcon.classList.toggle('hidden');
// };
// let showDeleteNotesModal = () => {
//   deleteNotesModal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
//   // closeModal();
// };

// let deleteNote = () => {};

// deleteIcon.forEach(eve => eve.addEventListener('click', deleteNoteHover));

// deleteIcon.addEventListener('mouseenter', deleteNoteHover);
// redDeleteIcon.addEventListener('mouseleave', deleteNoteHover);
// redDeleteIcon.addEventListener('click', showDeleteNotesModal);
