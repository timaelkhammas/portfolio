const pages = [
    {
        content: ``,
        topRightText: `Fa[tima]-Ezzahra El Khammas is an independent graphic designer. 
        I mainly work with writing, research, printed matter, identities, web and others.

        For my full portfolio
        <a href="mailto:timaelkhammas@gmail.com">timaelkhammas[@]gmail.com</a>
        `, 
        className: 'page-1' 
    },
    {
        content: "The fourth EKA GD MA display library “What We Did With The Budget”, presenting a collection of publications and objects acquired from the Ghent Art Book Fair.",
        topRightText: "EKA GD MA Display Library Exhibition #4 with Laura Martens, 2024", 
        className: 'page-2' 
    },
    {
        content: "The fourth EKA GD MA display library “What We Did With The Budget”, presenting a collection of publications and objects acquired from the Ghent Art Book Fair.",
        topRightText: "EKA GD MA Display Library Exhibition #4 with Laura Martens, 2024", 
        className: 'page-3' 
    },
    {
        content: "A workshop organized within the framework of Laura Pappa's course Work In Context exploring myth as a mediator of memory.",
        topRightText: "Memory within Myth, 2024", 
        className: 'page-4'
    },
    {
        content: "A workshop organized within the framework of Laura Pappa's course Work In Context exploring myth as a mediator of memory.",
        topRightText: "Memory within Myth, 2024", 
        className: 'page-5'
    },
    {
        content: "Research exploring archives of political publishing practices in the context of Morocco.",
        topRightText: "ta[kh]zine, ongoing", 
        className: 'page-6'
    },
    {
        content: "Research exploring archives of political publishing practices in the context of Morocco.",
        topRightText: "ta[kh]zine, ongoing", 
        className: 'page-7'
    },
    {
        content: "Research exploring archives of political publishing practices in the context of Morocco.",
        topRightText: "ta[kh]zine, ongoing", 
        className: 'page-8'
    },

];


let currentPage = 0; 

function updateContent() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <p>${pages[currentPage].content}</p>
    `;
    document.body.className = pages[currentPage].className;

    const topRightText = document.querySelector('.top-right-text');
    if (pages[currentPage].topRightText) {
        topRightText.innerHTML = pages[currentPage].topRightText.replace(/\n/g, '<br>');
        topRightText.style.display = 'block'; 
    } else {
        topRightText.innerHTML = "";
        topRightText.style.display = 'none'; 
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