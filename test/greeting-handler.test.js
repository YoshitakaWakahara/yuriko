'use strict';
const greeting = require('../lib/greeting-handler');
const assert = require('assert');

//Create Instance for Test
const res = new greeting();

//Test1: judgeWhatTime()
//@Param: hours --> new Date().getHours()
//@Return: String 
assert.equal(res.judgeWhatTime(0), 'midnight');
assert.equal(res.judgeWhatTime(4), 'midnight');
assert.equal(res.judgeWhatTime(5), 'morning');
assert.equal(res.judgeWhatTime(11), 'morning');
assert.equal(res.judgeWhatTime(12), 'noon');
assert.equal(res.judgeWhatTime(13), 'noon');
assert.equal(res.judgeWhatTime(14), 'afternoon');
assert.equal(res.judgeWhatTime(16), 'afternoon');
assert.equal(res.judgeWhatTime(17), 'evening');
assert.equal(res.judgeWhatTime(19), 'evening');
assert.equal(res.judgeWhatTime(20), 'night');
assert.equal(res.judgeWhatTime(24), 'night');
assert.equal(res.judgeWhatTime(25), 'null');
assert.equal(res.judgeWhatTime(-1), 'null');

//Test2: readGreetingData() 
//@Param: whatTime -> return value of judgeWhatTime() 
//@Return: String 
assert.equal(res.readGreetingData('midnight'), '夜更かしは厳禁ですよ、プロデューサーさん！')
assert.equal(res.readGreetingData('morning'), 'おはようございます、プロデューサーさん♪')
assert.equal(res.readGreetingData('noon'), 'お昼ですね、今日はどんなご飯を食べましょうか♪')
assert.equal(res.readGreetingData('afternoon'), '今日も後ちょっと、一緒に頑張りましょうね♪')
assert.equal(res.readGreetingData('evening'), 'お仕事お疲れ様でした、プロデューサーさん♪一緒に晩ごはんでもどうですか♪')
assert.equal(res.readGreetingData('night'), 'おやすみなさい、プロデューサーさん♪明日も一杯お話しましょうね♪')
assert.equal(res.readGreetingData('null'), 'null')

console.log('Complete all tests without error');