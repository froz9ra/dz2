let tagField = document.querySelector('.tag-field');
let input = document.querySelector('.tag-field input');

let tags = [];

function createTag(label) {
    let div = document.createElement('div');
    div.setAttribute('class', 'tagx');
    let span = document.createElement('span');
    span.setAttribute('class', 'tag');
    span.innerHTML = label;
    span.setAttribute('data-item', label);
    div.appendChild(span);
    return div;
}

function clearTags() {
    document.querySelectorAll('.tagx').forEach(tag => {
        tag.parentElement.removeChild(tag);
    });
}

function addTags() {
    clearTags();
    tags.forEach(tag => {
        tagField.insertBefore(createTag(tag), input);
    });
}

input.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        e.target.value.split().forEach(tag => {
            tags.push(tag);
        });

        addTags();
        input.value = '';
    }
});

document.addEventListener('click', (e) => {
    if (e.target.tagName === 'SPAN') {
        let tagLabel = e.target.getAttribute('data-item');
        let index = tags.indexOf(tagLabel);
        tags = [...tags.slice(0, index), ...tags.slice(index+1)];

        addTags();
    }
});
