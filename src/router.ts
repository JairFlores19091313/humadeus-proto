import { createRouter, createWebHistory,  type RouteRecordRaw } from 'vue-router';
//import mainRoutes from './router/mainRoutes.ts';
//import { getAuth } from 'firebase/auth';


declare module 'vue-router' {
    interface RouteMeta {
      title?: string; // Agrega el tipo de la meta propiedad `title`
    }
}

const routes: RouteRecordRaw[] = [
    { path: '/', component: () => import('./pages/HomePage.vue'), name: 'Humadeus Home',
        meta: {
            title: "Humadeus | Universidad Humanitas",
            //requireAuth: false
        },
    },
    { path: '/nosotros', component: () => import('./pages/NosotrosPage.vue'), name: 'Nosotros',
        meta: {
            title: "Nosotros | Humadeus",
            //requireAuth: false
        },
    },
    { path: '/soluciones', component: () => import('./pages/SolucionesPage.vue'), name: 'soluciones',
        meta: {
            title: "Soluciones | Humadeus",
            //requireAuth: false
        },
    },
    { path: '/contactanos', component: () => import('./pages/ContactoPage.vue'), name: 'Contactanos',
        meta: {
            title: "Contactanos | Humadeus",
            //requireAuth: false
        },
    },
    // { path: '/solicita-tu-credito', component: () => import('./pages/SolCredPage.vue'), name: 'Solicita tu credito',
    //     meta: {
    //         title: "Solicita tu crédito | Humadeus",
    //         //requireAuth: false
    //     },
    // },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior() {
		return { top: 0 };
	},
});

router.beforeEach((to, _, next) => {
	// Lista de parámetros prohibidos
	const forbiddenParams = ['__hstc=', '__hssc=', '__hsfp='];
	// Comprobar si la ruta de destino contiene algún parámetro prohibido
	const hasForbiddenParams = forbiddenParams.some(param => to.query.hasOwnProperty(param));
	// Comprobar si la ruta tiene barra diagonal al final
	const hasTrailingSlash = to.path !== '/' && to.path.endsWith('/');
	// Si hay parámetros prohibidos
	if (hasForbiddenParams) {
	  	// Redirigir a la misma ruta sin parámetros
		const cleanPath = to.path;
		next({ path: cleanPath, query: {} });
	} 
	// Si hay barra diagonal al final
	else if (hasTrailingSlash) {
		// Redirigir a la ruta sin la barra diagonal al final
		next({ path: to.path.slice(0, -1), query: to.query });
	} 
	// Si no hay parámetros prohibidos ni barra al final, continuar
	else {
		next();
	}
});

// router.beforeEach((to, _, next) => {
// 	const requiresAuth = to.matched.some(record => record.meta.requireAuth);
// 	const auth = getAuth();
// 	const isAuthenticated = !!auth.currentUser;

// 	if (requiresAuth && !isAuthenticated) {
// 		next('/blog/login');
// 	} else {
// 		next();
// 	}
// });


export default router;