// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(song, queue) {
      this.add(song);
      if(this.length === 1) {
        this.playFirst();
      }
    }, this);
    this.on('ended', function(song, queue){
      this.shift();
      if(this.length > 0) {
        this.playFirst();
      }
    }, this);
    this.on('dequeue', function(song){
      // if song is the current song, remove it, and immediately call
      // play first. else we just remove song and trust song queue,
      // to play the right one next
      if(song === this.at(0)) {
        song.stop();
        this.remove(song);
        this.playFirst();
      } else {
        this.remove(song);
      }
      // this.playFirst();
    }, this);
  },
  playFirst: function() {
    if(this.length !== 0) {
      this.first().play();
    }
  }

});
