"use strict";
function generateEmotionsJSON(emotions) {
    var splits = emotions.split(']');
    var json = splits.reduce(function (pre, cur) {
        if (pre == '') {
            return '["' + cur;
        }
        if (cur == '') {
            return pre + ']"]';
        }
        return pre + ']", "' + cur;
    }, '');
    return { json: json, count: splits.length };
}
console.log(generateEmotionsJSON('[微笑R][害羞R][失望R][汗颜R][哇R][喝奶茶R][自拍R][偷笑R][飞吻R][石化R][笑哭R][赞R][暗中观察R][买爆R][大笑R][色色R][生气R][哭惹R][萌萌哒R][斜眼R][可怜R][鄙视R][皱眉R][抓狂R][派对R][吧唧R][惊恐R][抠鼻R][再见R][叹气R][睡觉R][得意R][吃瓜R][扶墙R][黑薯问号R][黄金薯R][吐舌头H][扯脸H][doge]').json);
