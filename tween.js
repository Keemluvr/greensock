// -------------------------------------
//  ---------------- to ----------------
// -------------------------------------

//to é o tipo de animação mais comum

// https://greensock.com/docs/v3/GSAP/Tween
// .to("elemento", {
//      x: "para onde o elemento irá na horizontal",
//      y: "para onde o elemento irá na vertical",
//      delay: "atraso antes do início da animação em segundos"
//      duration: "duração da animação em segundos (default:0.5)",
//      ease: "controla a taxa de alteração durante a animação (https://greensock.com/docs/v3/Eases)"
// })
gsap.to(".one", { 
    x: 300, 
    y: 20,
    delay: 1,
    duration: 5, 
    ease: "bounce.out",
});

// Randomico
gsap.to(".two", { x: "random(20, 300, 5)", duration: 5, ease: "elastic"});

