let navigatorMenu = [
	// {
	// 	key:'user',
	// 	icon:'user' , 
	// 	name:'管理员',
	// 	subMenu:[
	// 		{key:'user/juese', name:'角色' , url:'/authority/employee'},
	// 		{key:'user/glry', name:'管理人员',url:'/home'},
	// 		{key:'user/qx', name:'权限'},
	// 	]
	// },
	{key:'/admin',icon:'admin' , name:'管理员'},
	{key:'user',icon:'user' , name:'用户',url:'/user/list'},
]

function packMap(menus){
	let urlMapKey = {}
	for(let i = 0 ; i < menus.length ; i++){
		let item = menus[i];
		if(item.key && item.url){
			urlMapKey[item.url] = item.key
		}
		if(item.subMenu){
			return packMap(item.subMenu);
		}
	}
	return urlMapKey;
}
module.exports = {
	navigatorMenu,
	urlMapKey:packMap(navigatorMenu)
}

