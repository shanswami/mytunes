// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();
    // this.listenTo(this.collection, 'add', this.render)
    this.collection.on('add', function(){
      this.render();
    }, this);
    this.collection.on('ended', function(){
      this.render();
    }, this);
    this.collection.on('dequeue', function() {
      this.render();
    }, this);

  },

  render: function() {
    this.$el.children().detach();


    this.$el.html('<th>SongQueue<th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );

  }

});
