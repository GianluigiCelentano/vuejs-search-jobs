Vue.config.devtools = true

const app = new Vue ({
    el: '#app',
    data: {
        jobs: [
            {
              id: 1,
              company: 'Perferendis',
              position: 'Developer',
              description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
              created_at: '5/22/2021',
              logo: 'logo.jpg',
              city: 'Roma',
              contract: 'Full Time'
            },  
            {
              id: 2,
              company: 'Perferendis',
              position: 'Developer',
              description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
              created_at: '5/22/2021',
              logo: 'logo.jpg',
              city: 'Roma',
              contract: 'Full Time'
            },  
            {
              id: 3,
              company: 'Perferendis',
              position: 'Developer',
              description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
              created_at: '5/22/2021',
              logo: 'logo.jpg',
              city: 'Roma',
              contract: 'Full Time'
            },  
            {
              id: 4,
              company: 'Perferendis',
              position: 'Developer',
              description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
              created_at: '5/22/2021',
              logo: 'logo.jpg',
              city: 'Roma',
              contract: 'Full Time'
            },  
            {
              id: 5,
              company: 'Perferendis',
              position: 'Developer',
              description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veniam similique adipisci! Perferendis odio sapiente libero quam deleniti quidem consequuntur adipisci minima non iusto, sunt optio hic. Corporis, laboriosam perferendis?',
              created_at: '5/22/2021',
              logo: 'logo.jpg',
              city: 'Roma',
              contract: 'Full Time'
            },  
        ],
        starred: [1, 2, 3],
        applied: [4, 5]

    },
    methods: {
       addStar: function(index) {
         this.starred.push(index +1)
       },
       addApp: function(index) {
          this.applied.push(index +1)
          this.starred.splice(index, 1)
          if(this.applied.push(index +1)) {
            setTimeout(function(){
              alert("candidatura inviata")
          }, 1000);
          }
       },
       deleteStar: function(index) {
        this.starred.splice(index, 1)
    }
    }
})
