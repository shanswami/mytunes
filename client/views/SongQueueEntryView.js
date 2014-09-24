// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  templage: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),
  events: {

  },

  initialize: function(){


  },
  render: function() {
    console.log(this.model.attributes)
    return this.$el.html(this.template(this.model.attributes));
  }
  // your code here!
});
// SongQueueEntryView.prototype.constructor = SongQueueEntryView;
