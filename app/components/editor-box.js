import Ember from 'ember';

const {
  set,
  Logger
} = Ember

export default Ember.Component.extend({

  postContent: null,
  contentHeight: null,

  init() {
    this._super(...arguments);
    this.set('postContent', (() => {
      const textArray = ['Business','Microsoft','Architecture','Technology', 'Value'];
      const numberOfWords = Math.floor((Math.random() * 300) + 50);
      let text = '';
      for(let i=0; i < numberOfWords; i++){
        const x = Math.floor(Math.random() * textArray.length);
        text = text.concat(textArray[x], ' ');
      }
      return text;
    })());
    this.set('contentHeight', (() => {
      const text = this.get('postContent');
      const numberOfWords = text.split(' ').length;
      return numberOfWords * 2
    })());

  },

  editingDisabled: false,

  toolbarOptions: {
    style: false,
    insert: {
      picture: false
    },
    help: true
  },

  callbackOptions: {
    onInit: function() {
      Logger.debug('Summernote is launched');
    },
    onEnter: function() {
      Logger.debug('Enter/Return key pressed');
    },
    onPaste: function(e) {
      Logger.debug(`Called event paste e: ${JSON.stringify(e)}`);
    },
  },

  actions: {

    onContentChange(text) {
      Logger.debug(`onContentChange action... text:${text}`);
      set(this, 'postContent', text);
    },

    rerenderCheck(text) {
      Logger.debug(`rerenderCheck action... text:${text}`);
      set(this, 'postContent', text);
    }
  }

});
