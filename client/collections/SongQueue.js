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
      this.at(0).trigger('ended', this.model);

    }, this);
  },
  playFirst: function() {
    this.first().play();
  }

});
