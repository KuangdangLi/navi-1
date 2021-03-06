const $siteList = $('.siteList');
const $lastLi = $siteList.find('.last');
const x = localStorage.getItem('x');
const xObject = JSON.parse(x);
const hashMap = xObject || [
    {
        logo: 'A',
        logoType: 'text',
        url: 'https://www.acfun.cn/'
    },
    {
        logo: 'B',
        logoType: 'text',
        url: 'https://bilibili.com'
    }, 
];
const simplifyUrl = (url)=>{
    return url.replace('http://', '').replace('https://', '').replace('www.', '').replace(/\/.*/, '');
};
const render = ()=>{
    $siteList.find('li:not(.last)').remove();
    hashMap.forEach((node, index)=>{
        const $li = $(`<li>
        <div class="site">
        <div class="logo">
            ${simplifyUrl(node.url)[0].toUpperCase()}
        </div>
        <div class="link">${simplifyUrl(node.url)}</div>
        </div>
        <div class='close'>
        <img src='../src/images/delete.png'></img>
        </div>
    </li>`).insertBefore($lastLi);
        $li.on('click', ()=>{
            window.open(node.url);
        });
        $li.on('click', '.close', (e)=>{
            e.stopPropagation();
            hashMap.splice(index, 1);
            render();
        });
    });
};
render();
// $(".addButton")
//     .on("click",()=>{
//         let url = window.prompt('请问你要添加的网址是啥')
//         if(url.indexOf('http')!== 0){
//             urlNew = 'https://' +url
//         }else{
//             urlNew = url
//         }
//         hashMap.push({
//             logo: url[0],
//             logoType: 'text',
//             url: urlNew
//         })
//         render()
//     })
$('.addButton').on('click', ()=>{
    let url = window.prompt('请问你要添加的网址是啥？');
    if (url.indexOf('http') !== 0) url = 'https://' + url;
    console.log(url);
    hashMap.push({
        logo: simplifyUrl(url)[0].toUpperCase(),
        url: url
    });
    render();
});
$(document).on('keypress', (e)=>{
    const { key  } = e;
    console.log(key);
    for(let i = 0; i < hashMap.length; i++)if (hashMap[i].logo.toLowerCase() === key) {
        console.log(i);
        console.log(hashMap.length);
        console.log(hashMap[i]);
        console.log(hashMap[i].logo.toLowerCase());
        console.log(hashMap[i].url);
        window.open(hashMap[i].url);
    }
}) // window.onbeforeunload = ()=>{
 //     console.log('页面要关闭了')
 //     const string = JSON.stringify(hashMap)
 //     localStorage.setItem('x',string)
 // }
;

//# sourceMappingURL=index.ae50f34f.js.map
