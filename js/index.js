new Vue({
  el: '#app',
  data: function data() {
    return {
      selected: '',
      posts: [{
        author: '@vFitzgerald',
        title: 'Quod Ducimus Omnis',
        category: 'science'
      }, {
        author: '@mPalmer',
        title: 'Vero Eius Laboriosam Ex Repudiandae',
        category: 'math'
      }, {
        author: '@mDean',
        title: 'Magnam Odit',
        category: 'science'
      }, {
        author: '@tCole',
        title: 'Velit Mollitia Voluptates Assumenda',
        category: 'science'
      }, {
        author: '@jCooper',
        title: 'Eum Commodi Cupiditate',
        category: 'poetry'
      }, {
        author: '@lLamb',
        title: 'Amet',
        category: 'history'
      }, {
        author: '@fMartin',
        title: 'Voluptatem Fuga Asperiores Error',
        category: 'science'
      }, {
        author: '@eHayes',
        title: 'Ipsa Consectetur Repellat Quia',
        category: 'math'
      }, {
        author: '@cCollier',
        title: 'Dolor Nihil Delectus',
        category: 'science'
      }, {
        author: '@cBenson',
        title: 'Labore Ipsum Ad Pariatur',
        category: 'poetry'
      }],
      newTitle: '',
      newAuthor: '',
      newCategory: ''
    };
  },

  methods: {
    addPost: function addPost() {
      var addedPost = new Object({
        author: this.newAuthor,
        title: this.newTitle,
        category: this.newCategory
      });
      this.posts.push(addedPost);
      this.newTitle = '';
      this.newAuthor = '';
      this.newCategory = '';
    }
  },
  computed: {
    filteredByCategory: function filteredByCategory() {
      var filter = new RegExp(this.selected, 'i');
      return this.posts.filter(function (el) {
        return el.category.match(filter);
      });
    }
  }
});