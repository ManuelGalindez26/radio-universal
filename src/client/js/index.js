import $ from 'jquery'
import menu from 'src/client/js/menu'
import chat from 'src/client/js/chat'
import userMenu from 'src/client/js/userMenu'
import login from 'src/client/js/login'
import requestSong from 'src/client/js/requestSong'
import loginDropdown from 'src/client/js/loginDropdown'

$(() => {
  const $buttonMenu = $('#btn-menu')
  const $buttonMore = $('#btn-more')
  const $buttonLogin = $('#btn-login')
  const $buttonReqSong = $('#btn-reqSong')
  const $opacityBody = $('#opacity')
  const $opacityChat = $('.Chat-opacity')
  const $avatar = $('#avatar')
  const $body = $('body')

  // events
  $buttonMenu.click(menu.show)
  $buttonMore.click(chat.leftShow)
  $buttonLogin.click(login.show)
  $buttonReqSong.click(requestSong.show)
  $opacityChat.click(chat.leftHide)
  $avatar.click(userMenu.toggle)
  $body.click(userMenu.hide)
  $opacityBody.click(ev => {
    menu.hide()
    login.hide()
    requestSong.hide()
  })
  
})