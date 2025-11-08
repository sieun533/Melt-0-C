let btnJ = document.querySelector('.btn_J');
let btnG = document.querySelector('.btn_G');
let btnM = document.querySelector('.btn_M');
let practicalImg = document.querySelector(".practical_img");
let O1 = document.querySelector('.O1');
let O2 = document.querySelector('.O2');
let O3 = document.querySelector('.O3');

btnJ.addEventListener('click', () => {
    practicalImg.style.backgroundImage = 'url("img/practical_content1.png")';

    btnJ.style.color = '#00FF48';
    O1.style.display = 'inline-block';
    btnG.style.color = '#5F5F5F';
    O2.style.display = 'none';
    btnM.style.color = '#5F5F5F';
    O3.style.display = 'none';
})

btnG.addEventListener('click', () => {
    practicalImg.style.backgroundImage = 'url("img/practical_content2.png")';
    
    btnJ.style.color = '#5F5F5F';
    O1.style.display = 'none';
    btnG.style.color = '#00FF48';
    O2.style.display = 'inline-block';
    btnM.style.color = '#5F5F5F';
    O3.style.display = 'none';
})

btnM.addEventListener('click', () => {
    practicalImg.style.backgroundImage = 'url("img/practical_content3.png")';

    btnJ.style.color = '#5F5F5F';
    O1.style.display = 'none';
    btnG.style.color = '#5F5F5F';
    O2.style.display = 'none';
    btnM.style.color = '#00FF48';
    O3.style.display = 'inline-block';
})

const prevBtn = document.querySelector('.prev_btn');
const nextBtn = document.querySelector('.next_btn');
const interactiveImg = document.querySelector('.interactive_img'); 

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
    changeInteractiveImage(currentPage);
}

function changeInteractiveImage(page) {
    
    interactiveImg.src = contentImagePaths[page]; 
    

    interactiveImg.style.opacity = '1'; 
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