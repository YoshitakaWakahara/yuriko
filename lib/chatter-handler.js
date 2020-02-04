'use strict';
const fs = require('fs');
const csv = require('csv/lib/sync');

const path = require('path');
const filename = '../data/chatter.csv';
const greetingPath = path.join(__dirname, filename);

module.exports = class chatter {
  constructor() {
    //this.whatTime = this.judgeWhatTime(this.hours);
    this.pattern = 'Greeting';
    this.chatterResponse = this.readChatterData(this.pattern);
  }

  //ToDo ランダムなレスポンスの取得
  //ToDo 思い出の加算　何によって？お話回数？日数？お褒めの言葉？ 
  //ToDo 思い出の現在値評価 
  //ToDo Greeting,Sales,Topの切り分け 

  readChatterData(pattern) {
    const records = csv.parse(fs.readFileSync(greetingPath), { columns: true });
    const result = records.find(record => record.Pattern === pattern);
    console.log(result);
    if ((result || {}).Pattern != null) {
      return result.Response;
    } else {
      return 'null';
    }
  }
}