import BookmarkListView from './views/bookmarkList';

import {BookmarkCollection} from './models/bookmarks';

import './ajax-config';

(function(){
  'use strict';

  $(document).ready(function(){
    var bookmarks = new BookmarkCollection();
    bookmarks.fetch();
    var listView = new BookmarkListView({collection: bookmarks});
    $('body').prepend(listView.el);



  });
})();
