'use strict';
const fs = require('fs');
const csv = require('csv/lib/sync');

const path = require('path');
const filename = '../data/memory.csv';
const memoryPath = path.join(__dirname, filename);

module.exports = class memory{
  constructor() {
    //this.whatTime = this.judgeWhatTime(this.hours);
    this.userID = '';
    this.memoryData = this.judgeMemoryData(this.pattern);
  }

  //ToDo 思い出の加算　お褒めの言葉により
  //ToDo CSVの探索(by Users.ID)->個人のレコードなければ作る、あれば回数増やす
  //ToDo 思い出のデータベース準備、人ごと "Users.ID","\d"

  judgeMemoryData(userID) {
    const records = csv.parse(fs.readFileSync(memoryPath), { columns: true });
    const result = records.find(record => record.User === userID);
    console.log(userID);
    if ((result || {}).User != null) {
      //Memory++
      return result.Response;
    } else {
      //Create User & Memory
      console.log('not found');
      return 'null';
    }
  }
}