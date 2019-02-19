import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';

export default {
  data() {
    return {
      time: null
    };
  },
  computed: {
    getTime: function() {
      axios.get('http://worldclockapi.com/api/json/utc/now').then(response => {
        this.time = response.data.currentDateTime;
      });
      return this.time;
    }
  }
};
