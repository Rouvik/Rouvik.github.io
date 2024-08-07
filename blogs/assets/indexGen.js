const INDEX_BUTTON = document.createElement('button');
document.querySelector('header').appendChild(INDEX_BUTTON);
INDEX_BUTTON.classList.add('material-symbol');
INDEX_BUTTON.setAttribute('mode', 'closed');
INDEX_BUTTON.style.zIndex = 999;
INDEX_BUTTON.innerHTML = '&#xe5d2;';
INDEX_BUTTON.onclick = handleIndexButton;

Object.assign(INDEX_BUTTON.style, {
    marginLeft: 'auto',
    marginRight: '40px',
    width: '50px',
    height: '50px',

    background: 'transparent',
    border: '0px',
    fontSize: '2rem',
    color: 'white'
});

const INDEX_DIV = document.createElement('div');
document.body.prepend(INDEX_DIV);
Object.assign(INDEX_DIV.style, {
    display: 'block',
    position: 'fixed',
    right: '-45vw',
    top: '0px',
    width: '40vw',
    height: '80vh',
    zIndex: '999',
    padding: '20vh 10px 0px 10px',

    borderLeft: '1px dashed var(--mcontrast)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    backdropFilter: 'blur(10px)',
    transition: '0.5s',
    fontFamily: 'Red Hat Mono',
    cursor: 'pointer',
    overflowY: 'auto'
});

function handleIndexButton() {
    if (INDEX_BUTTON.getAttribute('mode') == 'open') {
        INDEX_BUTTON.setAttribute('mode', 'closed');
        INDEX_DIV.style.right = '-45vw';
    } else {
        INDEX_BUTTON.setAttribute('mode', 'open');
        INDEX_DIV.style.right = '0px';
    }
}

const list = Array.from(document.querySelectorAll('h2, h3'));

list.forEach(element => {
    const id = element.textContent.replaceAll(' ', '');
    element.innerHTML = '<a href=\"#' + id + '\">' + element.textContent + '</a>';
    element.id = id;
});

for (let i = 0; i < list.length; i++) {
    if (list[i].nodeName == 'H2') {
        const headSpan = document.createElement('span');
        headSpan.pid = list[i].id;
        headSpan.onclick = (elem) => {
            document.location.href = document.location.origin + document.location.pathname + '#' + elem.target.pid;
        }
        headSpan.textContent = '# ' + list[i].textContent;
        INDEX_DIV.appendChild(headSpan);

        const mainl = document.createElement('ul');
        INDEX_DIV.appendChild(mainl);
        let j = i + 1;
        for (; j < list.length; j++) {
            if (list[j].nodeName == 'H2') {
                break;
            }

            const child = document.createElement('li');
            child.pid = list[j].id;
            child.onclick = (elem) => {
                document.location.href = document.location.origin + document.location.pathname + '#' + elem.target.pid;
            }
            child.textContent = list[j].textContent;
            mainl.appendChild(child);
        }
        i = j - 1;
    }
}