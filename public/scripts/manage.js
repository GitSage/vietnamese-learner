let allWords;
document.addEventListener("DOMContentLoaded", async () => {
    allWords = await repository.getAllWords();
    addWords();
});

function addWords() {
    for(let i = 0; i < allWords.length; i++) {
        let word = allWords[i];
        let wordDiv = document.createElement('div');
        wordDiv.classList.add('manageWordsRow');
        wordDiv.classList.add('viewWordsRow');
        wordDiv.innerHTML = `
            <div class="manageWordsCell">
                ${word.english}
            </div>
            <div class="manageWordsCell">
                ${word.vietnamese}
            </div>
            <div class="manageWordsCell">
                <button onclick="play(${i})">Play</button>
            </div>`;
        document.querySelector('#manageWordsContainer').appendChild(wordDiv);
    }
}

async function addWord() {
    await repository.addWord(document.querySelector('#newEnglish').value, document.querySelector('#newVietnamese').value);
    let viewWords = document.getElementsByClassName('viewWordsRow');
    while(viewWords[0]) {
        viewWords[0].parentNode.removeChild(viewWords[0]);
    }

    allWords = await repository.getAllWords();

    document.querySelector('#newEnglish').value = '';
    document.querySelector('#newVietnamese').value = '';

    addWords();
}

function play(index) {
    new Audio(`audio/${allWords[index].fileName}`).play();
}