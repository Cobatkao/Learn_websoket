const $loginPage = $('.login.page');
const $chatPage = $('.chat.page');
const $usernameInput = $('.usernameInput');
const $messageInput = $('.messageInput');

const username;

$usernameInput.focus()
const enterUsername = () => {
  if (username) {
    $loginPage.fadeOut('slow', () => {
      console.log('Heading into chat area!')
    })
    $chatPage.show();
  }
}