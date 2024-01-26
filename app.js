// // // const sup = document.getElementById()


document.addEventListener('click', function() {
    // Redirect to another page when the user clicks anywhere on the document
    window.location.href = 'login.html';
});

document.getElementsByClassName('span-6').addEventListener('click', function(event) {
    event.stopPropagation();
});


// // let firstClick = true;

// // document.addEventListener('click', function() {
// //     if (firstClick) {
// //         // Redirect to another page only on the first click
// //         window.location.href = 'login.html';
// //         firstClick = false;
// //     }
// // });

// // // Prevent redirection when clicking inside the signup container
// // document.getElementsByClassName('span').addEventListener('click', function(event) {
// //     event.stopPropagation();
// // });


// // // let firstClick = localStorage.getItem('firstClick') === 'true';

// // // document.addEventListener('click', function() {
// // //     if (firstClick) {
// // //         // Redirect to another page only on the first click
// // //         window.location.href = 'login.html';
// // //         firstClick = false;
// // //         localStorage.setItem('firstClick', 'false');
// // //     }
// // // });

// // // // Prevent redirection when clicking inside the signup container
// // // document.getElementsByClassName('span').addEventListener('click', function(event) {
// // //     event.stopPropagation();
// // // });


// // // let firstClick = localStorage.getItem('firstClick') !== 'true';

// // // document.getElementsByClassName('span').addEventListener('click', function() {
// // //     if (firstClick) {
// // //         // Redirect to another page only on the first click
// // //         window.location.href = 'login.html';
// // //         firstClick = false;
// // //         localStorage.setItem('firstClick', 'false');
// // //     }
// // // });




// const delayTime = 1;

// // Use setTimeout to redirect to another page after the specified delay
// setTimeout(function() {
//     // Change the URL to the desired destination
//     window.location.href = 'login.html';
// }, delayTime);