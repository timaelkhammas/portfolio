const pages = [
    {
        content: "<mark>EKA GD MA Display Library #4 'What We Did With The Budget' with Laura Martens, presenting a collection of publications and objects acquired from the Ghent Art Book Fair.</mark>",
        topRightText: `<mark>Fa[tima]-Ezzahra El Khammas<mark>
        <a href="mailto:timaelkhammas@gmail.com">timaelkhammas[@]gmail.com</a>`,
        className: 'page-1',
        isPortrait: false
    },
    {
        content: "<mark>EKA GD MA Display Library #4 'What We Did With The Budget' with Laura Martens, presenting a collection of publications and objects acquired from the Ghent Art Book Fair.</mark>",
        topRightText: `<mark>Fa[tima]-Ezzahra El Khammas<mark> 
        <a href="mailto:timaelkhammas@gmail.com">timaelkhammas[@]gmail.com</a>`,
        className: 'page-2',
        isPortrait: false 
    },
    {
        content: "<mark>Double roomsheet/poster design for the Craft Studies MA exhibition 'Objects or Things' at the Estonian Academy of Arts.</mark>",
        topRightText: `<mark>Fa[tima]-Ezzahra El Khammas<mark> 
        <a href="mailto:timaelkhammas@gmail.com">timaelkhammas[@]gmail.com</a>`,
        className: 'page-3',
        isPortrait: false
    },
    {
        content: "<mark>Double roomsheet/poster design for the Craft Studies MA exhibition 'Objects or Things' at the Estonian Academy of Arts.</mark>",
        topRightText: `<mark>Fa[tima]-Ezzahra El Khammas<mark>
        <a href="mailto:timaelkhammas@gmail.com">timaelkhammas[@]gmail.com</a>`,
        className: 'page-4',
        isPortrait: false
    },
    {
        content: "<mark>In-context lecture tour 'I Know Enough To Ask For Water' exploring Ülemiste lake's mythology. Part of Laura Pappa's course Work in Context.</mark>",
        topRightText: `<mark>Fa[tima]-Ezzahra El Khammas<mark>
        <a href="mailto:timaelkhammas@gmail.com">timaelkhammas[@]gmail.com</a>`,
        className: 'page-5',
        isPortrait: false
    },
    {
        content: "<mark>Workshop 'Myth within Memory' exploring myth as a mediator of memory through a series of drawing exercises. Part of Laura Pappa's course Work in Context.</mark>",
        topRightText: `<mark>Fa[tima]-Ezzahra El Khammas<mark> 
        <a href="mailto:timaelkhammas@gmail.com">timaelkhammas[@]gmail.com</a>`,
        className: 'page-6',
        isPortrait: false
    },
    {
        content: "<mark>Workshop 'Myth within Memory' exploring myth as a mediator of memory through a series of drawing exercises. Part of Laura Pappa's course Work in Context.</mark>",
        topRightText: `<mark>Fa[tima]-Ezzahra El Khammas<mark>
        <a href="mailto:timaelkhammas@gmail.com">timaelkhammas[@]gmail.com</a>`,
        className: 'page-7',
        isPortrait: false
    },
    {
        content: "<mark>Issue #1 of ta[kh]zine, an independent research and publishing project dedicated to archives of political publishing practices in the context of Morocco.</mark>",
        topRightText: `<mark>Fa[tima]-Ezzahra El Khammas<mark>
        <a href="mailto:timaelkhammas@gmail.com">timaelkhammas[@]gmail.com</a>`,
        className: 'page-8',
        isPortrait: false
    },
    {
        content: "<mark>Issue #1 of ta[kh]zine, an independent research and publishing project dedicated to archives of political publishing practices in the context of Morocco.</mark>",
        topRightText: `<mark>Fa[tima]-Ezzahra El Khammas<mark> 
        <a href="mailto:timaelkhammas@gmail.com">timaelkhammas[@]gmail.com</a>`,
        className: 'page-9',
        isPortrait: false
    },
    {
        content: "<mark>Workshop 'Hammer & Chisel' organized with Laura Martens as part of the Stand-in School for Graphic Design program in Berlin, Germany.</mark>",
        topRightText: `<mark>Fa[tima]-Ezzahra El Khammas<mark>
        <a href="mailto:timaelkhammas@gmail.com">timaelkhammas[@]gmail.com</a>`,
        className: 'page-10',
        isPortrait: false
    },
    {
        content: "<mark>Workshop 'Hammer & Chisel' organized with Laura Martens as part of the Stand-in School for Graphic Design program in Berlin, Germany.</mark>",
        topRightText: `<mark>Fa[tima]-Ezzahra El Khammas<mark> 
        <a href="mailto:timaelkhammas@gmail.com">timaelkhammas[@]gmail.com</a>`,
        className: 'page-11',
        isPortrait: false
    },
];

let currentPage = 0;

function updateContent() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `<p>${pages[currentPage].content}</p>`;
    document.body.className = pages[currentPage].className;
    
    if (pages[currentPage].isPortrait) {
        document.body.classList.add('portrait');
    } else {
        document.body.classList.remove('portrait');
    }

    const topRightText = document.querySelector('.top-right-text');
    if (pages[currentPage].topRightText) {
        topRightText.innerHTML = pages[currentPage].topRightText.replace(/\n/g, '<br>');
        topRightText.style.display = 'block';
    } else {
        topRightText.innerHTML = "";
        topRightText.style.display = 'none';
    }

    const existingVideo = document.querySelector('.background-video');
    if (existingVideo) {
        existingVideo.remove();
    }

    if (pages[currentPage].type === 'video') {
        const video = document.createElement('video');
        video.src = pages[currentPage].videoSrc;
        video.autoplay = true;
        video.loop = true;
        video.muted = true;
        video.className = 'background-video';
        document.body.appendChild(video);
    }
}

function navigate(direction) {
    if (direction === 'next' && currentPage < pages.length - 1) {
        currentPage++;
    } else if (direction === 'prev' && currentPage > 0) {
        currentPage--;
    }
    updateContent();
}

document.querySelector('.right').addEventListener('click', () => navigate('next'));
document.querySelector('.left').addEventListener('click', () => navigate('prev'));

updateContent();