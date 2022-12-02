const codeArea = document.querySelector('.code__editor__wrapper')
const language = document.querySelector('.language')
const button = document.querySelector('.highlight-button')
function changeLanguaeg(){
    const code = codeArea.querySelector('code')
    console.log(language.value)
    codeArea.innerHTML = `<code class="preview hljs ${language.value}" contenteditable = "true" aria-label="editor" spellcheck="false"></code>`
    codeArea.firstChild.innerText = code.innerText
}

language.addEventListener('change', () => {
    changeLanguaeg()
})

console.log(language.value)

button.addEventListener('click', () => {
    const code = codeArea.querySelector('code')
    hljs.highlightBlock(code)
})

const selectColor = (event) => {
    let value = event.target.value
    const codeEditorBg = document.querySelector('.code__editor__bg')
    return codeEditorBg.style.background = value
}

const color = document.querySelector('.color__selector__input')
color.addEventListener('input', selectColor)