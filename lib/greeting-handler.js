'use strict';
const fs = require('fs');
const csv = require('csv');

const path = require('path');
const filename = '../data/greeting.csv';
const greetingPath = path.join(__dirname, filename);

module.exports = class greeting {
  constructor() {
    this.hours = new Date().getHours();
    this.whatTime = this.judgeTime(this.hours);
    this.greetingPattern = this.readGreetingData(this.whatTime);
    console.log('this.greetingPattern= ' + this.greetingPattern);
  }

  judgeTime(hours) {
    if (hours >= 0 && hours <= 4) {
      return "midnight";
    } else if (hours >= 5 && hours <= 11) {
      return "morning";
    } else if (hours >= 12 && hours <= 13) {
      return "noon";
    } else if (hours >= 14 && hours <= 16) {
      return "afternoon";
    } else if (hours >= 17 && hours <= 19) {
      return "evening";
    } else if (hours >= 20 && hours <= 24) {
      return "night";
    }
  }

  readGreetingData(whatTime, callback) {
    const parser = csv.parse({ columns: true });
    const readableStream = fs.createReadStream(greetingPath, { encoding: 'utf-8' });
    readableStream.pipe(parser);

    const response = [];
    let result = '';

    /*
    parser.transform((row, index) => {
      console.log(row[0]);
    })
    */
    parser.on('readable', () => {
      let record;
      while (record = parser.read()) {
        /*
        if (record['Time'] === whatTime) {
          response.push(record.Data);
          break;
        }
        */
      }
    });
    parser.on('data', (record) => {
      while (record = parser.read()) {
        if (record['Time'] === whatTime) {
          response.push(record.Data);
          console.log('data= ' + response);
          break;
        }
      }
    });

    parser.on('end', () => {
      /*
      result = response[0];
      console.log('end= ' + result);
      return result;
      */
     return response[0];
    });
    return result;
  }
}