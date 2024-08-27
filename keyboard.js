const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `

  <div class = "color">  
    <table>
      <tr>
        <th style="background-color: black">Key</th>
        <th style="background-color: black">Keycode</th>
        <th style="background-color: black">Code</th>
      </tr>
      <tr>
        <td>${e.key === ' ' ? 'Space' : e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
      </tr>
    </table>
  </div>

  `;
});