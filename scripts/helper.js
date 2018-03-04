class Helper {
  playPauseAndUpdate(song) {
    player.playPause(song);
    setInterval( () => {
      if (player.playState !== 'playing') { return; }
      const duration = player.getDuration();
        $('#time-control .total-time').text( player.prettyTime(duration));
    },1000);
  }
}

const helper = new Helper();
