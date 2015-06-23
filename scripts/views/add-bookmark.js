export default Backbone.View.extend({
  template: JST['bookmark-add'],

  events: {
    'click .add-bookmark': 'addBookmark',
    'submit .bookmark-add-form': 'saveBookmark',
    'click .cancel-edit': 'cancelEdit'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model));
  },

  addBookmark: function(e) {
    e.preventDefault();
    $('.bookmark-add-form').show();
    $('.add-bookmark').hide();
  },

  saveBookmark: function(e) {
    e.preventDefault();
    var title = this.$('.bookmark-title').val();
    var url = this.$('.bookmark-url').val();
    this.collection.create({
      title: title,
      url: url,
    });
    this.$('.bookmark-add-form').hide();
    $('.add-bookmark').show();
  },

  cancelEdit: function(e) {
    this.$('.bookmark-add-form').hide();
    $('.add-bookmark').show();
  }

});
