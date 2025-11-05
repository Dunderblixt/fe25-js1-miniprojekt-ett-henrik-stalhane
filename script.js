document.addEventListener('DOMContentLoaded', () => {
	const rader = 4;
	const fontSize = 14;
	const bigger = 5;
	const startRGB = { r: 40, g: 221, b: 222 };
	const colorStep = 40; 
	const container = document.getElementById('rows') || (() => {
		const el = document.createElement('div');
		el.id = 'rows';
		document.body.appendChild(el);
		return el;
	})();


	for (let i = 0; i <= rader; i++) {
		const p = document.createElement('p');
        p.style.textAlign = 'center';
		p.textContent = `Rad ${i+1}`;
        p.style.color = '#7f60f1ff';
		p.style.fontSize = `${fontSize + (i - 1) * bigger}px`;
		p.style.margin = `${i} 0`;
		p.style.padding = '0.125em 0.5em';
		const r = Math.max(startRGB.r - (i - 1) * colorStep, 0);
		const g = Math.max(startRGB.g - (i - 1) * colorStep, 0);
		const b = Math.max(startRGB.b - (i - 1) * colorStep, 0);
		p.style.backgroundColor = `rgb(${r},${g},${b})`;

		container.appendChild(p);
	}

    const box = document.createElement('div');
    box.style.border = '2px solid black';
    box.style.display = 'flex';
    box.style.padding = '48px';
    box.style.justifyContent = 'space-around';
    container.appendChild(box);
	const divEtt = document.createElement('div');
	divEtt.style.backgroundColor = '#5262f8ff';
	const listEtt = document.createElement('p');
	listEtt.style.textAlign = 'left';
    listEtt.style.width = '50px';
    listEtt.style.margin = '8px';
	for (let n = 0; n <= 9; n++) {
		const siffernamn = document.createElement('p');
		siffernamn.textContent = String(n);
		siffernamn.style.margin = '0 0';
		listEtt.appendChild(siffernamn);
        if ( n === 4 ) {
            siffernamn.style.backgroundColor = '#5262f8ff';
            siffernamn.style.color = '#ffffffff';
        }
        else if (n % 2 === 0) {
            siffernamn.style.backgroundColor = '#000000ff';
            siffernamn.style.color = '#ffffffff';
        }
        else {
            siffernamn.style.backgroundColor = '#ffffffff';
        }   
	}
	divEtt.appendChild(listEtt);
	box.appendChild(divEtt);

    const divTvå = document.createElement('div');
    divTvå.style.backgroundColor = '#5262f8ff';
    const listTvå = document.createElement('p');
    listTvå.style.textAlign = 'center';
    listTvå.style.width = '50px';
    listTvå.style.margin = '8px';
    for (let n = 0; n <= 9; n++) {
        const bak = 9-n;
        const siffernamn = document.createElement('p');
        siffernamn.textContent = String(bak);
        siffernamn.style.margin = '0 0';
        listTvå.appendChild(siffernamn);   
                if ( bak === 8 ) {
            siffernamn.style.backgroundColor = '#5262f8ff';
            siffernamn.style.color = '#ffffffff';
        }
        else if (n % 2 === 0) {
            siffernamn.style.backgroundColor = '#ffffffff';
        }
        else {
            siffernamn.style.backgroundColor = '#000000ff';
            siffernamn.style.color = '#ffffffff';
        }   
    }
    divTvå.appendChild(listTvå);
    box.appendChild(divTvå);  

    const divTre = document.createElement('div');
    divTre.style.backgroundColor = '#5262f8ff';
    const listTre = document.createElement('p');
    listTre.style.textAlign = 'right';
    listTre.style.width = '50px';
     listTre.style.margin = '8px';
     const sifferord = ['Ett', 'Två', 'Tre', 'Fyra', 'Fem', 'Sex', 'Sju', 'Åtta', 'Nio', 'Tio'];
    for (let n = 0; n <= 9; n++) {
        const siffernamn = document.createElement('p');
        siffernamn.textContent = String(sifferord[n]);
        siffernamn.style.margin = '0 0';
        listTre.appendChild(siffernamn);   
                if ( n === 6 ) {
            siffernamn.style.backgroundColor = '#5262f8ff';
        }
        else if (n % 2 === 0) {
            siffernamn.style.backgroundColor = '#000000ff';
            siffernamn.style.color = '#ffffffff';
        }
        else {
            siffernamn.style.backgroundColor = '#ffffffff';
        }   
    }   
    divTre.appendChild(listTre);
    box.appendChild(divTre);
});

