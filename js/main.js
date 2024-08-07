const basePath = window.location.hostname === 'http://172.30.1.78:5500/' ? '' : 'https://kimziyeon.github.io/codingTest/';


//헤더 스크롤 shadow
window.addEventListener('scroll', () => {
    const category = document.querySelector('.category');

    if (window.scrollY > 0) {
        category.classList.add('shadow')
    } else {
        category.classList.remove('shadow')
    }
})

//채널 변경
const chListEls = document.querySelector('.category .my_ch .img_box');
chListEls.addEventListener('click', () => {
    let chChange = document.querySelector('.ch_change');
    if (chChange.style.display === 'flex') {
        chChange.style.display = 'none'
    } else {
        chChange.style.display = 'flex'
    }
})



//json "ch_list" 첫번째 패치

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




//json "rate_ch_list" 두번째 패치

fetch(`${basePath}/data/data.json`)
    .then(response => response.json())
    .then(jsonData => {

        const rateChList = jsonData.rateChList;
        const rateChListEls = document.querySelector('.rate .rate_ch_list');

        rateChList.forEach(obj => {
            rateChListEls.innerHTML += `
                <div class="ch_box">
                    <div class="img_box">
                        <div class="img_border_back"></div>
                        <div class="img_border aqua"></div>
                        <img src="${basePath}/images/${obj.img}" alt="채널 이미지" class="img_hexagon">
                    </div>

                    <div class="percent_badge">
                        <div class="num">50</div>
                        <div class="per">%</div>
                    </div>
                    <p class="ch_name">${obj.name}</p>
                    <p class="ch_follower">구독자 <span>${obj.followerNum}</span>명</p>
                </div>
            `
        })

    })
    .catch(error => console.error('Error:', error));




//json "video_list" 세번째 패치

fetch(`${basePath}/data/data.json`)
    .then(response => response.json())
    .then(jsonData => {


        const videoList = jsonData.videoList;
        const videoListEls = document.querySelector('.video .video_list');

        videoList.forEach(obj => {
            videoListEls.innerHTML += `
                <div class="video_box">
                    <div class="thumb">
                        <img src="${basePath}/images/${obj.videoImg}" alt="비디오 썸네일 이미지">
                    </div>
                    <div class="ch_name">${obj.name}</div>
                    <div class="video_name">${obj.videoName}</div>
                    <div class="video_info">
                        <p class="view_num">조회수 <span>${obj.viewNum}</span>회</p>
                        <span class="dot">&middot;</span>
                        <span class="up_date">${obj.upDate}</span>
                    </div>
                </div>
            `
        })

    })
    .catch(error => console.error('Error:', error));



//json "shorts_list" 네번째 패치

fetch(`${basePath}/data/data.json`)
    .then(response => response.json())
    .then(jsonData => {

        const shortsList = jsonData.shortsList;
        const shortsListEls = document.querySelector('.video .shorts_list');

        shortsList.forEach(obj => {
            shortsListEls.innerHTML += `
                <div class="shorts_box">
                    <div class="shorts_thumb">
                        <img src="${basePath}/images/${obj.shortsImg}" alt="쇼츠 썸네일 이미지">
                    </div>
                    <div class="shorts_name">${obj.shortsName}</div>
                </div>
            `

        })

    })
    .catch(error => console.error('Error:', error));



// 더보기
const moreBtn = document.querySelector('.more_box');
moreBtn.addEventListener('click', () => {
    let hideSection = document.querySelector('.hide');
    hideSection.style.display = 'block'
})

// 4번 그래프 그리드
const gridBox = document.querySelector('.chart_04 .grid_box');

for (let col = 1; col >= 12; col++) {
    let gridItem = document.createElement('div')
    gridItem.classList.add('grid_item');
    gridItem.style.gridColumn = col;
    gridItem.style.gridRow = row;
}

