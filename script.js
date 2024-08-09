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
}, { capture: false })
popupbg.addEventListener('click', (e) => {
	e.stopPropagation()
	popupbg.style.display = "none"
}, { capture: false })