// JueJueZiGenerator
import Clipboard from 'clipboard';

import { matierail } from './Materials';

const ContentLengthConstraint = 300 // 内容长度约束

// --- INTERFACES ---
interface Matierail {
    emotions: {               // 表情
        emoji: string[]
        xiaohongshu: string[]
        weibo: string[]
    }
    symbols: string[]
    auxiliaryWords: string[]
    dividers: string[]        // 断句符
    fashion: string[]         // 潮流
    attribute: string[]       // 定语

    beginning: string[]       // 开头
    ending: string[]          // 结尾
    who: string[]             // 主语
    someone: string[]         // 和/跟谁

    todosth: string[]         // 干什么
    another: string[]         // 扯另一个淡
    collections: string[]     // 一些固定搭配
    default: string[]         // 默认 something
}

// --- UTILITIES ---
function randomWord(words: string[], nullable = false, divider = ''): string {
    var maxRange = words.length
    if (nullable) {
        // 增加 1/3 概率
        maxRange += maxRange / 3
    }
    var index = Math.floor(Math.random() * maxRange)
    if (index >= words.length) {
        return ''
    } else {
        return words[index] + divider
    }
}

function randomWords(words: string[], count: number): string[] {
    if (words.length < count) {
        return words
    }

    // Inspired by: https://www.imooc.com/wenda/detail/440036
    return words.sort(() => Math.random() - 0.5).slice(0, count)
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

var clipboard = new Clipboard('.copy_button');

clipboard.on('success', function (e) {
    console.log(e);
});

clipboard.on('error', function (e) {
    console.log(e);
});

function generateBeginning(matierail: Matierail, divider: string) {
    var beginning = randomWord(matierail.beginning)

    if (beginning.indexOf('who') != -1) {
        // 拼 who
        beginning = beginning.replace('who', randomWord(matierail.who))
    }
    if (beginning.indexOf('someone') != -1) {
        // 拼 someone
        beginning = beginning.replace('someone', randomWord(matierail.someone))
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

function praiseSth(something: string, praisedWords: string[], hasAlso = false): string {
    var praiseWord = randomWord(praisedWords)

    var verb = something.split(' ')[0]
    var noun = something.split(' ')[1]

    var result = ''

    var intro = randomWord(['这家的', '这家店的', '这个', '这件', '这杯'])
    var also = hasAlso ? '也' : ''

    if (praiseWord.indexOf('dosth') != -1) {
        // eg. 好dosth到爆
        praiseWord = praiseWord.replace('dosth', verb)
        result = intro + noun + also + praiseWord
    } else {
        // eg. 绝绝子
        result = intro + noun + also + praiseWord
    }

    return result
}

function randomButNotContain(words: string[], already: string): string {
    var random = randomWord(words)
    // Inspired by: https://www.cnblogs.com/mengff/p/7350005.html
    var set = new Set(already.replace(' ', '').split(''))
    var intersect = new Set(random.replace(' ', '').split('').filter(x => set.has(x)))
    if (Array.from(intersect).length == 0) {
        return random
    } else {
        return randomButNotContain(words, already)
    }
}

function generate(matierail: Matierail, something: string): string {
    // 开场白

    var divider = randomWord(matierail.dividers) // 分隔符

    var fashionWords = randomWords(matierail.fashion, matierail.fashion.length) // 不重复的词组

    var first = generateBeginning(matierail, divider)
    var second = fashionWords[0] + divider
    var third = generateDoSth(matierail, something, divider)
    var forth = fashionWords[1] + divider
    var fifth = randomRepeat(randomWord(matierail.auxiliaryWords), 3) + divider
    var sixth = praiseSth(something, matierail.attribute) + randomRepeat(randomWord(matierail.symbols), 3)
    var seventh = praiseSth(randomButNotContain(matierail.another, something), matierail.attribute, true) + randomRepeat(randomWord(matierail.symbols), 3)
    var eighth = fashionWords[2] + divider
    var ninth = randomWord(matierail.collections, true, divider) + fashionWords[3] + divider
    var tenth = randomRepeat(randomWord(matierail.auxiliaryWords), 3) + divider
    var last = randomWord(matierail.ending) + randomWord(matierail.emotions.emoji)

    return first + second + third + forth + fifth + sixth + seventh + eighth + ninth + tenth + last
}

function randomSetDefaultWord() {
    var input = <HTMLInputElement>document.getElementById('keyword_input')
    input.value = randomWord(matierail.default)
}

function chongYa() {
    var input = <HTMLInputElement>document.getElementById('keyword_input')
    var content = generate(matierail, input.value)

    var container = <HTMLDivElement>document.getElementById('content_container')
    container.style.display = 'flex'

    if (container.firstElementChild != null) {
        container.firstElementChild.innerHTML = content
    }

}

document.getElementsByClassName('submit_button')[0]?.addEventListener('click', chongYa);

// console.log(generate(matierail, randomWord(matierail.default)))
randomSetDefaultWord()