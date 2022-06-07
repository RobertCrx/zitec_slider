document.addEventListener('DOMContentLoaded', function () {

    const slider = document.querySelector('#slider');
    const button = document.querySelector('#incrementButton');
    const progress = document.querySelector('#slider-progress');
    const target = document.querySelector('#target');
    const current_target = document.querySelector('#current-target');

    // la click adauga inca 1 elev;
    // dar tu poti sa legi la un alt eveniment
    button.addEventListener('click', function (e) {
        e.preventDefault();


        var min_value = progress.dataset.min;
        var max_value = progress.dataset.max;
        var progress_value = progress.dataset.progress;


        progress.style.width = (max_value - progress.dataset.progress) / 100 + '%';
        target.style.left = (max_value - progress.dataset.progress) / 100 + '%';
        current_target.style.left = (max_value - progress.dataset.progress) / 100 + '%';

        console.log(target_pos);




    });

}, false);

