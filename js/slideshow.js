/**
 * Created by Arvind on 23-03-2016.
 */

$('.bgVid').vegas({
    slides: [
        {video: {src: 'img/bgVid.mp4', loop: true, mute: true}}
    ]
})

$('.slide').vegas({
    slides: [
        {src: 'img/slider/1.jpg'},
        {src: 'img/slider/2.jpg'},
        {src: 'img/slider/3.jpg'},
        {src: 'img/slider/4.jpg'},
        {src: 'img/slider/5.jpg'},
        {src: 'img/slider/6.jpg'}
    ],
    transition: 'swirlRight2',
    timer: false
});

var anims = ["slideUp", "slideLeft", "slideRight","slideDown", "fade", "blur", "slideUp2", "slideLeft2", "slideRight2", "fade2"];

var anum = ~~(Math.random()*10);




$('.updates').vegas({
    slides: [
        {src: 'img/ft-bg/1.jpg', transition: anims[0]},
        {src: 'img/ft-bg/2.jpg', transition: anims[1]},
        {src: 'img/ft-bg/3.jpg', transition: anims[3]},
        {src: 'img/ft-bg/4.jpg', transition: anims[2]}
    ],
    transition: anims[anum],
    delay: 3000,
    transitionDuration: 2000,
    timer: false,
    shuffle: true
});

var num = [];

for(i=0; i<10; i++)
    num[i] = (~~(Math.random()*10));

$('.ssh').vegas({
    slides: [
        {src: 'img/ssh-bg/1.jpg', transition: anims[num[0]]},
        {src: 'img/ssh-bg/2.jpg', transition: anims[num[1]]},
        {src: 'img/ssh-bg/3.jpg', transition: anims[num[2]]},
        {src: 'img/ssh-bg/4.jpg', transition: anims[num[3]]},
        {src: 'img/ssh-bg/5.jpg', transition: anims[num[4]]},
        {src: 'img/ssh-bg/6.jpg', transition: anims[num[5]]},
        {src: 'img/ssh-bg/7.jpg', transition: anims[num[6]]},
        {src: 'img/ssh-bg/8.jpg', transition: anims[num[7]]},
        {src: 'img/ssh-bg/9.jpg', transition: anims[num[8]]},
        {src: 'img/ssh-bg/10.jpg', transition: anims[num[9]]},
        {src: 'img/ssh-bg/11.jpg', transition: anims[num[10]]},
        {src: 'img/ssh-bg/12.jpg', transition: anims[num[0]]},
        {src: 'img/ssh-bg/13.jpg', transition: anims[num[1]]},
        {src: 'img/ssh-bg/14.jpg', transition: anims[num[2]]},
        {src: 'img/ssh-bg/15.jpg', transition: anims[num[3]]}
    ],
    transition: anims[anum],
    delay: 3000,
    transitionDuration: 2000,
    shuffle: true
})