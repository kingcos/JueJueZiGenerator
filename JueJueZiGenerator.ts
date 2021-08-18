// JueJueZiGenerator

// --- SETUPS ---

const matierailsJSON = `
{
    "emotions": {
        "Emoji": [
            
        ],
        "小红书": [
            "[微笑R]", "[害羞R]", "[失望R]", "[汗颜R]", "[哇R]", "[喝奶茶R]", "[自拍R]", "[偷笑R]", "[飞吻R]", "[石化R]", "[笑哭R]", "[赞R]", "[暗中观察R]", "[买爆R]", "[大笑R]", "[色色R]", "[生气R]", "[哭惹R]", "[萌萌哒R]", "[斜眼R]", "[可怜R]", "[鄙视R]", "[皱眉R]", "[抓狂R]", "[派对R]", "[吧唧R]", "[惊恐R]", "[抠鼻R]", "[再见R]", "[叹气R]", "[睡觉R]", "[得意R]", "[吃瓜R]", "[扶墙R]", "[黑薯问号R]", "[黄金薯R]", "[吐舌头H]", "[扯脸H]", "[doge]"
        ],
        "微博": [

        ]
    },
    "symbols": [
        "！", "？", "～", "~", "!", "?"
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
            "Java 男"
        ],
        "object": [
            "小狗勾",
            "小姐姐",
            "集美",
            "闺蜜",
            "闺蜜 👭",
            "姐妹",
            "姐妹 👭",
            "好姐妹",
            "好姐妹 👭",
            "小姐妹",
            "小姐妹 👭"
        ],
        "predicate": [
            "吃",
            "喝",
            "穿",
            "买",
            "吸入",
            "编码",
            "看见",
            "营业",
            "逛街"
        ],
        "attribute": [
            "绝绝子",
            "无语子",
            "真下头",
            "yyds",
            "奈斯"
        ],
        "adverbial": {
            "suffix":[
                "到跺脚",
                "到跺 jiojio"
            ],
            "prefix":[
                "缓缓",
                "暴风"
            ],
            "time":[
                "今日",
                "今天",
                "今日份"
            ]
        },
        "random": [
            "救命 🆘",
            "噎死莫拉",
            "不管啦",
            "就是玩儿",
            "无语子",
            "我真的哭死"
        ],
        "suffix": [
            "也是在逃公主的一天",
            "好想谈一场双向奔赴的恋爱"
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
    ]
}
`

const ContentLengthConstraint = 300 // 内容长度约束

// --- INTERFACES ---

interface Matierail {
    emotions: {
        [name: string]: string[]
    }
    symbols: string[]
    auxiliaryWords: string[]
    fashion: {
        subject: string[]      // 主语
        object: string[]       // 宾语
        predicate: string[]    // 谓语
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

function randomRepeat(word: string, times = -1): string {
    if (times > 0) {
        var result = ""
        for (let index = 0; index < times; index++) {
            result += word
        }

        return result
    }

    var index = Math.floor(Math.random())
    if (index == 0) {
        return word + word + word
    } else {
        // 1
        return word
    }
}

// --- CORE ---

function someDoSth(matierail: Matierail): string {
    var time = randomWord(matierail.fashion.adverbial.time)
    var subject = randomWord(matierail.fashion.subject, true)
    if (!subject.length) {
        var conjunction = randomWord(matierail.conjunction)
        var object = randomWord(matierail.fashion.object)
        subject = conjunction + object
    }
    var predicate = randomWord(matierail.fashion.predicate)
    var auxiliary = randomRepeat(randomWord(matierail.auxiliaryWords))
    var symbol = randomWord(matierail.symbols)

    return time + subject + predicate + auxiliary + symbol
}

function fashion(matierail: Matierail, divider: string): string {
    var result = randomWord(matierail.fashion.random, true)
    if (result.length) {
        result += divider
    }
    return result
}

function generate(matierail: Matierail): string {
    // 开场白

    var divider = randomWord(matierail.dividers)

    var first = someDoSth(matierail)
    var second = fashion(matierail, divider)
    var third = someDoSth(matierail)
    var forth = fashion(matierail, divider) + divider
    var fifth = randomRepeat(randomWord(matierail.auxiliaryWords), 3) + divider
    var sixth = fashion(matierail, divider)
    var seventh = randomRepeat(randomWord(matierail.auxiliaryWords), 3) + divider




    return first + second + third + forth + fifth + sixth + seventh




}

var matierail = parseMatieraials(matierailsJSON)
console.log(generate(matierail))