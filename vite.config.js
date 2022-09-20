//import { sveltekit } from '@sveltejs/kit/vite';

//const config = {
//	plugins: [sveltekit()]
//};

//export default config;


import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	optimizeDeps: {
		include: ['pym.js'],
	  },
	plugins: [sveltekit()],
};

export default config;