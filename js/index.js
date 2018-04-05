new Vue({
  el: '#app',
  data() {
    return {
      selected: '',
      posts: [
        {
          author: 'Jeremiah Ogbomo',
          title: 'Nativescript for Beginners',
          category: 'nativescript'
        },
        {
          author: 'Toyin Ariyo',
          title: 'Getting Started with React Native',
          category: 'react'
        },
        {
          author: 'Kevin Constantine',
          title: 'Android for Experts',
          category: 'android'
        },
        {
          author: 'Bunmi Adekunle',
          title: 'React/Redux for dummies',
          category: 'react'
        },
        {
          author: 'Lawal Afeez',
          title: 'Swift for intermediate',
          category: 'swift'
        },
        {
          author: 'Ndubisi Anyaoku',
          title: 'Nativescript in View',
          category: 'nativescript'
        },
        {
          author: 'Babatunde Familusi',
          title: 'Becomming a Devops Engineer',
          category: 'devops'
        },
        {
          author: 'Lawal Afees',
          title: 'Payment integrations in Swift',
          category: 'swift'
        },
        {
          author: 'Jerimiah Ogbomo',
          title: 'Nativescript & Angular 4',
          category: 'nativescript'
        },
        {
          author: 'Tosin Ibidapo-Obe',
          title: 'Implementing PayStack on Android',
          category: 'android'
        }
      ],
      newTitle: '',
      newAuthor: '',
      newCategory: '',
    }
  },
  methods: {
    addPost() {
      let addedPost = new Object({
        author: this.newAuthor,
        title: this.newTitle,
        category: this.newCategory
      });
      this.posts.push(addedPost)
      this.newTitle = '';
      this.newAuthor = '';
      this.newCategory = '';
    }
  },
  computed: {
    filteredByCategory() {
      let filter = new RegExp(this.selected, 'i')
      return this.posts.filter(el => el.category.match(filter))
    }
  }
})