'use strict';
const fs = require('fs');
const csv = require('csv/lib/sync');

const path = require('path');
const filename = '../data/greeting.csv';
const greetingPath = path.join(__dirname, filename);

module.exports = class greeting {
  constructor() {
    this.hours = new Date().getHours();
    this.whatTime = this.judgeWhatTime(this.hours);
    this.greetingPattern = this.readGreetingData(this.whatTime);
  }

  judgeWhatTime(hours) {
    if (hours >= 0 && hours <= 4) {
      return 'midnight';
    } else if (hours >= 5 && hours <= 11) {
      return 'morning';
    } else if (hours >= 12 && hours <= 13) {
      return 'noon';
    } else if (hours >= 14 && hours <= 16) {
      return 'afternoon';
    } else if (hours >= 17 && hours <= 19) {
      return 'evening';
    } else if (hours >= 20 && hours <= 24) {
      return 'night';
    } else {
      return 'null';
    }
  }

  readGreetingData(whatTime) {
    const records = csv.parse(fs.readFileSync(greetingPath), { columns: true });
    const result = records.find(record => record.Time === whatTime);
    if ((result || {}).Greeting != null) {
      return result.Greeting;
    } else {
      return 'null';
    }
  }
}