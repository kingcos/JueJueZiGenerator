"use strict";
// JueJueZiGenerator
// --- SETUPS ---
var matierailsJSON = "\n{\n    \"emotions\": {\n        \"emoji\": [\n            \"\uD83D\uDE0A\",\n            \"\uD83C\uDF1F\",\n            \"\uD83E\uDDE9\",\n            \"\u2728\",\n            \"\u2600\uFE0F\",\n            \"\uD83C\uDF39\",\n            \"\uD83C\uDF38\",\n            \"\uD83C\uDF3C\",\n            \"\uD83E\uDD5D\",\n            \"\uD83E\uDD64\",\n            \"\uD83C\uDF51\",\n            \"\uD83C\uDF79\",\n            \"\uD83E\uDD51\",\n            \"\uD83D\uDE4B\u200D\u2640\uFE0F\",\n            \"\uD83C\uDF80\",\n            \"\u2764\uFE0F\",\n            \"\uD83E\uDDE1\",\n            \"\uD83D\uDC9B\",\n            \"\uD83D\uDC9A\",\n            \"\uD83D\uDC99\",\n            \"\uD83D\uDC9C\",\n            \"\uD83D\uDDA4\",\n            \"\uD83E\uDD0D\",\n            \"\uD83E\uDD0E\",\n            \"\uD83D\uDC95\",\n            \"\uD83D\uDC9E\",\n            \"\uD83D\uDC93\",\n            \"\uD83D\uDC97\",\n            \"\uD83D\uDC96\",\n            \"\uD83D\uDC9D\"\n            \n        ],\n        \"xiaohongshu\": [\n            \"[\u5FAE\u7B11R]\", \"[\u5BB3\u7F9ER]\", \"[\u5931\u671BR]\", \"[\u6C57\u989CR]\", \"[\u54C7R]\", \"[\u559D\u5976\u8336R]\", \"[\u81EA\u62CDR]\", \"[\u5077\u7B11R]\", \"[\u98DE\u543BR]\", \"[\u77F3\u5316R]\", \"[\u7B11\u54EDR]\", \"[\u8D5ER]\", \"[\u6697\u4E2D\u89C2\u5BDFR]\", \"[\u4E70\u7206R]\", \"[\u5927\u7B11R]\", \"[\u8272\u8272R]\", \"[\u751F\u6C14R]\", \"[\u54ED\u60F9R]\", \"[\u840C\u840C\u54D2R]\", \"[\u659C\u773CR]\", \"[\u53EF\u601CR]\", \"[\u9119\u89C6R]\", \"[\u76B1\u7709R]\", \"[\u6293\u72C2R]\", \"[\u6D3E\u5BF9R]\", \"[\u5427\u5527R]\", \"[\u60CA\u6050R]\", \"[\u62A0\u9F3BR]\", \"[\u518D\u89C1R]\", \"[\u53F9\u6C14R]\", \"[\u7761\u89C9R]\", \"[\u5F97\u610FR]\", \"[\u5403\u74DCR]\", \"[\u6276\u5899R]\", \"[\u9ED1\u85AF\u95EE\u53F7R]\", \"[\u9EC4\u91D1\u85AFR]\", \"[\u5410\u820C\u5934H]\", \"[\u626F\u8138H]\", \"[doge]\"\n        ],\n        \"weibo\": [\n\n        ]\n    },\n    \"symbols\": [\n        \"\uFF01\", \"\uFF1F\", \"\uFF5E\", \"\u2753\", \"\u2754\", \"\u203C\uFE0F\", \"\u2049\uFE0F\", \"\u2757\uFE0F\", \"\u2755\"\n    ],\n    \"auxiliaryWords\": [\n        \"\u9E2D\", \"\u545C\", \"\u5566\", \"\u5450\", \"\u5440\", \"\u54A9\", \"\u5462\", \"\u54C8\", \"\u563F\", \"\u54D2\", \"\u5BB3\", \"\u554A\"\n    ],\n    \"measureWords\": [\n        \"\u53EA\",\n        \"\u4E2A\",\n        \"\u676F\",\n        \"\u5BF9\"\n    ],\n    \"numberWords\": [\n        \"\u4E00\",\n        \"\u4E8C\",\n        \"\u4E09\"\n    ],\n    \"fashion\": {\n        \"subject\": [\n            \"\u6253\u5DE5\u4EBA\",\n            \"\u4ED9\u5973\",\n            \"\u666E\u4FE1\u7537\",\n            \"Java\u7537\",\n            \"\u5E72\u996D\u4EBA\"\n        ],\n        \"object\": [\n            \"\u5C0F\u72D7\u52FE\",\n            \"\u5C0F\u59D0\u59D0\",\n            \"\u96C6\u7F8E\",\n            \"\u96C6\u7F8E\u4EEC\",\n            \"\u95FA\u871C\",\n            \"\u95FA\u871C\uD83D\uDC6D\",\n            \"\u59D0\u59B9\",\n            \"\u59D0\u59B9\u4EEC\",\n            \"\u59D0\u59B9\uD83D\uDC6D\",\n            \"\u597D\u59D0\u59B9\",\n            \"\u597D\u59D0\u59B9\uD83D\uDC6D\",\n            \"\u5C0F\u59D0\u59B9\",\n            \"\u5C0F\u59D0\u59B9\uD83D\uDC6D\"\n        ],\n        \"predicate\": {\n            \"verb\": [\n                \"\u5403\",\n                \"\u559D\",\n                \"\u7A7F\",\n                \"\u4E70\",\n                \"\u5438\u5165\",\n                \"\u7F16\",\n                \"\u770B\u89C1\",\n                \"\u8425\u4E1A\",\n                \"\u901B\"\n            ],\n            \"noun\": [\n                \"\u5C0F\u86CB\u7CD5\",\n                \"\u5C0F\u5E03\u4E01\",\n                \"\u5976\u8336\",\n                \"\u7801\",\n                \"\u8857\",\n                \"JK\",\n                \"\u8FF7hotel\"\n            ]\n        },\n        \"attribute\": [\n            \"\u7EDD\u7EDD\u5B50\",\n            \"\u65E0\u8BED\u5B50\",\n            \"\u771F\u4E0B\u5934\",\n            \"yyds\",\n            \"\u5948\u65AF\",\n            \"\u6709\u88AB\u60CA\u8273\u5230\",\n            \"\uD83C\uDE51\uFE0F\",\n            \"\u592A\u53EF\u4E86\",\n            \"\u592A\uD83C\uDE51\uFE0F\u4E86\",\n            \"\u771F\u7684\u7EDD\",\n            \"\u592A\u725B\u4E86\",\n            \"\u592A\uD83D\uDC2E\u4E86\",\n            \"\u597Ddosth\u5230\u8DFA\u811A\",\n            \"\u597Ddosth\u5230\u7206\",\n            \"\u597Ddosth\u5230\u8DFAjiojio\"\n        ],\n        \"adverbial\": {\n            \"suffix\":[\n                \"\u5230\u8DFA\u811A\",\n                \"\u5230\u8DFAjiojio\"\n            ],\n            \"prefix\":[\n                \"\u7F13\u7F13\",\n                \"\u66B4\u98CE\"\n            ],\n            \"time\":[\n                \"\u4ECA\u65E5\",\n                \"\u4ECA\u5929\",\n                \"\u4ECA\u65E5\u4EFD\"\n            ],\n            \"location\": [\n                \"\u8DEF\u4E0A\",\n                \"\u5976\u8336\u5E97\",\n                \"\u86CB\u7CD5\u5E97\"\n            ]\n        },\n        \"random\": [\n            \"\u6551\u547D\uD83C\uDD98\",\n            \"\u564E\u6B7B\u83AB\u62C9\",\n            \"\u4E0D\u7BA1\u5566\",\n            \"\u5C31\u662F\u73A9\u513F\",\n            \"\u65E0\u8BED\u5B50\",\n            \"\u6211\u771F\u7684\u54ED\u6B7B\",\n            \"\u51B2\u9E2D\",\n            \"\u7B11\u6B7B\",\n            \"\u90A3\u6211\u8D70\",\n            \"\u6211\u90FD\u60CA\u4E86\",\n            \"\u5927\u65E0\u8BED\u4E8B\u4EF6\",\n            \"\u5C31\u5F88\u70E6\",\n            \"\u5FC3\u6001\u70B8\u88C2\",\n            \"\u641E\u5FEB\u70B9\",\n            \"\u4E0D\u662F\u5427\",\n            \"\u4E0D\u662F8\u20E3\uFE0F\",\n            \"\u5168\u90FD\u7ED9\u6211\u51B2\",\n            \"\u5565\u4E5F\u4E0D\u662F\"\n        ],\n        \"suffix\": [\n            \"\u4E5F\u662F\u5728\u9003\u516C\u4E3B\u7684\u4E00\u5929\",\n            \"\u597D\u60F3\u8C08\u4E00\u573A\u53CC\u5411\u5954\u8D74\u7684\u604B\u7231\",\n            \"\u661F\u661F\u6708\u4EAE\u548C\u6211\u90FD\u8981\u7761\u5566\",\n            \"\u6563\u4F1A\",\n            \"\u6211\u662F\u4E00\u9762\u955C\u5B50 \u6240\u4EE5 \u665A\u5B89 \u6211\u788E\u5566\",\n            \"\u5C81\u6708\u6F2B\u957F \u90A3\u5C31\u4E00\u8D77\u62EF\u6551\u5730\u7403\u4E0E\u4E50\u8DA3\u5427\",\n            \"\",\n            \"\"\n        ],\n        \"match\": {\n\n        }\n    },\n    \"conjunction\": [\n        \"\u8DDF\",\n        \"\u548C\"\n    ],\n    \"dividers\": [\n        \" \",\n        \"\uFF0C\"\n    ],\n\n\n    \"beginning\": [\n        \"\u4ECA\u65E5\u4EFDwho\u8425\u4E1A\u5566\",\n        \"who\u4E0B\u73ED\u5566\",\n        \"\u6295\u9012\u65E5\u5E38\",\n        \"\u4ECA\u5929\u7684who\u4E5F\u8425\u4E1A\u5566\",\n        \"\u4ECA\u65E5\u4EFD\u751C\u751C\u788E\u7247\u5DF2\u52A0\u8F7D\u5B8C\u6BD5\",\n        \"\u5FD9\u91CC\u5077\u95F2\u7684\u751F\u6D3B\u788E\u7247\",\n        \"\u548Csomeone\u901B\u5403\u7684\u4E00\u5929\",\n        \"\u5206\u4EAB\u958B\u5FC3\",\n        \"\u5206\u4EAB\u4ECA\u65E5\u4EFD\u958B\u5FC3\",\n        \"\u8425\u4E1A\u4E00\u4E0B\"\n    ],\n    \"who\": [\n        \"\u6253\u5DE5\u4EBA\",\n        \"\u4ED9\u5973\",\n        \"\u666E\u4FE1\u7537\",\n        \"Java\u7537\",\n        \"\u666E\u4FE1\u5973\",\n        \"\u5C0F\u53EF\u7231\"\n    ],\n    \"someone\": [\n        \"\u5C0F\u72D7\u52FE\",\n        \"\u5C0F\u59D0\u59D0\",\n        \"\u96C6\u7F8E\",\n        \"\u96C6\u7F8E\u4EEC\",\n        \"\u95FA\u871C\",\n        \"\u95FA\u871C\uD83D\uDC6D\",\n        \"\u59D0\u59B9\",\n        \"\u59D0\u59B9\u4EEC\",\n        \"\u59D0\u59B9\uD83D\uDC6D\",\n        \"\u597D\u59D0\u59B9\",\n        \"\u597D\u59D0\u59B9\uD83D\uDC6D\",\n        \"\u5C0F\u59D0\u59B9\",\n        \"\u5C0F\u59D0\u59B9\uD83D\uDC6D\"\n    ],\n    \"todosth\": [\n        \"\u4ECA\u5929\u53BBdosth\",\n        \"\u4ECA\u5929\u53BBdosth\u4E86\",\n        \"\u4ECA\u5929\u53BBdosth\u5566\",\n        \"\u4ECA\u5929\u53BBdosth\u9E2D\",\n        \"\u4ECA\u5929\u53BBdosth\u565C\",\n        \"\u4ECA\u5929\u53C8\u53C8\u53C8dosth\u5566\",\n        \"\u4ECA\u5929\u53C8\u53C8\u53C8dosth\u9E2D\",\n        \"\u53C8\u53BBdosth\u5566\",\n        \"\u53C8\u662Fdosth\u7684\u4E00\u5929\u5566\",\n        \"\u4ECA\u5929\u53C8\u662Fdosth\u7684\u4E00\u5929\u5566\",\n        \"\u5B9D\uFF5E\u6211\u4ECA\u5929dosth\u4E86\",\n        \"\u5B9D\uFF01\u6211\u4ECA\u5929dosth\u4E86\",\n        \"\u8FD8\u662F\u53BBdosth\u4E86\",\n        \"\u65E0\u804A\u53BBdosth\",\n        \"\u4ECA\u5929\u53BB\u4F53\u9A8C\u4E86dosth\"\n    ]\n}\n";
var ContentLengthConstraint = 300; // 内容长度约束
// --- UTILITIES ---
function parseMatieraials(matierailsJSON) {
    return JSON.parse(matierailsJSON);
}
function randomWord(words, nullable) {
    if (nullable === void 0) { nullable = false; }
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
        return words[index];
    }
}
function randomWords(words, count) {
    var indexArray = [];
    for (var index = 0; index < count; index++) {
        indexArray[index] = index + 1;
    }
    indexArray.sort(function () {
        return 0.5 - Math.random();
    });
    var resultArray = [];
    for (var index = 0; index < indexArray.length; index++) {
        resultArray.push(words[index]);
    }
    return resultArray;
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
function whenWhoDoWhat(matierail) {
    var time = randomWord(matierail.fashion.adverbial.time);
    var subject = randomWord(matierail.fashion.subject, true);
    if (!subject.length) {
        var conjunction = randomWord(matierail.conjunction);
        var object = randomWord(matierail.fashion.object);
        subject = conjunction + object;
    }
    var predicate = randomWord(matierail.fashion.predicate.verb) + randomWord(matierail.fashion.predicate.noun);
    var auxiliary = randomRepeat(randomWord(matierail.auxiliaryWords));
    var symbol = randomWord(matierail.symbols);
    return time + subject + predicate + auxiliary + symbol;
}
function randomFashion(matierail, divider) {
    var result = randomWord(matierail.fashion.random, true);
    if (result.length) {
        result += divider;
    }
    return result;
}
function generateBeginning(matierail, divider) {
    var beginning = randomWord(matierail.beginning);
    if (beginning.indexOf('who') != -1) {
        // 拼 who
        beginning = beginning.replace('who', randomWord(matierail.who));
    }
    if (beginning.indexOf('someone') != -1) {
        // 拼 someone
        beginning = beginning.replace('someone', randomWord(['和', '跟']) + randomWord(matierail.someone));
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
function praiseSth(something, praisedWords) {
    var praiseWord = randomWord(praisedWords);
    var verb = something.split(' ')[0];
    var noun = something.split(' ')[1];
    var result = '';
    var intro = randomWord(['这家的', '这家店的', '这个', '这件', '这杯']);
    if (praiseWord.indexOf('dosth') != -1) {
        // eg. 好dosth到爆
        praiseWord = praiseWord.replace('dosth', verb);
        result = intro + noun + praiseWord;
    }
    else {
        // eg. 绝绝子
        result = intro + noun + praiseWord;
    }
    return result;
}
function generate(matierail, something) {
    // 开场白
    var divider = randomWord(matierail.dividers); // 分隔符
    // var first = whenWhoDoWhat(matierail)           // 今日份+仙女+营业+啦+,
    // var second = randomFashion(matierail, divider) // 无语子+,
    // var third = whenWhoDoWhat(matierail)           // 今天+去买+奶茶+鸭+,
    // var forth = randomFashion(matierail, divider)  // 救命🆘
    // // var fifth = randomRepeat(randomWord(matierail.auxiliaryWords), 3) + divider
    // // var sixth = fashion(matierail, divider)
    // // var seventh = randomRepeat(randomWord(matierail.auxiliaryWords), 3) + divider
    // return first + second + third + forth // + fifth + sixth + seventh
    var coolWords = randomWords(matierail.fashion.random, 5);
    var first = generateBeginning(matierail, divider);
    var second = coolWords[0] + divider;
    var third = generateDoSth(matierail, something, divider);
    var forth = coolWords[1] + divider;
    var fifth = randomRepeat(randomWord(matierail.auxiliaryWords), 3) + divider;
    var sixth = praiseSth(something, matierail.fashion.attribute) + randomRepeat(randomWord(matierail.symbols), 3);
    var seventh = praiseSth(something, matierail.fashion.attribute) + randomRepeat(randomWord(matierail.symbols), 3);
    var eighth = coolWords[2] + divider;
    return first + second + third + forth + fifth + sixth + seventh + eighth;
}
var matierail = parseMatieraials(matierailsJSON);
console.log(generate(matierail, "豁 奶茶"));
