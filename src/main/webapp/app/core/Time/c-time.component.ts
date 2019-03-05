import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';

export default {
  data() {
    return {
      dayOfWeek: null,
      dayOfMonth: null,
      month: null,
      year: null,
      hour: null,
      minute: null,
      second: null
    };
  },
  computed: {
    getTime: function() {
      axios.get('http://meegan.me:8089/api/date').then(response => {
        this.dayOfWeek = response.data.dayOfWeek;
        this.dayOfMonth = response.data.dayOfMonth;
        this.month = response.data.month;
        this.year = response.data.year;
        this.hour = response.data.hour;
        this.minute = response.data.minute;
        this.second = response.data.second;
      });
      let dateFormatted = '';
      dateFormatted +=
        this.dayOfWeek +
        ' ' +
        this.dayOfMonth +
        '-' +
        this.month +
        '-' +
        this.year +
        ' ' +
        this.hour +
        ':' +
        this.minute +
        ':' +
        this.second +
        ' ';
      return dateFormatted;
    }
  },
  methods: {
    getCurrentTime: function(event) {
      if (event) {
        axios.get('http://meegan.me:8089/api/date').then(response => {
          this.dayOfWeek = response.data.dayOfWeek;
          this.dayOfMonth = response.data.dayOfMonth;
          this.month = response.data.month;
          this.year = response.data.year;
          this.hour = response.data.hour;
          this.minute = response.data.minute;
          this.second = response.data.second;
        });
        let dateFormatted = '';
        dateFormatted += this.year + '-' + this.month + '-' + this.day + ' ' + this.hours + ':' + this.minutes + ':' + this.seconds + ' ';
        return dateFormatted;
      }
    }
  }
};
