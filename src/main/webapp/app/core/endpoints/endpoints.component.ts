import axios from 'axios';

export default {
  data() {
    return {
      endpointdata: [],
      resourcename: '',
      resourcedetails: '',
      resourceget: ''
    };
  },

  created() {
    this.getCurrentEndpoints(true);
  },

  methods: {
    getCurrentEndpoints: function(event) {
      if (event) {
        axios.get('http://meegan.me:8089/api/resources').then(response => {
          this.endpointdata = response.data;
        });
        return this.endpointdata;
      }
    },

    sub: function(event) {
      if (event) {
        if (this.resourcename != '' || this.resourcedetails != '') {
          axios
            .post('http://meegan.me:8089/api/resources', {
              resourceName: this.resourcename.toString(),
              resourceDetails: this.resourcedetails.toString(),
              resourceGet: this.resourceget.toString()
            })
            .then(response => {
              this.getCurrentEndpoints(true);
            })
            .catch(error => {});
        } else {
          alert('Please enter a valid resource');
        }
        event.preventDefault();
      }
    },
    addnew() {
      this.sub(true), this.closeModal(), this.getCurrentEndpoints(true);
    },
    displayModal() {
      document.getElementById('modalAdd').style.display = 'block';
    },
    closeModal() {
      document.getElementById('modalAdd').style.display = 'none';
    }
  }
};
