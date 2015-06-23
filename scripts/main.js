import BookmarkListView from './views/bookmarkList';
import AddBookmarkView from './views/add-bookmark';

import {BookmarkCollection} from './models/bookmarks';

import './ajax-config';

(function(){
  'use strict';

  $(document).ready(function(){
    var bookmarks = new BookmarkCollection();
    bookmarks.fetch();
    var listView = new BookmarkListView({collection: bookmarks});
    var addView = new AddBookmarkView({collection: bookmarks});

    $('.add-bookmark-container').html(addView.el);
    $('.bookmark-container').html(listView.el);



  });
})();
