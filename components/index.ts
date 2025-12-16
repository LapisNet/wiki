import { type App, defineAsyncComponent } from 'vue';

const components = [
	{ name: 'mcw', filename: 'Mcw' },
	{ name: 'wikipedia', filename: 'Wikipedia' },
	{ name: 'wzh', filename: 'Wzh' },

	{ name: 'hide', filename: 'Hide' },
	{ name: 'infobox', filename: 'Infobox'},
	{ name: 'Wip', filename: 'Wip' },
	{ name: 'LateDream-watching', filename: 'LateDreamWatching' }
];

export const registerComponents = (app: App) => {
	components.forEach(({ name, filename }) => {
		app.component(name, defineAsyncComponent(() => import(`./${filename}.vue`)));
	});
}
