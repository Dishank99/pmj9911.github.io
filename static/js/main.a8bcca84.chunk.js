(this["webpackJsonpdevelopers-portfolio"]=this["webpackJsonpdevelopers-portfolio"]||[]).push([[0],{1:function(e){e.exports=JSON.parse('{"a":"Parth","c":"","b":"Jardosh","i":[{"id":0,"image":"fa-twitter","url":"https://www.twitter.com/parthjardosh/","style":"socialicons"},{"id":1,"image":"fa-github","url":"https://github.com/pmj9911","style":"socialicons"},{"id":2,"image":"fa-linkedin","url":"https://www.linkedin.com/in/parth-jardosh/","style":"socialicons"},{"id":3,"image":"fa-hackerrank","url":"https://www.hackerrank.com/parthjardosh","style":"socialicons"},{"id":4,"image":"fa-google","url":"mailto:parthjardosh@gmail.com","style":"socialicons"}],"e":"About Me","q":false,"j":"https://www.instagram.com/","l":"parthj9911","k":"/?__a=1","d":"Final year undergraduate pursuing Bachelor of Technology in Computer Science at Sardar Patel Institute of Technology, Mumbai. Interested in developing Deep Learning projects and Web development using Python/Django. I have also developed mobile applications using Flutter.","m":"Recent Projects","f":"https://api.github.com/users/","h":"pmj9911","g":"/repos?sort=updated&direction=desc","n":22,"r":true,"o":false,"p":true,"s":true}')},15:function(e,a,t){e.exports=t.p+"static/media/ParthJardosh_Resume.92c5926a.pdf"},33:function(e,a,t){e.exports=t.p+"static/media/profilePic.324d055c.jpg"},34:function(e,a,t){e.exports=t.p+"static/media/WordifyMe-1.d120e8ad.jpg"},37:function(e,a,t){e.exports=t.p+"static/media/VESIM.287cd54d.jpg"},38:function(e,a,t){e.exports=t.p+"static/media/NMIMS.9baae4f9.jpeg"},39:function(e,a,t){e.exports=t.p+"static/media/HackByTheBeach.33fb45d7.jpeg"},40:function(e,a,t){e.exports=t.p+"static/media/VIT-HACK.75c57237.jpeg"},42:function(e,a,t){e.exports=t(73)},47:function(e,a,t){},51:function(e,a,t){},73:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(32),c=t.n(i),l=(t(47),t(7)),o=t(9),s=(t(48),t(49),t(51),t(1)),m=t(41),u=t(3),d=t(16),p=t.n(d),h=function(){var e=Object(n.useState)(new Array(s.i.length).fill("socialicons")),a=Object(u.a)(e,2),t=a[0],i=a[1],c=function(e){var a=Object(m.a)(t);return"enter"===e.event?(a[e.icon.id]="socialiconshover",i(a)):"leave"===e.event?(a[e.icon.id]="socialicons",i(a)):void 0};return r.a.createElement("div",null,r.a.createElement("div",{id:"home",className:"title jumbotron jumbotron-fluid bg-transparent bgstyle text-dark min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"},r.a.createElement("div",{id:"stars"}),r.a.createElement("div",{className:"container container-fluid text-center "},r.a.createElement("h1",{className:"display-1"},s.a+" "+s.c+" "+s.b),r.a.createElement(p.a,{className:"lead",cursor:{hideWhenDone:!0}},r.a.createElement("span",null," Back-End Developer |"),r.a.createElement(p.a.Backspace,{count:21,delay:500}),r.a.createElement("span",null,"ML AI Enthusiast |"),r.a.createElement(p.a.Backspace,{count:18,delay:500}),r.a.createElement("span",null," After all this time?"),r.a.createElement(p.a.Backspace,{count:0,delay:700}),r.a.createElement("span",null,"..... Always!")),r.a.createElement("div",{className:"p-5"},s.i.map((function(e){return r.a.createElement("a",{key:e.id,target:"_blank",rel:"noopener noreferrer",href:e.url,"aria-label":"My ".concat(e.image.split("-")[1])},r.a.createElement("i",{className:"fab ".concat(e.image,"  fa-3x ").concat(t[e.id]),onMouseOver:function(){return c({icon:e,event:"enter"})},onMouseOut:function(){return c({icon:e,event:"leave"})}}))}))),r.a.createElement("a",{className:"btn btn-outline-light btn-lg",href:"#aboutme",role:"button","aria-label":"Learn more about me"},"More about me"))))},g=t(11),b=t.n(g),E=t(15),f=t.n(E),v=t(33),y=t.n(v),N=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=(a[0],a[1]),i=Object(n.useState)(s.q),c=Object(u.a)(i,2),l=c[0],o=c[1],m=Object(n.useState)(f.a),d=Object(u.a)(m,1)[0];Object(n.useEffect)((function(){l&&p()}),[l]);var p=function(e){b.a.get(s.j+s.l+s.k).then((function(e){return t(e.data.graphql.user.profile_pic_url_hd)})).catch((function(e){return o(!1),console.error(e.message)})).finally((function(){}))};return r.a.createElement("div",{id:"aboutme",className:"jumbotron jumbotron-fluid m-0"},r.a.createElement("div",{className:"container container-fluid p-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 d-none d-lg-block align-self-center"},r.a.createElement("img",{className:"border border-secondary rounded-circle",src:y.a,alt:"profile picture"})),r.a.createElement("div",{className:"col-lg-8"},r.a.createElement("h1",{className:"display-4 mb-5 text-center"},s.e),r.a.createElement("p",{className:"lead "},s.d),d&&r.a.createElement("p",{className:"lead text-center"},r.a.createElement("a",{className:"btn btn-outline-dark btn-lg",href:f.a,target:"_blank",rel:"noreferrer noopener",role:"button","aria-label":"Resume/CV"},"Resume"))))))},k=function(e){var a=e.value,t=Object(n.useState)([]),i=Object(u.a)(t,2),c=i[0],l=i[1],o=Object(n.useCallback)((function(e){b.a.get(a).then((function(e){return l(e.data)})).catch((function(e){return console.error(e.message)})).finally((function(){}))}),[a]);Object(n.useEffect)((function(){o()}),[o]);var s=[],m=0;for(var d in c)s.push(d),m+=c[d];return r.a.createElement("div",{className:"pb-3"},"Technologys:"," ",s.map((function(e){return r.a.createElement("p",{key:e,className:"badge badge-light card-link"},e,": ",Math.trunc(c[e]/m*1e3)/10," %")})))},j=function(e){var a=e.value,t=Object(n.useState)("0 mints"),i=Object(u.a)(t,2),c=i[0],l=i[1],o=Object(n.useCallback)((function(e){var t=new Date(a.pushed_at),n=(new Date).getTime()-t.getTime(),r=Math.trunc(n/1e3/60/60);if(r<24)return l("".concat(r.toString()," hours ago"));var i=t.getDate(),c=t.getMonth(),o=t.getFullYear();return l("on ".concat(i," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][c]," ").concat(o))}),[a.pushed_at]);Object(n.useEffect)((function(){o()}),[o]);var s=a.name,m=a.description,d=a.svn_url,p=a.stargazers_count,h=a.languages_url;return r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"card shadow-lg p-3 mb-5 bg-white rounded"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},s," "),r.a.createElement("p",{className:"card-text"},m," "),r.a.createElement("a",{href:"".concat(d,"/archive/master.zip"),className:"btn btn-outline-secondary mr-3"},r.a.createElement("i",{className:"fab fa-github"})," Clone Project"),r.a.createElement("a",{href:d,target:" _blank",className:"btn btn-outline-secondary"},r.a.createElement("i",{className:"fab fa-github"})," Repo"),r.a.createElement("hr",null),r.a.createElement(k,{value:h}),r.a.createElement("p",{className:"card-text"},r.a.createElement("span",{className:"text-dark card-link mr-4"},r.a.createElement("i",{className:"fab fa-github"})," Stars"," ",r.a.createElement("span",{className:"badge badge-dark"},p)),r.a.createElement("small",{className:"text-muted"},"Updated ",c)))))},w=t(12),D=function e(a){var t=this,i=a.name,c=a.githubLink,l=a.projectDuration,o=a.description,s=a.Technology;Object(w.a)(this,e),this.list=[],this.addParagraph=function(e){return t.list.push(r.a.createElement("p",{key:t.list.length,className:"lead"},e)),t},this.addImage=function(e){return t.list.push(r.a.createElement("div",{style:{height:"300px"}},r.a.createElement("img",{key:t.list.length,className:"circle mb-3",src:e,style:{height:"100%",width:"100%",objectFit:"contain"},alt:"".concat(e)}))),t},this.addHeading=function(e){return t.list.push(r.a.createElement(n.Fragment,{key:t.list.length},r.a.createElement("h4",{className:""},e),r.a.createElement("hr",null))),t},this.getProject=function(){return r.a.createElement("div",{className:"container-lg"},t.list)},this.name=i,this.githubLink=c,this.projectDuration=l,this.description=o,this.Technology=s},x=t(34),T=t.n(x),P=new D({name:"WordifyMe ",githubLink:"https://github.com/pmj9911/WordifyMe",Technology:["python-plain-wordmark"],description:"Made as a part of GRE study, to efficiently remember custom word lists. It is a mobile application, made using Flutter. There is no login system in this app yet. All the data is stored in a central server hosted on pythonanywhere.",projectDuration:"March 2020 - June 2020 "}).addHeading("Description:").addParagraph("").addHeading("Screenshots:").addImage(T.a),S=[];S.push(P);var L=new D({name:"Segro",githubLink:"https://github.com/pmj9911/Segro",description:" An end to end solution for waste segregation, collection and disposal. Me and my team mate, Ms. Shloka Shah came up with this idea in Hack-N-Code 3.0. We completed the development of the entire system in Hack by the Beach, along with 2 other teammates. This project was accepted in the IEEE International Conference for Emerging Technology, June 2020. ",Technology:["python-plain-wordmark","javascript-plain colored"],projectDuration:"October 2019 - June 2020 "});S.push(L);var q=new D({name:"RHEA",githubLink:" https://github.com/pmj9911/RHEA",Technology:["python-plain-wordmark","typescript-plain colored"],description:"This project was aimed at improving the way in which people revised. It was based off a problem statement given to my team during the VIT Hackathon.",projectDuration:"September, 2019"});S.push(q);var M=new D({name:"Voting Application",githubLink:" https://github.com/pmj9911/Vote-Application",Technology:["javascript-plain colored","Solidity"],description:"This is a basic implementation of a voting system, using blockchain. It uses a local ethereum network, where accounts on the network are allowed to vote.",projectDuration:"June 2020 "});S.push(M);var O=new D({name:"Student depression and Suicide rate prediction",githubLink:"https://github.com/pmj9911/Student-Depression-And-Suicide-Rate-Prediction",projectDuration:"December 2019 ",Technology:["python-plain-wordmark"],description:"This problem statement was given to my team in Data-Quezt. We had to conduct EDA on the dataset and with appropriate ML techniques, reach a conclusion for the given data. Detailed analysis can be found on the github repo."});S.push(O);var H=new D({name:"DL-Projects",githubLink:" https://github.com/pmj9911/DL-Projects",Technology:["python-plain-wordmark"],description:"A few Deep Learning projects, which were done after completing the deep learning specialization offered on Coursera.",projectDuration:"May 2020 "});S.push(H);var A=new D({name:"flutter-all",githubLink:" https://github.com/pmj9911/flutter-all",Technology:["dart"],projectDuration:"9 June 2020 "});S.push(A);var I=new D({name:"healthApp",githubLink:"https://github.com/pmj9911/healthApp",Technology:["dart"],projectDuration:"22 December 2019 "});S.push(I);var C=new D({name:"Twitter-Sentiment-Analyser",githubLink:"https://github.com/pmj9911/Twitter-Sentiment-Analyser",Technology:["python-plain-wordmark","javascript-plain colored"],projectDuration:"13 December 2019 "});S.push(C);var B=new D({name:"PrimeVideo_Clone",githubLink:" https://github.com/pmj9911/PrimeVideo_Clone",Technology:["python-plain-wordmark","javascript-plain colored"],projectDuration:"8 September 2019 "});S.push(B);var _=new D({name:"Flask-Blog ",githubLink:"https://github.com/pmj9911/Flask-Blog",Technology:["python-plain-wordmark"],projectDuration:"2 November 2019 "});S.push(_);var J=new D({name:"Django-Blog ",githubLink:"https://github.com/pmj9911/Django-Blog",Technology:["python-plain-wordmark","javascript-plain colored"],projectDuration:"8 July 2019 "});S.push(J);var V=new D({name:"Cricbuzz  ",githubLink:"https://github.com/pmj9911/Cricbuzz",Technology:["javascript-plain colored"],projectDuration:"6 June 2020 "});S.push(V);var F=S,R=function(e){return r.a.createElement("div",{className:"container-lg mt-5 bg-blue"},r.a.createElement("h1",{className:"text-center"},"Projects"),F.map((function(e,a){return r.a.createElement(z,{key:a,name:e.name,projectDuration:e.projectDuration,description:e.description,index:a,Technology:e.Technology,githubLink:e.githubLink})})))},z=function(e){e.index;var a=e.name,t=e.projectDuration,n=e.description,i=e.Technology,c=e.githubLink;return r.a.createElement("div",{className:"m-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-9 col-lg-9"},r.a.createElement("h2",{className:""},a),r.a.createElement("p",null,"\u2192\xa0",n)),r.a.createElement("div",{className:"col-3 col-lg-3"},r.a.createElement("div",{className:"m-2"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8 col-lg-8"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"pb-3"},i.map((function(e){return r.a.createElement("p",{key:e,className:"badge badge-light card-link text-dark"},r.a.createElement("i",{className:"devicon-".concat(e),style:{fontSize:"40px"}}))}))))),r.a.createElement("div",{className:"col-4 col-lg-4"},r.a.createElement("a",{href:c,target:"_blank"},r.a.createElement("i",{className:"devicon-github-plain colored",style:{fontSize:"50px"}}))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"m-2"},r.a.createElement("div",{className:"row"},t))))),r.a.createElement("hr",null))},W=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],i=a[1],c=Object(n.useCallback)((function(e){b.a.get(s.f+s.h+s.g).then((function(e){return i(e.data.slice(0,s.n))})).catch((function(e){return console.error(e.message)})).finally((function(){}))}),[]);return Object(n.useEffect)((function(){c()}),[c]),r.a.createElement("div",{id:"projects",className:"jumbotron jumbotron-fluid bg-transparent m-0"},0!=t.length&&r.a.createElement("div",{className:"container container-fluid p-5"},r.a.createElement("h1",{className:"display-4 pb-5"},s.m),r.a.createElement("div",{className:"row"},t.map((function(e){return r.a.createElement(j,{key:e.id,id:e.id,value:e})})))),0==t.length&&r.a.createElement("div",{className:"container container-fluid p-5"},r.a.createElement(R,null)))},Q=function(){var e=Object(n.useState)({backgroundColor:"#f5f5f5"}),a=Object(u.a)(e,1)[0];return r.a.createElement("footer",{style:a,className:"mt-auto py-3 text-center"},r.a.createElement("i",{className:"fas fa-code"})," with ",r.a.createElement("i",{className:"fas fa-heart"})," by"," ",r.a.createElement("a",{className:"badge badge-dark",rel:"noopener",href:"https://github.com/pmj9911","aria-label":"My GitHub"},"Parth Jardosh")," ","using ",r.a.createElement("i",{className:"fab fa-react"}),r.a.createElement("p",null,r.a.createElement("small",{className:"text-muted"}," ")))},G=function(e){var a=Object(n.useState)(!0),t=Object(u.a)(a,2),i=t[0],c=t[1];return Object(n.useEffect)((function(){document.addEventListener("scroll",(function(){var e=window.scrollY<200;e!==i&&c(e)}))}),[i]),r.a.createElement("nav",{className:"navbar navbar-expand-lg fixed-top navbar-light ".concat(i?"bg-transparent":"bg-gradient"," ")},r.a.createElement("a",{className:"navbar-brand",href:"/#home"},"<".concat(s.a," />")),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo","aria-controls":"navbarTogglerDemo","aria-expanded":"true","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo"},r.a.createElement("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0"},s.o&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link lead",to:"/blog"},"Blog")),s.p&&r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link lead",to:"/Hackathon"},"Hackathon")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(l.b,{className:"nav-link lead",to:"/Project"},"Project")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link lead",href:f.a,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("b",null,"Resume"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link lead",href:"/#aboutme"},r.a.createElement("b",null,"About"))))))},U=function e(a){var t=this,i=a.title,c=a.image,l=a.description;Object(w.a)(this,e),this.list=[],this.addParagraph=function(e){return t.list.push(r.a.createElement("p",{key:t.list.length,className:"lead"},e)),t},this.addHeading=function(e){return t.list.push(r.a.createElement(n.Fragment,{key:t.list.length},r.a.createElement("h1",{className:""},e),r.a.createElement("hr",null))),t},this.getBlog=function(){return r.a.createElement("div",{className:"container-lg"},t.list)},this.title=i,this.image=c,this.description=l},Y=[],Z=new U({title:"My First Blog",image:"img",description:"Description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, dolores? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia provident similique corporis rem ullam odio excepturi voluptas harum, architecto sit!"}).addHeading("Heading").addParagraph("1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?"),K=new U({title:"My Second Blog",image:"img",description:"Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore aut neque consectetur voluptatem quam nihil, facere earum adipisci, animi beatae dicta maiores, ipsam delectus ab molestias dolorum aperiam? Sapiente?"}).addHeading("Heading").addParagraph("1st Paragraph Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?").addHeading("New Heading").addParagraph("1st Paragraph Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur vero reiciendis quas, autem sit culpa? Quibusdam, cupiditate voluptate a non nulla aliquid enim doloremque ullam, facilis quisquam similique hic omnis!").addParagraph("2nd Paragraph Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ad, temporibus quae obcaecati eum expedita pariatur aspernatur recusandae beatae iste soluta sunt blanditiis dolore ipsam quia laboriosam quas perspiciatis architecto?");Y.push(K),Y.push(Z);var $=Y,X=function(e){return r.a.createElement("div",{className:"container-lg mt-5 bg-blue"},r.a.createElement("h1",{className:"text-center"},"Blogs"),$.map((function(e,a){return r.a.createElement(ee,{key:a,title:e.title,description:e.description,index:a})})))},ee=function(e){var a=e.index,t=e.title,n=(e.image,e.description);return r.a.createElement("div",{className:"m-5"},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 col-lg-12"}),r.a.createElement("div",{className:"col-8 col-lg-12"},r.a.createElement("div",{className:""},r.a.createElement("h1",{className:""},t),r.a.createElement("p",{className:"lead"},n),r.a.createElement(l.b,{to:"".concat("","blog/").concat(a)},"Read more..."," ")))),r.a.createElement("hr",null)))},ae=function(e){var a=e.match.params.id,t=$[a];return r.a.createElement("div",{className:"container-lg mt-5"},t&&r.a.createElement("div",null,r.a.createElement("h1",{className:"display-2 text-center"},t.title),r.a.createElement("img",{className:"img-fluid mb-2",src:t.image,alt:t.title}),t.getBlog()),!t&&r.a.createElement("h1",{className:"display-1 text-center"},"404 - Page not found"))},te=function e(a){var t=this,i=a.title,c=a.image,l=a.location,o=a.description,s=a.languages,m=a.rank,u=a.superS;Object(w.a)(this,e),this.list=[],this.addParagraph=function(e){return t.list.push(r.a.createElement("p",{key:t.list.length,className:"lead"},e)),t},this.addHeading=function(e){return t.list.push(r.a.createElement(n.Fragment,{key:t.list.length},r.a.createElement("h1",{className:""},e),r.a.createElement("hr",null))),t},this.getHackathon=function(){return r.a.createElement("div",{className:"container-lg"},t.list)},this.title=i,this.image=c,this.location=l,this.description=o,this.languages=s,this.rank=m,this.superS=u},ne=t(37),re=t.n(ne),ie=t(38),ce=t.n(ie),le=t(39),oe=t.n(le),se=t(40),me=[],ue=new te({title:"VIT- Hackathon ",image:t.n(se).a,languages:["Python","Angular","Flask","Deep Learning"],location:"Vellore Institute of Technology, Vellore",description:"The track was Education. The problem statement was given by Inversion Consultancy.",rank:1,superS:"st"}).addHeading("VIT").addParagraph("Date: 21st- 22nd September, 2019").addParagraph("Location: Vellore, Tamil Nadu"),de=new te({title:"Hack-N-Code 3.0 ",image:ce.a,languages:["Python","Django","Deep Learning"],location:"Mukesh Patel School of Technology Management & Engineering, Mumbai",description:"The problem statement was provided by Capgemini. More than 100 teams were a part of this hackathon.",rank:1,superS:"st"}).addHeading("Hack-N-Code 3.0").addParagraph("Date: 13th October, 2019").addParagraph("Location: Mumbai,Maharahstra"),pe=new te({title:"DATA-QUEZT",image:re.a,languages:["Python","Deep Learning"],location:"Vivekanand Education Society's Institute of Management Studies and Research, Mumbai",description:"It was a Data Analytics contest , conducted over 3 days. The problem definition was based on suicide detection ",rank:2,superS:"nd"}).addHeading("DATA-QUEZT").addParagraph("Date: 4th-6th December, 2019").addParagraph("Location: Mumbai, Maharashtra"),he=new te({title:"Hack by the beach",image:oe.a,languages:["Python","Deep Learning"],location:"Birla Institute of Technology & Science, Sancoale, Goa ",description:"We developed an end to end waste management solution, SEGRO. It was a great experience being mentored by the founders of code asylums.",rank:5,superS:"th"}).addHeading("VIT").addParagraph("Date: 30st January- 1st February, 2019").addParagraph("Location: Sancoale, Goa");me.push(he),me.push(pe),me.push(de),me.push(ue);var ge=me,be={height:300,width:400,padding:10},Ee=function(e){return r.a.createElement("div",{className:"container-lg mt-5 bg-blue"},r.a.createElement("h1",{className:"text-center"},"Hackathons"),ge.map((function(e,a){return r.a.createElement(fe,{key:a,title:e.title,image:e.image,location:e.location,description:e.description,index:a,language_list:e.languages,rank:e.rank,superS:e.superS})})))},fe=function(e){e.index;var a=e.title,t=e.image,n=e.location,i=e.description,c=e.language_list,l=e.rank,o=e.superS;return r.a.createElement("div",{className:"m-5"},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-0 col-g-5"},r.a.createElement("img",{src:t,style:be,className:"card-img",alt:"..."})),r.a.createElement("div",{className:"col-6 col-lg-6"},r.a.createElement("div",{className:""},r.a.createElement("h1",{className:""},a),r.a.createElement("p",{className:"lead"},n),r.a.createElement("p",{className:"lead"},i),r.a.createElement("div",{className:"pb-3"},"Technology:"," ",c.map((function(e){return r.a.createElement("p",{key:e,className:"badge badge-light card-link text-dark"},e)}))),"")),r.a.createElement("div",{className:"col-1 col-lg-1"},r.a.createElement("span",{class:"fa-stack"},r.a.createElement("span",{class:"fa fa-circle-o fa-stack-2x"}),r.a.createElement("strong",{class:"fa-stack-3x"},r.a.createElement("h2",null,l,r.a.createElement("sup",null,o)))))),r.a.createElement("hr",null)))},ve=function(e){var a=e.match.params.id,t=ge[a];return r.a.createElement("div",{className:"container-lg mt-5"},t&&r.a.createElement("div",null,r.a.createElement("h1",{className:"display-2 text-center"},t.title),r.a.createElement("img",{className:"img-fluid mb-2",align:"left",src:t.image,alt:t.title,style:{height:300,width:400,padding:20}}),t.getHackathon()),!t&&r.a.createElement("h1",{className:"display-1 text-center"},"404 - Page not found"))},ye=function(e){var a=e.match.params.id,t=F[a];return r.a.createElement("div",{className:"container-lg mt-5"},t&&r.a.createElement("div",null,r.a.createElement("h1",{className:"display-2 text-center"},t.name),r.a.createElement("p",{style:{marginLeft:40}},t.getProject())),!t&&r.a.createElement("h1",{className:"display-1 text-center"},"404 - Page not found"))},Ne=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(h,null),r.a.createElement(N,null),r.a.createElement(W,null))},ke=function(){return r.a.createElement(l.a,{basename:"/"},s.r&&r.a.createElement(G,null),r.a.createElement(o.a,{path:"/",exact:!0,component:Ne}),s.o&&r.a.createElement(o.a,{path:"/blog",exact:!0,component:X}),s.o&&r.a.createElement(o.a,{path:"/blog/:id",component:ae}),s.p&&r.a.createElement(o.a,{path:"/Hackathon",exact:!0,component:Ee}),s.s&&r.a.createElement(o.a,{path:"/Project",exact:!0,component:R}),s.p&&r.a.createElement(o.a,{path:"/Hackathon/:id",component:ve}),s.s&&r.a.createElement(o.a,{path:"/Project/:id",component:ye}),r.a.createElement(Q,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ke,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[42,1,2]]]);
//# sourceMappingURL=main.a8bcca84.chunk.js.map