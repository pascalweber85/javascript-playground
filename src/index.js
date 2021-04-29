const buttonHome = getElement('.button-home')
const buttonBookmarks = getElement('.button-bookmarks')
const buttonCreate = getElement('.button-create')
const buttonSettings = getElement('.button-settings')

const homePage = getElement('.page-home')
const bookmarksPage = getElement('.page-bookmarks')
const createPage = getElement('.page-create')
const settingsPage = getElement('.page-settings')

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

function getElement(selector) {
  return document.querySelector(selector)
}
