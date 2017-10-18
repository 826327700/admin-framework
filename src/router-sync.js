import customer from './views/nav/customer.vue'
import customerDetail from './views/nav/customer.info.vue'
import customerEdit from './views/nav/customer.edit.vue'
import data from './views/nav/data.vue'
import account from './views/nav/account.vue'
import systemAccount from './views/nav/systemAccount.vue'
import reportAccount from './views/nav/reportAccount.vue'
import systemAccountAdd from './views/nav/systemAccount.add.vue'
import reportAccountAdd from './views/nav/reportAccount.add.vue'
import changePassword from './views/nav/password.vue'
import main from './views/main.vue'
import login from './views/login.vue'


const nav=[
{
    path: '/customer',
    meta: {
        title: '控制台'
    },
    name:'客户管理',
    component:customer,
    
},{
    path: '/customer/:id',
    meta: {
        title: '控制台'
    },
    name:'客户管理',
    hidden:true,
    component: customerDetail,
    
},{
    path: '/addcustomer',
    meta: {
        title: '控制台'
    },
    name:'客户管理',
    hidden:true,
    component: customerEdit,
    
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
    component: data,
    
},
{
    path: '/',
    meta: {
        title: '控制台'
    },
    name:'账号管理',
    component: account,
    children: [
    	{ path: '/admin-account', component: systemAccount, name: '后台账号'},
    	{ path: '/report-account', component: reportAccount, name: '看板账号'},
    	{ path: '/admin-account-add', component: systemAccountAdd, name: '添加后台账号',hidden:true},
    	{ path: '/report-account-add', component: reportAccountAdd, name: '添加看板账号',hidden:true},
    ]
},{
    path: '/changepassword',
    meta: {
        title: '控制台'
    },
    name:'修改密码',
    component: changePassword,
    
}];

const routers = [
{
	path: '/Home',
    meta: {
        title: '控制台'
    },
    name:'控制台',
    hidden:true,
    component: main,
    children:nav
},{
    path: '/',
    meta: {
        title: '登录'
    },
    name:'登录',
    hidden:true,
    component: login
},]


export default routers;