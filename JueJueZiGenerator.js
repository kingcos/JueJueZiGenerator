"use strict";
// JueJueZiGenerator
// --- SETUPS ---
var matierailsJSON = "\n{\n    \"emotions\": {\n        \"Emoji\": [\n            \n        ],\n        \"\u5C0F\u7EA2\u4E66\": [\n            \"[\u5FAE\u7B11R]\", \"[\u5BB3\u7F9ER]\", \"[\u5931\u671BR]\", \"[\u6C57\u989CR]\", \"[\u54C7R]\", \"[\u559D\u5976\u8336R]\", \"[\u81EA\u62CDR]\", \"[\u5077\u7B11R]\", \"[\u98DE\u543BR]\", \"[\u77F3\u5316R]\", \"[\u7B11\u54EDR]\", \"[\u8D5ER]\", \"[\u6697\u4E2D\u89C2\u5BDFR]\", \"[\u4E70\u7206R]\", \"[\u5927\u7B11R]\", \"[\u8272\u8272R]\", \"[\u751F\u6C14R]\", \"[\u54ED\u60F9R]\", \"[\u840C\u840C\u54D2R]\", \"[\u659C\u773CR]\", \"[\u53EF\u601CR]\", \"[\u9119\u89C6R]\", \"[\u76B1\u7709R]\", \"[\u6293\u72C2R]\", \"[\u6D3E\u5BF9R]\", \"[\u5427\u5527R]\", \"[\u60CA\u6050R]\", \"[\u62A0\u9F3BR]\", \"[\u518D\u89C1R]\", \"[\u53F9\u6C14R]\", \"[\u7761\u89C9R]\", \"[\u5F97\u610FR]\", \"[\u5403\u74DCR]\", \"[\u6276\u5899R]\", \"[\u9ED1\u85AF\u95EE\u53F7R]\", \"[\u9EC4\u91D1\u85AFR]\", \"[\u5410\u820C\u5934H]\", \"[\u626F\u8138H]\", \"[doge]\"\n        ],\n        \"\u5FAE\u535A\": [\n\n        ]\n    },\n    \"symbols\": [\n        \"\uFF01\", \"\uFF1F\", \"\uFF5E\", \"~\", \"!\", \"?\"\n    ],\n    \"auxiliaryWords\": [\n        \"\u9E2D\", \"\u545C\", \"\u5566\", \"\u5450\", \"\u5440\", \"\u54A9\", \"\u5462\", \"\u54C8\", \"\u563F\", \"\u54D2\", \"\u5BB3\", \"\u554A\"\n    ],\n    \"measureWords\": [\n        \"\u53EA\",\n        \"\u4E2A\",\n        \"\u676F\",\n        \"\u5BF9\"\n    ],\n    \"numberWords\": [\n        \"\u4E00\",\n        \"\u4E8C\",\n        \"\u4E09\"\n    ],\n    \"fashion\": {\n        \"subject\": [\n            \"\u6253\u5DE5\u4EBA\",\n            \"\u4ED9\u5973\",\n            \"\u666E\u4FE1\u7537\",\n            \"Java \u7537\"\n        ],\n        \"object\": [\n            \"\u5C0F\u72D7\u52FE\",\n            \"\u5C0F\u59D0\u59D0\",\n            \"\u96C6\u7F8E\",\n            \"\u95FA\u871C\",\n            \"\u95FA\u871C \uD83D\uDC6D\",\n            \"\u59D0\u59B9\",\n            \"\u59D0\u59B9 \uD83D\uDC6D\",\n            \"\u597D\u59D0\u59B9\",\n            \"\u597D\u59D0\u59B9 \uD83D\uDC6D\",\n            \"\u5C0F\u59D0\u59B9\",\n            \"\u5C0F\u59D0\u59B9 \uD83D\uDC6D\"\n        ],\n        \"predicate\": [\n            \"\u5403\",\n            \"\u559D\",\n            \"\u7A7F\",\n            \"\u4E70\",\n            \"\u5438\u5165\",\n            \"\u7F16\u7801\",\n            \"\u770B\u89C1\",\n            \"\u8425\u4E1A\",\n            \"\u901B\u8857\"\n        ],\n        \"attribute\": [\n            \"\u7EDD\u7EDD\u5B50\",\n            \"\u65E0\u8BED\u5B50\",\n            \"\u771F\u4E0B\u5934\",\n            \"yyds\",\n            \"\u5948\u65AF\"\n        ],\n        \"adverbial\": {\n            \"suffix\":[\n                \"\u5230\u8DFA\u811A\",\n                \"\u5230\u8DFA jiojio\"\n            ],\n            \"prefix\":[\n                \"\u7F13\u7F13\",\n                \"\u66B4\u98CE\"\n            ],\n            \"time\":[\n                \"\u4ECA\u65E5\",\n                \"\u4ECA\u5929\",\n                \"\u4ECA\u65E5\u4EFD\"\n            ]\n        },\n        \"random\": [\n            \"\u6551\u547D \uD83C\uDD98\",\n            \"\u564E\u6B7B\u83AB\u62C9\",\n            \"\u4E0D\u7BA1\u5566\",\n            \"\u5C31\u662F\u73A9\u513F\",\n            \"\u65E0\u8BED\u5B50\",\n            \"\u6211\u771F\u7684\u54ED\u6B7B\"\n        ],\n        \"suffix\": [\n            \"\u4E5F\u662F\u5728\u9003\u516C\u4E3B\u7684\u4E00\u5929\",\n            \"\u597D\u60F3\u8C08\u4E00\u573A\u53CC\u5411\u5954\u8D74\u7684\u604B\u7231\"\n        ],\n        \"match\": {\n\n        }\n    },\n    \"conjunction\": [\n        \"\u8DDF\",\n        \"\u548C\"\n    ],\n    \"dividers\": [\n        \" \",\n        \"\uFF0C\"\n    ]\n}\n";
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
function randomRepeat(word, times) {
    if (times === void 0) { times = -1; }
    if (times > 0) {
        var result = "";
        for (var index_1 = 0; index_1 < times; index_1++) {
            result += word;
        }
        return result;
    }
    var index = Math.floor(Math.random());
    if (index == 0) {
        return word + word + word;
    }
    else {
        // 1
        return word;
    }
}
// --- CORE ---
function someDoSth(matierail) {
    var time = randomWord(matierail.fashion.adverbial.time);
    var subject = randomWord(matierail.fashion.subject, true);
    if (!subject.length) {
        var conjunction = randomWord(matierail.conjunction);
        var object = randomWord(matierail.fashion.object);
        subject = conjunction + object;
    }
    var predicate = randomWord(matierail.fashion.predicate);
    var auxiliary = randomRepeat(randomWord(matierail.auxiliaryWords));
    var symbol = randomWord(matierail.symbols);
    return time + subject + predicate + auxiliary + symbol;
}
function fashion(matierail, divider) {
    var result = randomWord(matierail.fashion.random, true);
    if (result.length) {
        result += divider;
    }
    return result;
}
function generate(matierail) {
    // 开场白
    var divider = randomWord(matierail.dividers);
    var first = someDoSth(matierail);
    var second = fashion(matierail, divider);
    var third = someDoSth(matierail);
    var forth = fashion(matierail, divider) + divider;
    var fifth = randomRepeat(randomWord(matierail.auxiliaryWords), 3) + divider;
    var sixth = fashion(matierail, divider);
    var seventh = randomRepeat(randomWord(matierail.auxiliaryWords), 3) + divider;
    return first + second + third + forth + fifth + sixth + seventh;
}
var matierail = parseMatieraials(matierailsJSON);
console.log(generate(matierail));
