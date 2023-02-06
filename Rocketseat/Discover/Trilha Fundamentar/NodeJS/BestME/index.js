const questions = [
    "O que eu aprendi hoje?",
    "O que poderia melhorar?"
]

const ask = (index = 0) => {
    process.stdout.write(questions[index] + ">")
}

ask()

const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        process.exit()
    }
})

process.on('exit', () => {
    console.log(`
    Boa Damien!!

    O que você aprendi hoje foi:
    ${answers[0]}

    O que você pode melhorar é:
    ${answers[1]}
    `)
})