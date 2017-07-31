window.onload = function () {
    const remote = require('electron').remote;
    const doc = document;
    const win = remote.getCurrentWindow();

    let minPathData = 'M 0,5 10,5 10,6 0,6 Z';
    let maxPathData = 'M 0,0 0,10 10,10 10,0 Z M 1,1 9,1 9,9 1,9 Z';
    let restorePathData = 'm 2,1e-5 0,2 -2,0 0,8 8,0 0,-2 2,0 0,-8 z m 1,1 6,0 0,6 -1,0 0,-5 -5,0 z m -2,2 6,0 0,6 -6,0 z';
    let closePathData = 'M 0,0 0,0.7 4.3,5 0,9.3 0,10 0.7,10 5,5.7 9.3,10 10,10 10,9.3 5.7,5 10,0.7 10,0 9.3,0 5,4.3 0.7,0 Z';

    const minSvg = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const minPath = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    const minBtn = doc.getElementById('min-btn');

    const closeSvg = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const closePath = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    const closeBtn = doc.getElementById('close-btn');

    const maxSvg = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const maxPath = doc.createElementNS('http://www.w3.org/2000/svg', 'path');
    const maxBtn = doc.getElementById('max-btn');

    minPath.setAttribute('d', minPathData);
    minSvg.appendChild(minPath);
    minSvg.setAttribute('height', '10px');
    minSvg.setAttribute('width', '10px');
    minBtn.appendChild(minSvg);

    closePath.setAttribute('d', closePathData);
    closeSvg.appendChild(closePath);
    closeSvg.setAttribute('height', '10px');
    closeSvg.setAttribute('width', '10px');
    closeBtn.appendChild(closeSvg);

    maxPath.setAttribute('d', maxPathData);
    maxSvg.appendChild(maxPath);
    maxSvg.setAttribute('height', '10px');
    maxSvg.setAttribute('width', '10px');
    maxBtn.appendChild(maxSvg);

    doc.getElementById('min-btn').addEventListener('click', function () {
      win.minimize();
    });

    doc.getElementById('max-btn').addEventListener('click', function () {
      if (!win.isMaximized()) {
        maxPath.setAttribute('d', restorePathData);
        win.maximize();
      } else {
        maxPath.setAttribute('d', maxPathData);
        win.unmaximize();
      }
    });

    doc.getElementById('close-btn').addEventListener('click', function () {
      win.close();
    });
};
