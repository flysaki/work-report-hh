import Vue from 'vue'
import VueRouter from 'vue-router'
import WorkReport from "../views/WorkReport";

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'WorkReport',
		component: WorkReport
	},
]

const router = new VueRouter({
	mode: 'history',
	base: '/work-report-hh/', //process.env.BASE_URL,
	routes
})

export default router
