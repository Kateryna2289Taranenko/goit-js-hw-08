import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const PLAYER_TIME_KEY = 'videoplayer-current-time';
player.on(
  'timeupdate',
  throttle(function (time) {
    localStorage.setItem(PLAYER_TIME_KEY, time.seconds);
  })
);

const saveTime = localStorage.getItem(PLAYER_TIME_KEY);
if (saveTime) {
  player.setCurrentTime(saveTime);
}
