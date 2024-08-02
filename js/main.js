const basePath = window.location.hostname === 'http://172.30.1.78:5500/' ? '' : 'https://kimziyeon.github.io/codingTest/';


fetch(`${basePath}/data/data.json`)
    .then(response => response.json())
    .then(jsonData => {

        const chList = jsonData.chList;
        const chListEls = document.querySelector('.category .ch_list');

        chList.forEach(obj => {
            // console.log(`id: ${obj.id}, name: ${obj.name}, img: ${obj.img}`);
            chListEls.innerHTML += `
                <div class="ch_box">
                    <div class="img_box">
                        <div class="img_border_back"></div>
                        <div class="img_border"></div>
                        <img src="${basePath}/images/${obj.img}" alt="채널 이미지" class="img_hexagon">

                        <div class="bookmark">
                            <img src="${basePath}/images/${obj.bookmark ? 'bookmark_on.png' : 'bookmark_off.png'}" alt="북마크 ON 아이콘">
                        </div>
                    </div>
                    <p class="ch_name">${obj.name}</p>
                
                
                    </div>
            `
        });

        chListEls.innerHTML += `
        <div class="ch_add">
            <div class="img_box">
                <div class="img_border_back"></div>
                <div class="img_border"></div>
                <img src="${basePath}/images/plus.png" alt="채널 추가" class="img_hexagon">
            </div>
        </div>
    `;

    })
    .catch(error => console.error('Error:', error));
