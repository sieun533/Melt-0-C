const btnJ = document.querySelector('.btn_J');
const btnG = document.querySelector('.btn_G');
const btnM = document.querySelector('.btn_M');

const practicalImg = document.querySelector(".practical_img");

const O1 = document.querySelector('.O1');
const O2 = document.querySelector('.O2');
const O3 = document.querySelector('.O3');

const textContent1 = document.querySelector('.text_content_1');
const textContent2 = document.querySelector('.text_content_2');
const textContent3 = document.querySelector('.text_content_3');

const titleText1 = document.querySelector('.title_text_1');
const titleText2 = document.querySelector('.title_text_2');
const titleText3 = document.querySelector('.title_text_3');

const moment1 = document.querySelector('.moment_1');
const moment2 = document.querySelector('.moment_2');
const moment3 = document.querySelector('.moment_3');
const momentSections = [moment1, moment2, moment3];

const iconContainers = document.querySelectorAll('.icon');

iconContainers.forEach(container => {
    
    container.addEventListener('mouseover', () => {

        container.classList.add('is-hovered'); 
    });

    container.addEventListener('mouseout', () => {

        container.classList.remove('is-hovered');
    });
});


btnJ.addEventListener('click', () => {
    practicalImg.style.backgroundImage = 'url("img/practical_content1.png")';

    textContent1.style.display = 'block';
    textContent2.style.display = 'none';
    textContent3.style.display = 'none';

    titleText1.style.display = 'inline';
    titleText2.style.display = 'none';
    titleText3.style.display = 'none';

    btnJ.style.color = '#00FF48';
    O1.style.display = 'inline-block';
    btnG.style.color = '#5F5F5F';
    O2.style.display = 'none';
    btnM.style.color = '#5F5F5F';
    O3.style.display = 'none';
})

btnG.addEventListener('click', () => {
    practicalImg.style.backgroundImage = 'url("img/practical_content2.png")';

    textContent1.style.display = 'none';
    textContent2.style.display = 'block';
    textContent3.style.display = 'none';

    titleText1.style.display = 'none';
    titleText2.style.display = 'inline';
    titleText3.style.display = 'none';
    
    btnJ.style.color = '#5F5F5F';
    O1.style.display = 'none';
    btnG.style.color = '#00FF48';
    O2.style.display = 'inline-block';
    btnM.style.color = '#5F5F5F';
    O3.style.display = 'none';
})

btnM.addEventListener('click', () => {
    practicalImg.style.backgroundImage = 'url("img/practical_content3.png")';

    textContent1.style.display = 'none';
    textContent2.style.display = 'none';
    textContent3.style.display = 'block';

    titleText1.style.display = 'none';
    titleText2.style.display = 'none';
    titleText3.style.display = 'inline';

    btnJ.style.color = '#5F5F5F';
    O1.style.display = 'none';
    btnG.style.color = '#5F5F5F';
    O2.style.display = 'none';
    btnM.style.color = '#00FF48';
    O3.style.display = 'inline-block';
})

const prevBtn = document.querySelector('.prev_btn');
const nextBtn = document.querySelector('.next_btn');

let currentPage = 1; 
const totalPages = 3; 

const imagePaths = {
    prev_f: 'img/prev_f.png', // F: False (회색 비활성)
    prev_t: 'img/prev_t.png', // T: True (녹색 활성)
    // prev_h는 CSS에서 제어

    next_f: 'img/next_f.png',
    next_t: 'img/next_t.png',
    // next_h는 CSS에서 제어
};

const contentImagePaths = {
    1: 'img/interactive_1.png',
    2: 'img/interactive_2.png',
    3: 'img/interactive_3.png',
};

function updateButtonState() {
    
    prevBtn.classList.remove('btn-active', 'btn-disabled');
    nextBtn.classList.remove('btn-active', 'btn-disabled');


    if (currentPage === 1) {
        prevBtn.classList.add('btn-disabled');
        prevBtn.style.backgroundImage = `url(${imagePaths.prev_f})`; 
        
        nextBtn.classList.add('btn-active');
        nextBtn.style.backgroundImage = `url(${imagePaths.next_t})`;

    } else if (currentPage === totalPages) {
        prevBtn.classList.add('btn-active');
        prevBtn.style.backgroundImage = `url(${imagePaths.prev_t})`; 

        nextBtn.classList.add('btn-disabled');
        nextBtn.style.backgroundImage = `url(${imagePaths.next_f})`;

    } else { 
        prevBtn.classList.add('btn-active');
        prevBtn.style.backgroundImage = `url(${imagePaths.prev_t})`; 
        
        nextBtn.classList.add('btn-active');
        nextBtn.style.backgroundImage = `url(${imagePaths.next_t})`;
    }
    
    // C. 콘텐츠 이미지 변경 (즉시 변경)
    changeInteractiveContent(currentPage);
}

function changeInteractiveContent(page) {
    
    momentSections.forEach(section => {
        if (section) { 
            section.style.display = 'none';
        }
    });

    const targetIndex = page - 1;
    if (momentSections[targetIndex]) {
        momentSections[targetIndex].style.display = 'block';
    }
}


prevBtn.addEventListener('click', () => {
    if (prevBtn.classList.contains('btn-active')) {
        currentPage--;
        updateButtonState();
    }
});

nextBtn.addEventListener('click', () => {
    if (nextBtn.classList.contains('btn-active')) {
        currentPage++;
        updateButtonState();
    }
});

updateButtonState();


const mapPoint1 = document.querySelector('.map_point_1');
const mapPoint2 = document.querySelector('.map_point_2');
const mapPoint3 = document.querySelector('.map_point_3');
const mapPoint4 = document.querySelector('.map_point_4');
const mapPoint5 = document.querySelector('.map_point_5');
const infoCard = document.querySelector('.info_card_container');
const CARD_STEP = 18.313;

mapPoint1.addEventListener('mouseover', () => {
    infoCard.style.top = `${CARD_STEP}rem`;
})

mapPoint2.addEventListener('mouseover', () => {
    infoCard.style.top = `0rem`;
})

mapPoint3.addEventListener('mouseover', () => {
    infoCard.style.top = `-${CARD_STEP}rem`;
})

mapPoint4.addEventListener('mouseover', () => {
    infoCard.style.top = `-${CARD_STEP * 2}rem`;
})

mapPoint5.addEventListener('mouseover', () => {
    infoCard.style.top = `-${CARD_STEP * 3}rem`;
})

// 스크롤 애니메이션 구현 
function setupScrollReveal(selector) {
    // scroll-reveal 클래스가 붙은 모든 대상 요소 가져와서 변수에 저장
    const elements = document.querySelectorAll(selector);

    // Intersection Observer 설정
    const options = {
        // 요소가 뷰포트에 10% 정도 들어왔을 때 (threshold: 0.1) 동작
        root: null, // 뷰포트를 기준으로 함
        rootMargin: '0px 0px -20% 0px', // 뷰포트 하단 20% 여유를 두고 확인
        threshold: 0.05 // 요소가 5%만 보이기 시작해도 감지
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // 요소가 화면 안에 들어왔을 때
            if (entry.isIntersecting) {
                // 'is-visible' 클래스를 추가하여 CSS 애니메이션 트리거
                entry.target.classList.add('is-visible');
                
                // 애니메이션이 한 번 실행된 후에는 관찰을 중지하여 성능 최적화
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // 모든 요소를 관찰 목록에 추가
    elements.forEach(element => {
        observer.observe(element);
    });
}

// 페이지 로드 후 애니메이션 설정 시작
window.addEventListener('load', () => {
    // 'scroll-reveal' 클래스를 가진 모든 요소에 애니메이션을 적용
    setupScrollReveal('.scroll-reveal');
});