const buttonHome = document.querySelector('.button-home')
const buttonBookmarks = document.querySelector('.button-bookmarks')
const buttonCreate = document.querySelector('.button-create')
const buttonSettings = document.querySelector('.button-settings')
const homePage = document.querySelector('.page-home')
const bookmarksPage = document.querySelector('.page-bookmarks')
const createPage = document.querySelector('.page-create')
const settingsPage = document.querySelector('.page-settings')

buttonHome.addEventListener('click', navigateToHome)
buttonBookmarks.addEventListener('click', navigateToBookmarks)
buttonCreate.addEventListener('click', navigateToCreate)
buttonSettings.addEventListener('click', navigateToSettings)

function navigateToHome() {
  changePage(homePage)
  selectButton(buttonHome)
}

function navigateToBookmarks() {
  changePage(bookmarksPage)
  selectButton(buttonBookmarks)
}

function navigateToCreate() {
  changePage(createPage)
  selectButton(buttonCreate)
}

function navigateToSettings() {
  changePage(settingsPage)
  selectButton(buttonSettings)
}

function changePage(page) {
  hideAllPages()
  page.classList.remove('hidden')
}

function selectButton(button) {
  deactivateButtons()
  button.classList.add('active')
}

function hideAllPages() {
  homePage.classList.add('hidden')
  bookmarksPage.classList.add('hidden')
  createPage.classList.add('hidden')
  settingsPage.classList.add('hidden')
}
function deactivateButtons() {
  buttonHome.classList.remove('active')
  buttonBookmarks.classList.remove('active')
  buttonCreate.classList.remove('active')
  buttonSettings.classList.remove('active')
}
