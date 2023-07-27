export default function App($target) {
    const $item = document.createElement('div');
    $item.innerHTML = `
        <ul>
            <li>1번</li>
            <li>2번</li>
            <li>3번</li>
        </ul>
    `;
    $target.innerHTML = "<h1>HELLO</h1>";
    $target.appendChild($item);
    
}