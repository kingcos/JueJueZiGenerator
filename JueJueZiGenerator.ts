// JueJueZiGenerator

// --- SETUPS ---

const matierailsJSON = `
{
    "emotions": {
        "emoji": [
            "😊",
            "🌟",
            "🧩",
            "✨",
            "☀️",
            "🌹",
            "🌸",
            "🌼",
            "🥝",
            "🥤",
            "🍑",
            "🍹",
            "🥑",
            "🙋‍♀️",
            "🎀",
            "❤️",
            "🧡",
            "💛",
            "💚",
            "💙",
            "💜",
            "🖤",
            "🤍",
            "🤎",
            "💕",
            "💞",
            "💓",
            "💗",
            "💖",
            "💝"
            
        ],
        "xiaohongshu": [
            "[微笑R]", "[害羞R]", "[失望R]", "[汗颜R]", "[哇R]", "[喝奶茶R]", "[自拍R]", "[偷笑R]", "[飞吻R]", "[石化R]", "[笑哭R]", "[赞R]", "[暗中观察R]", "[买爆R]", "[大笑R]", "[色色R]", "[生气R]", "[哭惹R]", "[萌萌哒R]", "[斜眼R]", "[可怜R]", "[鄙视R]", "[皱眉R]", "[抓狂R]", "[派对R]", "[吧唧R]", "[惊恐R]", "[抠鼻R]", "[再见R]", "[叹气R]", "[睡觉R]", "[得意R]", "[吃瓜R]", "[扶墙R]", "[黑薯问号R]", "[黄金薯R]", "[吐舌头H]", "[扯脸H]", "[doge]"
        ],
        "weibo": [

        ]
    },
    "symbols": [
        "！", "？", "～", "❓", "❔", "‼️", "⁉️", "❗️", "❕"
    ],
    "auxiliaryWords": [
        "鸭", "呜", "啦", "呐", "呀", "咩", "呢", "哈", "嘿", "哒", "害", "啊"
    ],
    "measureWords": [
        "只",
        "个",
        "杯",
        "对"
    ],
    "numberWords": [
        "一",
        "二",
        "三"
    ],
    "fashion": {
        "subject": [
            "打工人",
            "仙女",
            "普信男",
            "Java男",
            "干饭人"
        ],
        "object": [
            "小狗勾",
            "小姐姐",
            "集美",
            "集美们",
            "闺蜜",
            "闺蜜👭",
            "姐妹",
            "姐妹们",
            "姐妹👭",
            "好姐妹",
            "好姐妹👭",
            "小姐妹",
            "小姐妹👭"
        ],
        "predicate": {
            "verb": [
                "吃",
                "喝",
                "穿",
                "买",
                "吸入",
                "编",
                "看见",
                "营业",
                "逛"
            ],
            "noun": [
                "小蛋糕",
                "小布丁",
                "奶茶",
                "码",
                "街",
                "JK",
                "迷hotel"
            ]
        },
        "attribute": [
            "绝绝子",
            "无语子",
            "真下头",
            "yyds",
            "奈斯",
            "有被惊艳到",
            "🉑️",
            "太可了",
            "太🉑️了",
            "真的绝",
            "太牛了",
            "太🐮了",
            "好dosth到跺脚",
            "好dosth到爆",
            "好dosth到跺jiojio"
        ],
        "adverbial": {
            "suffix":[
                "到跺脚",
                "到跺jiojio"
            ],
            "prefix":[
                "缓缓",
                "暴风"
            ],
            "time":[
                "今日",
                "今天",
                "今日份"
            ],
            "location": [
                "路上",
                "奶茶店",
                "蛋糕店"
            ]
        },
        "random": [
            "救命🆘",
            "噎死莫拉",
            "不管啦",
            "就是玩儿",
            "无语子",
            "我真的哭死",
            "冲鸭",
            "笑死",
            "那我走",
            "我都惊了",
            "大无语事件",
            "就很烦",
            "心态炸裂",
            "搞快点",
            "不是吧",
            "不是8⃣️",
            "全都给我冲",
            "啥也不是"
        ],
        "suffix": [
            "也是在逃公主的一天",
            "好想谈一场双向奔赴的恋爱",
            "星星月亮和我都要睡啦",
            "散会",
            "我是一面镜子 所以 晚安 我碎啦",
            "岁月漫长 那就一起拯救地球与乐趣吧",
            "",
            ""
        ],
        "match": {

        }
    },
    "conjunction": [
        "跟",
        "和"
    ],
    "dividers": [
        " ",
        "，"
    ],


    "beginning": [
        "今日份who营业啦",
        "who下班啦",
        "投递日常",
        "今天的who也营业啦",
        "今日份甜甜碎片已加载完毕",
        "忙里偷闲的生活碎片",
        "和someone逛吃的一天",
        "分享開心",
        "分享今日份開心",
        "营业一下"
    ],
    "who": [
        "打工人",
        "仙女",
        "普信男",
        "Java男",
        "普信女",
        "小可爱"
    ],
    "someone": [
        "小狗勾",
        "小姐姐",
        "集美",
        "集美们",
        "闺蜜",
        "闺蜜👭",
        "姐妹",
        "姐妹们",
        "姐妹👭",
        "好姐妹",
        "好姐妹👭",
        "小姐妹",
        "小姐妹👭"
    ],
    "todosth": [
        "今天去dosth",
        "今天去dosth了",
        "今天去dosth啦",
        "今天去dosth鸭",
        "今天去dosth噜",
        "今天又又又dosth啦",
        "今天又又又dosth鸭",
        "又去dosth啦",
        "又是dosth的一天啦",
        "今天又是dosth的一天啦",
        "宝～我今天dosth了",
        "宝！我今天dosth了",
        "还是去dosth了",
        "无聊去dosth",
        "今天去体验了dosth"
    ]
}
`

const ContentLengthConstraint = 300 // 内容长度约束

// --- INTERFACES ---

interface Matierail {
    emotions: {
        emoji: string[]
        xiaohongshu: string[]
        weibo: string[]
    }
    symbols: string[]
    auxiliaryWords: string[]
    fashion: {
        subject: string[]      // 主语
        object: string[]       // 宾语
        predicate: {           // 谓语
            verb: string[]
            noun: string[]
        }
        attribute: string[]    // 定语
        adverbial: {           // 状语
            suffix: string[]   // 后置
            prefix: string[]   // 前置
            time: string[]     // 时间
            location: string[] // 地点
        }
        random: string[]       // 固定搭配
        ending: string[]       // 结尾
    }
    conjunction: string[]      // 连词
    dividers: string[]         // 断句符


    beginning: string[]       // 开头
    who: string[]             // 主语
    someone: string[]         // 和/跟谁

    todosth: string[]         // 干什么
}

// --- UTILITIES ---

function parseMatieraials(matierailsJSON: string): Matierail {
    return JSON.parse(matierailsJSON)
}

function randomWord(words: string[], nullable = false): string {
    var maxRange = words.length
    if (nullable) {
        // 增加 1/3 概率
        maxRange += maxRange / 3
    }
    var index = Math.floor(Math.random() * maxRange)
    if (index >= words.length) {
        return ''
    } else {
        return words[index]
    }
}

function randomWords(words: string[], count: number): string[] {
    var indexArray = []
    for (let index = 0; index < count; index++) {
        indexArray[index] = index + 1
    }
    indexArray.sort(() => {
        return 0.5 - Math.random()
    })

    var resultArray = []
    for (let index = 0; index < indexArray.length; index++) {
        resultArray.push(words[index])
    }

    return resultArray
}

function randomRepeat(word: string, times = -1): string {
    if (times > 0) {
        var result = ""
        for (let index = 0; index < times; index++) {
            result += word
        }

        return result
    }

    var index = Math.floor(Math.random() * 3)
    if (index == 2) {
        return randomRepeat(word, 3)
    }
    if (index == 0) {
        return randomRepeat(word, 1)
    }
    return ''
}

// --- CORE ---

function whenWhoDoWhat(matierail: Matierail): string {
    var time = randomWord(matierail.fashion.adverbial.time)
    var subject = randomWord(matierail.fashion.subject, true)
    if (!subject.length) {
        var conjunction = randomWord(matierail.conjunction)
        var object = randomWord(matierail.fashion.object)
        subject = conjunction + object
    }
    var predicate = randomWord(matierail.fashion.predicate.verb) + randomWord(matierail.fashion.predicate.noun)
    var auxiliary = randomRepeat(randomWord(matierail.auxiliaryWords))
    var symbol = randomWord(matierail.symbols)

    return time + subject + predicate + auxiliary + symbol
}

function randomFashion(matierail: Matierail, divider: string): string {
    var result = randomWord(matierail.fashion.random, true)
    if (result.length) {
        result += divider
    }
    return result
}

function generateBeginning(matierail: Matierail, divider: string) {
    var beginning = randomWord(matierail.beginning)

    if (beginning.indexOf('who') != -1) {
        // 拼 who
        beginning = beginning.replace('who', randomWord(matierail.who))
    }
    if (beginning.indexOf('someone') != -1) {
        // 拼 someone
        beginning = beginning.replace('someone', randomWord(['和', '跟']) + randomWord(matierail.someone))
    }

    var emotion = randomWord(matierail.emotions.emoji, true)
    // if (emotion == '') {
    //     emotion = divider
    // }

    return beginning + emotion + divider
}

function generateDoSth(matierail: Matierail, something: string, divider: string): string {
    var todosth = randomWord(matierail.todosth)

    if (todosth.indexOf('dosth') != -1) {
        // 拼 something
        if (something.indexOf(' ') != -1) {
            something = something.replace(' ', '') // 去间隔
        }

        todosth = todosth.replace('dosth', something)
    }

    // 拼 emotions
    var emotions = randomRepeat(randomWord(matierail.emotions.emoji))
    // if (emotions.length == 0) {
    //     emotions = divider
    // }

    return todosth + emotions + divider
}

function praiseSth(something: string, praisedWords: string[]): string {
    var praiseWord = randomWord(praisedWords)

    var verb = something.split(' ')[0]
    var noun = something.split(' ')[1]

    var result = ''

    var intro = randomWord(['这家的', '这家店的', '这个', '这件', '这杯'])

    if (praiseWord.indexOf('dosth') != -1) {
        // eg. 好dosth到爆
        praiseWord = praiseWord.replace('dosth', verb)
        result = intro + noun + praiseWord
    } else {
        // eg. 绝绝子
        result = intro + noun + praiseWord
    }

    return result
}

function generate(matierail: Matierail, something: string): string {
    // 开场白

    var divider = randomWord(matierail.dividers) // 分隔符

    // var first = whenWhoDoWhat(matierail)           // 今日份+仙女+营业+啦+,
    // var second = randomFashion(matierail, divider) // 无语子+,
    // var third = whenWhoDoWhat(matierail)           // 今天+去买+奶茶+鸭+,
    // var forth = randomFashion(matierail, divider)  // 救命🆘

    // // var fifth = randomRepeat(randomWord(matierail.auxiliaryWords), 3) + divider
    // // var sixth = fashion(matierail, divider)
    // // var seventh = randomRepeat(randomWord(matierail.auxiliaryWords), 3) + divider




    // return first + second + third + forth // + fifth + sixth + seventh

    var coolWords = randomWords(matierail.fashion.random, 5)

    var first = generateBeginning(matierail, divider)
    var second =coolWords[0] + divider
    var third = generateDoSth(matierail, something, divider)
    var forth = coolWords[1] + divider
    var fifth = randomRepeat(randomWord(matierail.auxiliaryWords), 3) + divider
    var sixth = praiseSth(something, matierail.fashion.attribute) + randomRepeat(randomWord(matierail.symbols), 3)
    var seventh = praiseSth(something, matierail.fashion.attribute) + randomRepeat(randomWord(matierail.symbols), 3)
    var eighth = coolWords[2] + divider

    return first + second + third + forth + fifth + sixth + seventh + eighth
}

var matierail = parseMatieraials(matierailsJSON)
console.log(generate(matierail, "豁 奶茶"))
