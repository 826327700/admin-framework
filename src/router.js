
const nav=[
{
    path: '/customer',
    meta: {
        title: '控制台'
    },
    name:'客户管理',
    component: (resolve) => require(['./views/nav/customer.vue'], resolve),
    
},{
    path: '/customer/:id',
    meta: {
        title: '控制台'
    },
    name:'客户管理',
    hidden:true,
    component: (resolve) => require(['./views/nav/customer.info.vue'], resolve),
    
},{
    path: '/addcustomer',
    meta: {
        title: '控制台'
    },
    name:'客户管理',
    hidden:true,
    component: (resolve) => require(['./views/nav/customer.edit.vue'], resolve),
    
},{
    path: '/display',
    meta: {
        title: '控制台'
    },
    name:'显示设置',
    component: (resolve) => require(['./views/nav/display.vue'], resolve),
    
},{
    path: '/data',
    meta: {
        title: '控制台'
    },
    name:'模拟数据',
    component: (resolve) => require(['./views/nav/data.vue'], resolve),
    
},
{
    path: '/Home',
    meta: {
        title: '控制台'
    },
    name:'账号管理',
    component: (resolve) => require(['./views/nav/account.vue'], resolve),
    children: [
    	{ path: '/admin-account', component: (resolve) => require(['./views/nav/systemAccount.vue'], resolve), name: '后台账号'},
    	{ path: '/report-account', component: (resolve) => require(['./views/nav/reportAccount.vue'], resolve), name: '看板账号'},
    	{ path: '/admin-account-add', component: (resolve) => require(['./views/nav/systemAccount.add.vue'], resolve), name: '添加后台账号',hidden:true},
    	{ path: '/report-account-add', component: (resolve) => require(['./views/nav/reportAccount.add.vue'], resolve), name: '添加看板账号',hidden:true},
    ]
},{
    path: '/changepassword',
    meta: {
        title: '控制台'
    },
    name:'修改密码',
    component: (resolve) => require(['./views/nav/password.vue'], resolve),
    
}];

const routers = [
{
	path: '/Home',
    meta: {
        title: '控制台'
    },
    name:'控制台',
    hidden:true,
    component: (resolve) => require(['./views/main.vue'], resolve),
    children:nav
},{
    path: '/',
    meta: {
        title: '登录'
    },
    name:'登录',
    hidden:true,
    component: (resolve) => require(['./views/login.vue'], resolve)
},]


export default routers;