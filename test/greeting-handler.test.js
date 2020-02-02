'use strict';
const greeting = require('../lib/greeting-handler');
const assert = require('assert');

//インスタンス生成
const res = new greeting();

//時間判定のテスト
assert.equal(res.judgeTime(0), 'midnight');
assert.equal(res.judgeTime(4), 'midnight');
assert.equal(res.judgeTime(5), 'morning');
assert.equal(res.judgeTime(11), 'morning');
assert.equal(res.judgeTime(12), 'noon');
assert.equal(res.judgeTime(13), 'noon');
assert.equal(res.judgeTime(14), 'afternoon');
assert.equal(res.judgeTime(16), 'afternoon');
assert.equal(res.judgeTime(17), 'evening');
assert.equal(res.judgeTime(19), 'evening');
assert.equal(res.judgeTime(20), 'night');
assert.equal(res.judgeTime(24), 'night');

//レスポンスパターンのテスト
assert.equal(res.getGreeting('midnight'), '夜更かしは厳禁ですよ、プロデューサーさん！')
assert.equal(res.getGreeting('morning'), 'おはようございます、プロデューサーさん♪')
assert.equal(res.getGreeting('noon'), 'お昼ですね、今日はどんなご飯を食べましょうか♪')
assert.equal(res.getGreeting('afternoon'), '今日も後ちょっと、一緒に頑張りましょうね♪')
assert.equal(res.getGreeting('evening'), 'お仕事お疲れ様でした、プロデューサーさん♪一緒に晩ごはんでもどうですか♪')
assert.equal(res.getGreeting('night'), 'おやすみなさい、プロデューサーさん♪明日も一杯お話しましょうね♪')

console.log('テストが正常に完了しました');