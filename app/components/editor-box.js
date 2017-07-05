import Ember from 'ember';

export default Ember.Component.extend({

  postContent: null,
  contentHeight: Ember.computed('postContent', function() {
    if (this.postContent) {
      const text = this.get('postContent');
      const numberOfWords = text.split(' ').length;
      return numberOfWords * 2;
    }
    return 0;
  }),

  _createPostContent : () => {
    const textArray = ['Business','Microsoft','Architecture','Technology', 'Value'];
    const numberOfWords = Math.floor((Math.random() * 300) + 50);
    let text = '';
    for(let i=0; i < numberOfWords; i++){
      const x = Math.floor(Math.random() * textArray.length);
      text = text.concat(textArray[x], ' ');
    }
    return text;
  },

  init() {
    this._super(...arguments);
    this.set('postContent', this._createPostContent());
  }

});
