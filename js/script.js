const logs = [];

let currentTag = 'all';
let isDrag = false;

const bgImages = [
  './images/1.jpg',
  './images/3.jpg',
  './images/5.jpg',
  './images/6.jpg',
  './images/10.jpg',
  './images/13.jpg',
  './images/15.jpg',
  './images/17.jpg',
];

const tags = {
  red: '#ff0000',
  blue: '#0000ff',
  green: '#00ff00',
  yellow: '#ffff00',
};

const users = ['user1', 'user2', 'user3'];

let tickets = [
  {
    id: '0',
    boardIndex: '0',
    title: 'Початкова картка',
    description: 'Lorem ipsum dolor sit amet....',
    expired_date: '2022-01-01',
    tags: 'red',
    user: 'user1'
  }
];

let 
  boards, 
  boardsItems, 
  boardDropdownMenuBtns, 
  lists,
  changeBoardColorBtns, 
  deleteBoardBtns, 
  colorPicker, 
  chooseColorBtn, 
  colorInput, 
  addBtns, 
  addItemBtns, 
  cancelItemBtns, 
  plusBoard, 
  addTicketModal, 
  addTicketForm, 
  modalCloseBtn, 
  listItem, 
  tagsSelect, 
  usersSelect,
  addTagBtn,
  addTagModal,
  tagsSelect2,
  colorInput2,
  chooseColorBtn2,
  tagNameInput,
  deleteTagBtn,
  createField,
  saveDeleteField,
  updateTicketBtn,
  deleteTicketBtn,
  changeBgBtn,
  changeBgModal,
  bgSelect,
  selectBgBtn,
  filterDropDownMenu,
  logsBtn,
  logsModal,
  logList;

const initApplication = () => {
  boards = document.querySelector('.boards');
  boardsItems = document.querySelectorAll('.boards-item');
  boardDropdownMenuBtns = document.querySelectorAll('.boardDropdownMenuBtn');
  lists = document.querySelectorAll('.list');
  changeBoardColorBtns = document.querySelectorAll('.changeBoardColorBtn');
  deleteBoardBtns = document.querySelectorAll('.deleteBoardBtn');
  colorPicker = document.querySelector('.color-picker');
  chooseColorBtn = document.getElementById('chooseColorBtn');
  colorInput = document.getElementById('colorInput');
  addBtns = document.querySelectorAll('.add_btn');
  addItemBtns = document.querySelectorAll('.add_item-btn');
  cancelItemBtns = document.querySelectorAll('.cancel_item-btn');
  plusBoard = document.querySelector('.plusBoard');
  addTicketModal = document.querySelector('.add-ticket-modal');
  addTicketForm = document.querySelector('.addTicketForm');
  modalCloseBtns = document.querySelectorAll('.modalCloseBtn');
  listItem = document.querySelectorAll('.list_item');
  tagsSelect = document.getElementById('tagsSelect');
  usersSelect = document.getElementById('usersSelect');
  addTagBtn = document.getElementById('addTagBtn');
  addTagModal = document.querySelector('.add-tag-modal');
  tagsSelect2 = document.getElementById('tagsSelect2');
  colorInput2 = document.getElementById('colorInput2');
  chooseColorBtn2 = document.getElementById('chooseColorBtn2');
  tagNameInput = document.getElementById('tagNameInput');
  deleteTagBtn = document.getElementById('deleteTagBtn');
  createField = document.getElementById('createField');
  saveDeleteField = document.getElementById('saveDeleteField');
  updateTicketBtn = document.getElementById('updateTicketBtn');
  deleteTicketBtn = document.getElementById('deleteTicketBtn');
  changeBgBtn = document.getElementById('changeBgBtn');
  changeBgModal = document.querySelector('.change-bg-modal');
  bgSelect = document.getElementById('bgSelect');
  selectBgBtn = document.getElementById('selectBgBtn');
  filterDropDownMenu = document.getElementById('filterDropDownMenu');
  logsBtn = document.getElementById('logsBtn');
  logsModal = document.querySelector('.logs-modal');
  logList = document.getElementById('logList');

  // Init settings (add indexes to boards item)
  for (let [index, boardsItem] of boardsItems.entries()) 
    boardsItem.dataset.boardIndex = index;

  // Event listeners
  for (let boardDropdownMenuBtn of boardDropdownMenuBtns)
    boardDropdownMenuBtn.addEventListener('click', boardDropdownMenuBtnClickHandler);

  for (let changeBoardColorBtn of changeBoardColorBtns)
    changeBoardColorBtn.addEventListener('click', changeBoardColorBtnClickHandler);

  for (let deleteBoardBtn of deleteBoardBtns)
    deleteBoardBtn.addEventListener('click', deleteBoardBtnClickHandler);

  for (let addBtn of addBtns)
    addBtn.addEventListener('click', addBtnClickHandler);

  // for (let addItemBtn of addItemBtns) 
  //   addItemBtn.addEventListener('click', addItemBtnClickHandler);

  // for (let cancelItemBtn of cancelItemBtns)
  //   cancelItemBtn.addEventListener('click', cancelItemBtnClickHandler);

  for (let modalCloseBtn of modalCloseBtns)
    modalCloseBtn.addEventListener('click', modalCloseBtnClickHandler);

  chooseColorBtn.addEventListener('click', chooseColorBtnClickHandler);
  plusBoard.addEventListener('click', plusBoardClickHandler);
  addTicketForm.addEventListener('submit', addTicketFormSubmitHandler);
  addTagBtn.addEventListener('click', addTagBtnClickHandler);
  chooseColorBtn2.addEventListener('click', chooseColorBtn2ClickHandler);
  deleteTagBtn.addEventListener('click', deleteTagBtnClickHandler);
  updateTicketBtn.addEventListener('click', updateTicketBtnClickHandler);
  deleteTicketBtn.addEventListener('click', deleteTicketBtnClickHandler);
  changeBgBtn.addEventListener('click', changeBgBtnClickHandler);
  selectBgBtn.addEventListener('click', selectBgBtnClickHandler);
  logsBtn.addEventListener('click', logsBtnClickHandler);

  tagsSelect.innerHTML = '';
  tagsSelect2.innerHTML = '';
  usersSelect.innerHTML = '';
  bgSelect.innerHTML = '';
  filterDropDownMenu.innerHTML = '';
  logList.innerHTML = '';

  const filterLink = document.createElement('a');
  filterLink.classList.add('dropdown-item');
  filterLink.href = '#';
  filterLink.innerText = 'all';
  filterLink.dataset.tag = 'all';
  filterLink.addEventListener('click', filterClickHandler);
  filterDropDownMenu.appendChild(filterLink);

  for (let list of lists)
    list.innerHTML = '';

  for (let tag in tags) {
    const option = document.createElement('option');
    option.value = tag;
    option.innerText = tag;
    tagsSelect.appendChild(option);

    const option2 = option.cloneNode(true);
    option2.style.backgroundColor = tags[tag];
    tagsSelect2.appendChild(option2);

    const a = document.createElement('a');
    a.classList.add('dropdown-item');
    a.href = '#';
    a.innerText = tag;
    a.dataset.tag = tag;
    a.addEventListener('click', filterClickHandler);
    filterDropDownMenu.appendChild(a);
  }

  for (let user of users) {
    const option = document.createElement('option');
    option.value = user;
    option.innerText = user;
    usersSelect.appendChild(option);
  }

  for (let bgImage of bgImages) {
    const option = document.createElement('option');
    option.value = bgImage;
    option.innerText = bgImage;
    bgSelect.appendChild(option);
  }

  for (let ticket of tickets) {
    if (currentTag === 'all')
      createTicket(ticket);
    else
      createTicket(ticket.tags === currentTag ? ticket : null);
  }
};

// Create ticket
const createTicket = (ticket) => {
  if (ticket) {
    const ticketElement = document.createElement('div');
    ticketElement.classList.add('list_item');
    ticketElement.draggable = true;
    ticketElement.innerText = ticket.title;
    ticketElement.dataset.ticketId = ticket.id;
    ticketElement.addEventListener('click', ticketClickHandler);
    ticketElement.addEventListener('mousedown', ticketMouseDownHandler);
    ticketElement.addEventListener('mousemove', ticketMouseMoveHandler);
    ticketElement.addEventListener('mouseup', ticketMouseUpHandler);
  
    const user = document.createElement('div');
    user.innerText = ticket.user;
    user.style.textAlign = 'left';
  
    const tag = document.createElement('div');
    tag.classList.add('tag');
    tag.style.backgroundColor = tags[ticket.tags];
  
    ticketElement.appendChild(user);
    ticketElement.appendChild(tag);
  
    const { boardIndex } = ticket;
    const board = document.querySelector(`.boards-item[data-board-index="${boardIndex}"]`);
    const list = board.querySelector('.list');
    list.appendChild(ticketElement);
  }
};

// Show and hide dropdown menu
const boardDropdownMenuBtnClickHandler = e => {
  e.preventDefault();
  const { target } = e;
  const { parentNode } = target;
  const ul = parentNode.querySelector('ul');
  ul.classList.toggle('show');
};

// Choose board to change color
const changeBoardColorBtnClickHandler = e => {
  e.preventDefault();
  const { target } = e;
  const { parentNode } = target;
  const ul = parentNode.parentNode;
  const { boardIndex } = ul.parentNode.parentNode.parentNode.dataset;
  colorPicker.classList.toggle('show');
  colorPicker.dataset.boardIndex = boardIndex;
  ul.classList.toggle('show');
};

// Change color for chosen board
const chooseColorBtnClickHandler = e => {
  e.preventDefault();
  const { target } = e;
  const { parentNode } = target;
  const { boardIndex } = parentNode.dataset;
  const color = colorInput.value;
  const board = document.querySelector(`.boards-item[data-board-index="${boardIndex}"]`);
  board.style.backgroundColor = color;
  parentNode.classList.toggle('show');
  logs.push('Смена цвета доске');
};

// Delete chosen board
const deleteBoardBtnClickHandler = e => {
  e.preventDefault();
  const { target } = e;
  const { parentNode } = target;
  const board = parentNode.parentNode.parentNode.parentNode.parentNode;
  const boardList = board.parentNode;
  boardList.removeChild(board);
  logs.push('Удалена доска');
};

// Show modal for adding ticket
const addBtnClickHandler = e => {
  e.preventDefault();
  const { target } = e;
  const { parentNode } = target;
  const { boardIndex } = parentNode.dataset;
  // parentNode.querySelector('.form').classList.toggle('show');
  addTicketForm.title.value = '';
  addTicketForm.expired_date.value = '';
  addTicketForm.description.value = '';
  addTicketForm.tags.value = '';
  addTicketForm.user.value = '';
  addTicketModal.dataset.boardIndex = boardIndex;
  addTicketModal.classList.toggle('show');
};

// Add ticket to board
// const addItemBtnClickHandler = e => {
//   e.preventDefault();
//   const { target } = e;
//   const { parentNode } = target;
//   const form = parentNode.parentNode;
//   const list = form.parentNode.querySelector('.list');
//   const textarea = form.querySelector('textarea');

//   const ticket = document.createElement('div');
//   if (textarea.value) {
//     ticket.classList.add('list_item');
//     ticket.draggable = true;
//     ticket.innerText = textarea.value;
//     list.appendChild(ticket);
//   }

//   textarea.value = '';
//   form.classList.toggle('show');
// };

// Cancel adding ticket
// const cancelItemBtnClickHandler = e => {
//   e.preventDefault();
//   const { target } = e;
//   const { parentNode } = target;
//   const form = parentNode.parentNode;
//   const textarea = form.querySelector('textarea');
//   textarea.value = '';
//   form.classList.toggle('show');
// };

// Add new board
const plusBoardClickHandler = e => {
  e.preventDefault();
  const boardsItem = document.createElement('div');
  boardsItem.classList.add('boards-item');

  const boardsItemInner = document.createElement('div');
  boardsItemInner.classList.add('boards-item-inner');

  const span = document.createElement('span');
  span.classList.add('title');
  span.contentEditable = true;
  span.innerText = 'New board';

  const boardDropdownMenu = document.createElement('div');
  boardDropdownMenu.classList.add('board-dropdown-menu');

  const boardDropdownMenuBtn = document.createElement('button');
  boardDropdownMenuBtn.classList.add('boardDropdownMenuBtn');
  boardDropdownMenuBtn.innerText = '...';

  const ul = document.createElement('ul');
  const li1 = document.createElement('li');
  const changeBoardColorBtn = document.createElement('button');
  changeBoardColorBtn.classList.add('changeBoardColorBtn');
  changeBoardColorBtn.innerText = 'Изменить цвет';

  const li2 = document.createElement('li');
  const deleteBoardBtn = document.createElement('button');
  deleteBoardBtn.classList.add('deleteBoardBtn');
  deleteBoardBtn.innerText = 'Удалить';

  li2.appendChild(deleteBoardBtn);
  li1.appendChild(changeBoardColorBtn);
  ul.appendChild(li1);
  ul.appendChild(li2);

  boardDropdownMenu.appendChild(boardDropdownMenuBtn);
  boardDropdownMenu.appendChild(ul);

  boardsItemInner.appendChild(span);
  boardsItemInner.appendChild(boardDropdownMenu);

  const list = document.createElement('div');
  list.classList.add('list');

  const form = document.createElement('div');
  form.classList.add('form');

  const textarea = document.createElement('textarea');
  textarea.classList.add('textarea');
  textarea.placeholder = 'Ведіть назву цієї картки';

  const buttons = document.createElement('div');
  buttons.classList.add('buttons');

  const addItemBtn = document.createElement('button');
  addItemBtn.classList.add('add_item-btn');
  addItemBtn.innerText = 'Додати картку';

  const cancelItemBtn = document.createElement('button');
  cancelItemBtn.classList.add('cancel_item-btn');
  cancelItemBtn.innerText = 'Відміна';

  buttons.appendChild(addItemBtn);
  buttons.appendChild(cancelItemBtn);

  form.appendChild(textarea);
  form.appendChild(buttons);

  const addBtn = document.createElement('div');
  addBtn.classList.add('add_btn');

  const span2 = document.createElement('span');
  span2.innerText = '+';

  addBtn.appendChild(span2);
  addBtn.innerHTML += 'Додати картку';

  boardsItem.appendChild(boardsItemInner);
  boardsItem.appendChild(list);
  boardsItem.appendChild(form);
  boardsItem.appendChild(addBtn);

  boards.appendChild(boardsItem);

  initApplication();
  logs.push('Созданв доска');
};

// Close modal
const modalCloseBtnClickHandler = e => {
  e.preventDefault();
  const { target } = e;
  const { parentNode } = target;
  parentNode.classList.toggle('show');
  createField.classList.remove('hide');
  saveDeleteField.classList.remove('show');
};

// Add ticket to board
const addTicketFormSubmitHandler = e => {
  e.preventDefault();
  const { target } = e;
  const { parentNode } = target;
  const { boardIndex } = parentNode.dataset;
  const id = (+tickets[tickets.length - 1].id + 1).toString();

  const ticket = {
    id,
    boardIndex,
    title: target.title.value,
    description: target.description.value,
    expired_date: target.expired_date.value,
    tags: target.tags.value,
    user: target.user.value
  };

  if (ticket.title && ticket.description && ticket.expired_date && ticket.tags && ticket.user) {
    tickets.push(ticket);
    createTicket(ticket);
    parentNode.classList.toggle('show');
    logs.push('Создан тикет');
  }
};

// Update ticket (show modal)
const ticketClickHandler = e => {
  e.preventDefault();
  const { target } = e;
  const { ticketId } = target.dataset;
  const { parentNode } = target;

  createField.classList.add('hide');
  saveDeleteField.classList.add('show');

  const ticket = tickets.filter(ticket => ticket.id === ticketId)[0];
  if (ticket) {
    addTicketModal.classList.toggle('show');
    addTicketForm.title.value = ticket.title;
    addTicketForm.expired_date.value = ticket.expired_date;
    addTicketForm.description.value = ticket.description;
    addTicketForm.tags.value = ticket.tags;
    addTicketForm.user.value = ticket.user;
    updateTicketBtn.dataset.ticketId = ticket.id;
    deleteTicketBtn.dataset.ticketId = ticket.id;
  }
};

// Update ticket
const updateTicketBtnClickHandler = e => {
  e.preventDefault();

  const { target } = e;
  const { ticketId } = target.dataset;

  tickets = tickets.map(ticket => {
    if (ticket.id === ticketId) {
      const newTicket = {
        id: ticketId,
        boardIndex: ticket.boardIndex,
        title: addTicketForm.title.value,
        description: addTicketForm.description.value,
        expired_date: addTicketForm.expired_date.value,
        tags: addTicketForm.tags.value,
        user: addTicketForm.user.value
      };

      return newTicket;
    } else {
      return ticket;
    }
  });

  addTicketForm.title.value = '';
  addTicketForm.expired_date.value = '';
  addTicketForm.description.value = '';
  addTicketForm.tags.value = '';
  addTicketForm.user.value = '';
  addTicketModal.classList.toggle('show');
  createField.classList.remove('hide');
  saveDeleteField.classList.remove('show');
  initApplication();
  logs.push('Обновление тикета');
};

// Delete ticket
const deleteTicketBtnClickHandler = e => {
  e.preventDefault();
  const { target } = e;
  const { ticketId } = target.dataset;

  tickets = tickets.filter(ticket => ticket.id !== ticketId);

  addTicketForm.title.value = '';
  addTicketForm.expired_date.value = '';
  addTicketForm.description.value = '';
  addTicketForm.tags.value = '';
  addTicketForm.user.value = '';
  addTicketModal.classList.toggle('show');
  createField.classList.remove('hide');
  saveDeleteField.classList.remove('show');
  initApplication();
  logs.push('Удаление тикета');
};

// Show add tag modal
const addTagBtnClickHandler = e => {
  e.preventDefault();
  addTagModal.classList.toggle('show');
};

// Add new tag
const chooseColorBtn2ClickHandler = e => {
  e.preventDefault();
  const tagName = tagNameInput.value;
  const color = colorInput2.value;
  tags[tagName] = color;
  initApplication();
  deleteTagBtn.disabled = false;
  logs.push('Добавлен тег');
};

// Delete tag
const deleteTagBtnClickHandler = e => {
  e.preventDefault();
  const { target } = e;

  if (tagsSelect2.length > 2) {
    const tag = tagsSelect2.value;
    delete tags[tag];
    initApplication();
    if (tagsSelect2.length <= 2)
      target.disabled = true;
  } else {
    target.disabled = true;
  }

  logs.push('Удален тег');
};

// Show modal to change bg image
const changeBgBtnClickHandler = e => {
  e.preventDefault();
  changeBgModal.classList.toggle('show');
};

// Change background image
const selectBgBtnClickHandler = e => {
  e.preventDefault();
  const image = bgSelect.value;
  document.body.style.backgroundImage = `url(${image})`;
  changeBgModal.classList.toggle('show');
  logs.push('Смена фона приложения');
};

// Show logs
const logsBtnClickHandler = e => {
  e.preventDefault();
  logList.innerHTML = '';
  logsModal.classList.toggle('show');
  logs.push('Просмотр логов');
  for (let log of logs) {
    const li = document.createElement('li');
    li.innerText = log;
    logList.appendChild(li);
  }
};

// Filter by tag
const filterClickHandler = e => {
  e.preventDefault();
  const { target } = e;
  const { tag } = target.dataset;
  currentTag = tag;
  initApplication();
  logs.push('Фильтр по тегу');
};

// Ticket mouse down
const ticketMouseDownHandler = e => {
  e.preventDefault();
  const { target } = e;
  isDrag = true;
  setTimeout(() => {
    if (isDrag) {
      if (target.className === 'list_item') {
        target.style.position = 'absolute';
        target.style.left = e.pageX - target.offsetWidth / 2 + 'px';
        target.style.top = e.pageY - target.offsetHeight / 2 + 'px';
        document.body.appendChild(target);
      }
    } else {
      ticketClickHandler(e);
    }
  }, 100);
};

// Ticket mouse move
const ticketMouseMoveHandler = e => {
  e.preventDefault();
  const { target } = e;
  if (target.className === 'list_item') {
    if (isDrag) {
      target.style.left = e.pageX - target.offsetWidth / 2 + 'px';
      target.style.top = e.pageY - target.offsetHeight / 4 + 'px';
    }
  }
}

// Ticket mouse up
const ticketMouseUpHandler = e => {
  e.preventDefault();
  const { target } = e;
  isDrag = false;
  
  for (let element of document.elementsFromPoint(e.pageX, e.pageY)) {
    if (element.className === 'list') {
      const { boardIndex } = element.parentNode.dataset;
      if (target.className === 'list_item') {
        const { ticketId } = target.dataset;
        element.appendChild(target);
        target.style.position = 'static';
        for (let ticket of tickets) {
          if (ticket.id === ticketId) {
            ticket.boardIndex = boardIndex;
          }
        }
      }
    }
  }
};

initApplication();
