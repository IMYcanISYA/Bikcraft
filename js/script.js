const burgerBtn = document.querySelector('.burger-btn');
const burgerMenu = document.querySelector(".nav-header__list");

const bikeImages = document.querySelectorAll('[data-img]');
const modalItem = document.querySelector('.modal-item');

const tabQuestions = document.querySelectorAll('.tab-question');

/*-----------------------Burger-------------------------*/

if (burgerBtn && burgerMenu) {
	burgerBtn.addEventListener('click', () => {
		burgerBtn.classList.toggle('_active');
		burgerMenu.classList.toggle('_active');
		document.querySelector('html').classList.toggle("_lock");
})
}
/*-----------------------/Burger-------------------------*/

/*-----------------------Gallery-------------------------*/

if (bikeImages && modalItem) {
	const modalItemClose = modalItem.querySelector('.modal-btn');
	const modalImage = document.querySelector('.modal-item__img');

	modalItemClose.addEventListener('click', () => {
		modalItem.classList.remove('_active');
	})
	bikeImages.forEach(img => {
		img.addEventListener('click', () => {
			modalItem.classList.add("_active");
			modalImage.src = img.src;
		})
	})
}

/*-----------------------/Gallery-------------------------*/

/*-----------------------Tabs-------------------------*/

if (tabQuestions) {
	tabQuestions.forEach(tab => {
		const desc = tab.querySelector('.tab-question__desc-wrapper');
		const btn = tab.querySelector('button'); 
		btn.addEventListener('click', () => {
			let height = desc.querySelector('.tab-question__desc').offsetHeight;

			tabQuestions.forEach(item => {
				item.classList.remove('_active');
				const desc1 = item.querySelector('.tab-question__desc-wrapper');
				desc1.style.height = 0;
			})

			tab.classList.toggle('_active');

			if (tab.classList.contains('_active')) {
				desc.style.height = `${height}px`;
			} else {
				desc.style.cssText = "";
			}
		})
	})
}

/*-----------------------/Tabs-------------------------*/