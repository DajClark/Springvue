import axios from 'axios';

export default {
  data() {
    return {
      tasks: [],
      tname: '',
      detail: '',
      priority: 0
    };
  },

  created() {
    this.getCurrentTasks(true);
  },

  methods: {
    getCurrentTasks: function(event) {
      if (event) {
        axios.get('http://meegan.me:8089/api/tasks').then(response => {
          this.tasks = response.data;
        });
        return this.tasks;
      }
    },

    sub: function(event) {
      if (event) {
        if (this.tname != '' || this.details != '') {
          axios
            .post('http://meegan.me:8089/api/tasks', {
              taskName: this.tname.toString(),
              taskDetails: this.detail.toString(),
              taskPriority: parseInt(this.priority)
            })
            .then(response => {
              this.getCurrentTasks(true);
            })
            .catch(error => {});
        } else {
          alert('Please enter a valid task');
        }
        event.preventDefault();
      }
    }
  }
};
