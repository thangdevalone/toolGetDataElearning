const data=(s,e)=>{
    var resuilt=[]
    for(var i=s;i<e;i++){
        console.log('Tiến trình lấy dữ liệu: ',(1-(e-i)/(e-s)) *100 ,' %' )
        const DOM=getSourceAsDOM(`https://elearning.thanglong.edu.vn/user/profile.php?id=${i}`)
        const name =DOM.querySelector('.page-header-headings h1').innerHTML
        const avt=DOM.querySelectorAll('.userpicture')[1].src
        const sdt=DOM.querySelectorAll('.contentnode dl dd')[2].innerHTML
        if (name !== undefined && avt !==undefined && sdt!==undefined){
            const item={
                name:name,
                avt:avt,
                sdt: sdt==='Hà Nội'?'0965204955':sdt
            }
            resuilt.push(item)
        }
    }
    return resuilt
}
function getSourceAsDOM(url)
{
    xmlhttp=new XMLHttpRequest();
    xmlhttp.open("GET",url,false);
    xmlhttp.send();
    parser=new DOMParser();
    return parser.parseFromString(xmlhttp.responseText,"text/html");      
}
const dataFetch=data(23000,24000) // ( 24000=A42649 , 23000=A41644) 
console.log(dataFetch)
