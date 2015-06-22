var Bookmark = Backbone.Model.extend({
  idAttribute: 'obectId'
  // defaults: {
  //   "name": "",
  //   "url": "",
  //   "created_at": "new Date"
  // }
});

var BookmarkCollection = Backbone.Collection.extend({
  model: Bookmark,
  url:"https://api.parse.com/1/classes/Bookmark",

  parse: function(response){
    return response.results;
  }
});

export default {Bookmark, BookmarkCollection};
