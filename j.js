burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navlist = document.querySelector('.nav-list')
rightnav = document.querySelector('.rightnav');

burger.addEventListener('click', ()=>{
	rightnav.classList.toggle('v-cl');
	navlist.classList.toggle('v-cl');
	navbar.classList.toggle('h-nav');
})