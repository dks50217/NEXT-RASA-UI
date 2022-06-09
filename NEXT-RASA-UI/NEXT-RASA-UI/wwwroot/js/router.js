const routes = [
	{
		path: '/home',
		name: 'Home',
		component: httpVueLoader('../component/home.vue')
	}
];

const router = new VueRouter({
	routes
});