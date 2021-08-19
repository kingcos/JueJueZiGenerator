"use strict";
// JueJueZiGenerator
// --- SETUPS ---
var matierailsJSON = "\n{\n    \"emotions\": {\n        \"emoji\": [\n            \"\uD83D\uDE0A\",\n            \"\uD83C\uDF1F\",\n            \"\uD83E\uDDE9\",\n            \"\u2728\",\n            \"\u2600\uFE0F\",\n            \"\uD83C\uDF39\",\n            \"\uD83C\uDF38\",\n            \"\uD83C\uDF3C\",\n            \"\uD83E\uDD5D\",\n            \"\uD83E\uDD64\",\n            \"\uD83C\uDF51\",\n            \"\uD83C\uDF79\",\n            \"\uD83E\uDD51\",\n            \"\uD83D\uDE4B\u200D\u2640\uFE0F\",\n            \"\uD83C\uDF80\",\n            \"\u2764\uFE0F\",\n            \"\uD83E\uDDE1\",\n            \"\uD83D\uDC9B\",\n            \"\uD83D\uDC9A\",\n            \"\uD83D\uDC99\",\n            \"\uD83D\uDC9C\",\n            \"\uD83D\uDDA4\",\n            \"\uD83E\uDD0D\",\n            \"\uD83E\uDD0E\",\n            \"\uD83D\uDC95\",\n            \"\uD83D\uDC9E\",\n            \"\uD83D\uDC93\",\n            \"\uD83D\uDC97\",\n            \"\uD83D\uDC96\",\n            \"\uD83D\uDC9D\"\n        ],\n        \"xiaohongshu\": [\n            \"[\u5FAE\u7B11R]\",\n            \"[\u5BB3\u7F9ER]\",\n            \"[\u5931\u671BR]\",\n            \"[\u6C57\u989CR]\",\n            \"[\u54C7R]\",\n            \"[\u559D\u5976\u8336R]\",\n            \"[\u81EA\u62CDR]\",\n            \"[\u5077\u7B11R]\",\n            \"[\u98DE\u543BR]\",\n            \"[\u77F3\u5316R]\",\n            \"[\u7B11\u54EDR]\",\n            \"[\u8D5ER]\",\n            \"[\u6697\u4E2D\u89C2\u5BDFR]\",\n            \"[\u4E70\u7206R]\",\n            \"[\u5927\u7B11R]\",\n            \"[\u8272\u8272R]\",\n            \"[\u751F\u6C14R]\",\n            \"[\u54ED\u60F9R]\",\n            \"[\u840C\u840C\u54D2R]\",\n            \"[\u659C\u773CR]\",\n            \"[\u53EF\u601CR]\",\n            \"[\u9119\u89C6R]\",\n            \"[\u76B1\u7709R]\",\n            \"[\u6293\u72C2R]\",\n            \"[\u6D3E\u5BF9R]\",\n            \"[\u5427\u5527R]\",\n            \"[\u60CA\u6050R]\",\n            \"[\u62A0\u9F3BR]\",\n            \"[\u518D\u89C1R]\",\n            \"[\u53F9\u6C14R]\",\n            \"[\u7761\u89C9R]\",\n            \"[\u5F97\u610FR]\",\n            \"[\u5403\u74DCR]\",\n            \"[\u6276\u5899R]\",\n            \"[\u9ED1\u85AF\u95EE\u53F7R]\",\n            \"[\u9EC4\u91D1\u85AFR]\",\n            \"[\u5410\u820C\u5934H]\",\n            \"[\u626F\u8138H]\",\n            \"[doge]\"\n        ],\n        \"weibo\": []\n    },\n    \"symbols\": [\n        \"\uFF01\",\n        \"\uFF1F\",\n        \"\uFF5E\",\n        \"\u2753\",\n        \"\u2754\",\n        \"\u203C\uFE0F\",\n        \"\u2049\uFE0F\",\n        \"\u2757\uFE0F\",\n        \"\u2755\"\n    ],\n    \"auxiliaryWords\": [\n        \"\u9E2D\",\n        \"\u545C\",\n        \"\u5566\",\n        \"\u5450\",\n        \"\u5440\",\n        \"\u54A9\",\n        \"\u5462\",\n        \"\u54C8\",\n        \"\u563F\",\n        \"\u54D2\",\n        \"\u5BB3\",\n        \"\u554A\"\n    ],\n    \"dividers\": [\n        \" \",\n        \"\uFF0C\"\n    ],\n    \"beginning\": [\n        \"\u4ECA\u65E5\u4EFDwho\u8425\u4E1A\u5566\",\n        \"who\u4E0B\u73ED\u5566\",\n        \"\u6295\u9012\u65E5\u5E38\",\n        \"\u4ECA\u5929\u7684who\u4E5F\u8425\u4E1A\u5566\",\n        \"\u4ECA\u65E5\u4EFD\u751C\u751C\u788E\u7247\u5DF2\u52A0\u8F7D\u5B8C\u6BD5\",\n        \"\u5FD9\u91CC\u5077\u95F2\u7684\u751F\u6D3B\u788E\u7247\",\n        \"\u548Csomeone\u901B\u5403\u7684\u4E00\u5929\",\n        \"\u5206\u4EAB\u958B\u5FC3\",\n        \"\u5206\u4EAB\u4ECA\u65E5\u4EFD\u958B\u5FC3\",\n        \"\u8425\u4E1A\u4E00\u4E0B\"\n    ],\n    \"who\": [\n        \"\u6253\u5DE5\u4EBA\",\n        \"\u4ED9\u5973\",\n        \"\u666E\u4FE1\u7537\",\n        \"Java\u7537\",\n        \"\u666E\u4FE1\u5973\",\n        \"\u5C0F\u53EF\u7231\",\n        \"\u672C\u516C\u4E3B\"\n    ],\n    \"someone\": [\n        \"\u5C0F\u72D7\u52FE\",\n        \"\u5C0F\u59D0\u59D0\",\n        \"\u96C6\u7F8E\",\n        \"\u96C6\u7F8E\u4EEC\",\n        \"\u95FA\u871C\",\n        \"\u95FA\u871C\uD83D\uDC6D\",\n        \"\u59D0\u59B9\",\n        \"\u59D0\u59B9\u4EEC\",\n        \"\u59D0\u59B9\uD83D\uDC6D\",\n        \"\u597D\u59D0\u59B9\",\n        \"\u597D\u59D0\u59B9\uD83D\uDC6D\",\n        \"\u5C0F\u59D0\u59B9\",\n        \"\u5C0F\u59D0\u59B9\uD83D\uDC6D\"\n    ],\n    \"todosth\": [\n        \"\u4ECA\u5929\u53BBdosth\",\n        \"\u4ECA\u5929\u53BBdosth\u4E86\",\n        \"\u4ECA\u5929\u53BBdosth\u5566\",\n        \"\u4ECA\u5929\u53BBdosth\u9E2D\",\n        \"\u4ECA\u5929\u53BBdosth\u565C\",\n        \"\u4ECA\u5929\u53C8\u53C8\u53C8dosth\u5566\",\n        \"\u4ECA\u5929\u53C8\u53C8\u53C8dosth\u9E2D\",\n        \"\u53C8\u53BBdosth\u5566\",\n        \"\u53C8\u662Fdosth\u7684\u4E00\u5929\u5566\",\n        \"\u4ECA\u5929\u53C8\u662Fdosth\u7684\u4E00\u5929\u5566\",\n        \"\u5B9D\uFF5E\u6211\u4ECA\u5929dosth\u4E86\",\n        \"\u5B9D\uFF01\u6211\u4ECA\u5929dosth\u4E86\",\n        \"\u8FD8\u662F\u53BBdosth\u4E86\",\n        \"\u65E0\u804A\u53BBdosth\",\n        \"\u4ECA\u5929\u53BB\u4F53\u9A8C\u4E86dosth\"\n    ],\n    \"another\": [\n        \"\u4E70 \u5C0F\u86CB\u7CD5\",\n        \"\u4E70 \u5C0F\u5E03\u4E01\",\n        \"\u559D \u5976\u8336\",\n        \"\u7A7F JK\",\n        \"\u5403 \u8FF7hotel\",\n        \"\u559D \u5496\u5561\",\n        \"\u4E70 \u871C\u96EA\u51B0\u57CE\",\n        \"\u4E70 \u559C\u8336\",\n        \"\u559D \u8C2C\u53EF\"\n    ],\n    \"ending\": [\n        \"\u4E5F\u662F\u5728\u9003\u516C\u4E3B\u7684\u4E00\u5929\",\n        \"\u597D\u60F3\u8C08\u4E00\u573A\u53CC\u5411\u5954\u8D74\u7684\u604B\u7231\",\n        \"\u661F\u661F\u6708\u4EAE\u548C\u6211\u90FD\u8981\u7761\u5566\",\n        \"\u6563\u4F1A\",\n        \"\u6211\u662F\u4E00\u9762\u955C\u5B50 \u6240\u4EE5 \u665A\u5B89 \u6211\u788E\u5566\",\n        \"\u5C81\u6708\u6F2B\u957F \u90A3\u5C31\u4E00\u8D77\u62EF\u6551\u5730\u7403\u4E0E\u4E50\u8DA3\u5427\"\n    ],\n    \"collections\": [\n        \"\u8DEF\u4E0A\u8FD8\u770B\u89C1\u4E00\u4E2A\u666E\u4FE1\u7537\",\n        \"\u8DEF\u8FB9\u6361\u5230\u4E86\u4E00\u5206\u94B1\",\n        \"\u4E0D\u5C0F\u5FC3\u8E29\u4E86\u72D7\u5C4E\",\n        \"\u8DEF\u4E0A\u8FD8\u770B\u89C1\u4E00\u4E2AJava\u7537\"\n    ],\n    \"attribute\": [\n        \"\u7EDD\u7EDD\u5B50\",\n        \"\u65E0\u8BED\u5B50\",\n        \"\u771F\u4E0B\u5934\",\n        \"yyds\",\n        \"\u5948\u65AF\",\n        \"\u6709\u88AB\u60CA\u8273\u5230\",\n        \"\uD83C\uDE51\uFE0F\",\n        \"\u592A\u53EF\u4E86\",\n        \"\u592A\uD83C\uDE51\uFE0F\u4E86\",\n        \"\u771F\u7684\u7EDD\",\n        \"\u592A\u725B\u4E86\",\n        \"\u592A\uD83D\uDC2E\u4E86\",\n        \"\u597Ddosth\u5230\u8DFA\u811A\",\n        \"\u597Ddosth\u5230\u7206\",\n        \"\u597Ddosth\u5230\u8DFAjiojio\",\n        \"\u592A\u7231\u4E86\"\n    ],\n    \"fashion\": [\n        \"\u6551\u547D\uD83C\uDD98\",\n        \"\u564E\u6B7B\u83AB\u62C9\",\n        \"\u4E0D\u7BA1\u5566\",\n        \"\u5C31\u662F\u73A9\u513F\",\n        \"\u65E0\u8BED\u5B50\",\n        \"\u6211\u771F\u7684\u54ED\u6B7B\",\n        \"\u51B2\u9E2D\",\n        \"\u7B11\u6B7B\",\n        \"\u90A3\u6211\u8D70\",\n        \"\u6211\u90FD\u60CA\u4E86\",\n        \"\u5927\u65E0\u8BED\u4E8B\u4EF6\",\n        \"\u5C31\u5F88\u70E6\",\n        \"\u5FC3\u6001\u70B8\u88C2\",\n        \"\u641E\u5FEB\u70B9\",\n        \"\u4E0D\u662F\u5427\",\n        \"\u4E0D\u662F8\u20E3\uFE0F\",\n        \"\u5168\u90FD\u7ED9\u6211\u51B2\",\n        \"\u5565\u4E5F\u4E0D\u662F\"\n    ],\n    \"default\": [\n        \"\u8C41 \u5976\u8336\",\n        \"\u64B8 \u4EE3\u7801\",\n        \"\u5237 \u5FAE\u535A\",\n        \"\u4E70 \u57FA\u91D1\",\n        \"\u6478 \u9C7C\",\n        \"\u73A9 \u7EDD\u7EDD\u5B50\u751F\u6210\u5668\"\n    ]\n}\n";
var ContentLengthConstraint = 300; // 内容长度约束
// --- UTILITIES ---
function parseMatieraials(matierailsJSON) {
    return JSON.parse(matierailsJSON);
}
function randomWord(words, nullable, divider) {
    if (nullable === void 0) { nullable = false; }
    if (divider === void 0) { divider = ''; }
    var maxRange = words.length;
    if (nullable) {
        // 增加 1/3 概率
        maxRange += maxRange / 3;
    }
    var index = Math.floor(Math.random() * maxRange);
    if (index >= words.length) {
        return '';
    }
    else {
        return words[index] + divider;
    }
}
function randomWords(words, count) {
    if (words.length < count) {
        return words;
    }
    // Inspired by: https://www.imooc.com/wenda/detail/440036
    return words.sort(function () { return Math.random() - 0.5; }).slice(0, count);
}
function randomRepeat(word, times) {
    if (times === void 0) { times = -1; }
    if (times > 0) {
        var result = "";
        for (var index_1 = 0; index_1 < times; index_1++) {
            result += word;
        }
        return result;
    }
    var index = Math.floor(Math.random() * 3);
    if (index == 2) {
        return randomRepeat(word, 3);
    }
    if (index == 0) {
        return randomRepeat(word, 1);
    }
    return '';
}
// --- CORE ---
function generateBeginning(matierail, divider) {
    var beginning = randomWord(matierail.beginning);
    if (beginning.indexOf('who') != -1) {
        // 拼 who
        beginning = beginning.replace('who', randomWord(matierail.who));
    }
    if (beginning.indexOf('someone') != -1) {
        // 拼 someone
        beginning = beginning.replace('someone', randomWord(matierail.someone));
    }
    var emotion = randomWord(matierail.emotions.emoji, true);
    // if (emotion == '') {
    //     emotion = divider
    // }
    return beginning + emotion + divider;
}
function generateDoSth(matierail, something, divider) {
    var todosth = randomWord(matierail.todosth);
    if (todosth.indexOf('dosth') != -1) {
        // 拼 something
        if (something.indexOf(' ') != -1) {
            something = something.replace(' ', ''); // 去间隔
        }
        todosth = todosth.replace('dosth', something);
    }
    // 拼 emotions
    var emotions = randomRepeat(randomWord(matierail.emotions.emoji));
    // if (emotions.length == 0) {
    //     emotions = divider
    // }
    return todosth + emotions + divider;
}
function praiseSth(something, praisedWords, hasAlso) {
    if (hasAlso === void 0) { hasAlso = false; }
    var praiseWord = randomWord(praisedWords);
    var verb = something.split(' ')[0];
    var noun = something.split(' ')[1];
    var result = '';
    var intro = randomWord(['这家的', '这家店的', '这个', '这件', '这杯']);
    var also = hasAlso ? '也' : '';
    if (praiseWord.indexOf('dosth') != -1) {
        // eg. 好dosth到爆
        praiseWord = praiseWord.replace('dosth', verb);
        result = intro + noun + also + praiseWord;
    }
    else {
        // eg. 绝绝子
        result = intro + noun + also + praiseWord;
    }
    return result;
}
function randomButNotContain(words, already) {
    var random = randomWord(words);
    // Inspired by: https://www.cnblogs.com/mengff/p/7350005.html
    var set = new Set(already.replace(' ', '').split(''));
    var intersect = new Set(random.replace(' ', '').split('').filter(function (x) { return set.has(x); }));
    if (Array.from(intersect).length == 0) {
        return random;
    }
    else {
        return randomButNotContain(words, already);
    }
}
function generate(matierail, something) {
    // 开场白
    var divider = randomWord(matierail.dividers); // 分隔符
    var fashionWords = randomWords(matierail.fashion, matierail.fashion.length); // 不重复的词组
    var first = generateBeginning(matierail, divider);
    var second = fashionWords[0] + divider;
    var third = generateDoSth(matierail, something, divider);
    var forth = fashionWords[1] + divider;
    var fifth = randomRepeat(randomWord(matierail.auxiliaryWords), 3) + divider;
    var sixth = praiseSth(something, matierail.attribute) + randomRepeat(randomWord(matierail.symbols), 3);
    var seventh = praiseSth(randomButNotContain(matierail.another, something), matierail.attribute, true) + randomRepeat(randomWord(matierail.symbols), 3);
    var eighth = fashionWords[2] + divider;
    var ninth = randomWord(matierail.collections, true, divider) + fashionWords[3] + divider;
    var tenth = randomRepeat(randomWord(matierail.auxiliaryWords), 3) + divider;
    var last = randomWord(matierail.ending) + randomWord(matierail.emotions.emoji);
    return first + second + third + forth + fifth + sixth + seventh + eighth + ninth + tenth + last;
}
var matierail = parseMatieraials(matierailsJSON);
function randomSetDefaultWord() {
    var input = document.getElementById('keyword_input');
    input.value = randomWord(matierail.default);
}
function chongYa() {
    var input = document.getElementById('keyword_input');
    var content = generate(matierail, input.value);
    var container = document.getElementById('content_container');
    container.style.display = 'flex';
    if (container.firstElementChild != null) {
        container.firstElementChild.innerHTML = content;
    }
}
// console.log(generate(matierail, randomWord(matierail.default)))
randomSetDefaultWord();
