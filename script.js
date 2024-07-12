function start() {
    document.getElementById('landing-page').classList.add('hidden');
    document.getElementById('main-page').classList.remove('hidden');
}

function toggleInfo(element) {
    const info = element.querySelector('.info');
    if (info) {
        info.classList.toggle('hidden');
    }
}

document.getElementById('launching-button').addEventListener('click', () => {
    const launchingDate = document.getElementById('launching-date');
    if (launchingDate.classList.contains('hidden')) {
        launchingDate.classList.remove('hidden');
        document.getElementById('date-placeholder').innerText = '2024-08-01';
    } else {
        launchingDate.classList.add('hidden');
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const launchingButton = document.getElementById('launching-button');
    launchingButton.style.backgroundColor = '#8B4513'; // Brown background color
    launchingButton.style.color = '#fff'; // White text color
    launchingButton.addEventListener('mouseover', function() {
        launchingButton.style.backgroundColor = '#A0522D'; // Darker brown on hover
    });
    launchingButton.addEventListener('mouseout', function() {
        launchingButton.style.backgroundColor = '#8B4513'; // Brown background color
    });
});
