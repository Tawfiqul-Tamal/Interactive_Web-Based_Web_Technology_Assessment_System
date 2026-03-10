const questions = [
{q:"1. What does HTML stand for?",opts:["Hyper Tool Markup Language","Hyper Text Markup Language","Home Text Machine Language","Hyperlinks and Text Markup Language"],ans:"Hyper Text Markup Language"},
{q:"2. Which tag is used to create a hyperlink?",opts:["<link>","<a>","<href>","<hyper>"],ans:"<a>"},
{q:"3. Which tag is used to insert an image?",opts:["<image>","<img>","<src>","<picture>"],ans:"<img>"},
{q:"4. Which attribute specifies the destination of a link?",opts:["src","link","href","action"],ans:"href"},
{q:"5. Which tag creates a line break?",opts:["<lb>","<break>","<br>","<hr>"],ans:"<br>"},
{q:"6. Which tag is used to create a form?",opts:["<input>","<form>","<submit>","<data>"],ans:"<form>"},
{q:"7. Which attribute specifies where form data is sent?",opts:["method","action","type","target"],ans:"action"},
{q:"8. Which input type hides user input?",opts:["text","hidden","password","secure"],ans:"password"},
{q:"9. Which tag defines a table row?",opts:["<td>","<tr>","<th>","<row>"],ans:"<tr>"},
{q:"10. Which tag defines a table header cell?",opts:["<td>","<tr>","<th>","<thead>"],ans:"<th>"},
{q:"11. Metadata is placed inside which tag?",opts:["<body>","<meta>","<head>","<title>"],ans:"<head>"},
{q:"12. Which meta tag defines character encoding?",opts:["<meta charset='UTF-8'>","<meta type='UTF-8'>","<meta encode='UTF-8'>","<meta char='UTF-8'>"],ans:"<meta charset='UTF-8'>"},
{q:"13. Which server hosts websites?",opts:["FTP Server","SMTP Server","Web Server","Game Server"],ans:"Web Server"},
{q:"14. Which server sends emails?",opts:["FTP","SMTP","DNS","Proxy"],ans:"SMTP"},
{q:"15. Which server translates domain name to IP address?",opts:["Web Server","FTP Server","DNS Server","Application Server"],ans:"DNS Server"},
{q:"16. Which server stores and transfers files?",opts:["FTP Server","DNS Server","SMTP","Proxy"],ans:"FTP Server"},
{q:"17. Which server verifies user login?",opts:["Game Server","Auth Server","FTP Server","DNS Server"],ans:"Auth Server"},
{q:"18. HTTP stands for?",opts:["Hyper Text Transfer Protocol","High Transfer Text Protocol","Hyper Transfer Text Program","Home Tool Transfer Protocol"],ans:"Hyper Text Transfer Protocol"},
{q:"19. HTTPS is more secure because it uses?",opts:["FTP","Encryption (SSL/TLS)","DNS","HTML"],ans:"Encryption (SSL/TLS)"},
{q:"20. Which HTTP method is used to retrieve data?",opts:["POST","GET","PUT","DELETE"],ans:"GET"},
{q:"21. A typical HTTP response contains?",opts:["Status Code","Headers","Body","All of the above"],ans:"All of the above"},
{q:"22. In Client-Server model, who requests data?",opts:["Server","Client","DNS","Router"],ans:"Client"},
{q:"23. Three-tier architecture includes?",opts:["Client, Server","Presentation, Logic, Database","Browser, DNS, FTP","HTML, CSS, JS"],ans:"Presentation, Logic, Database"},
{q:"24. In Peer-to-Peer model, devices act as?",opts:["Only client","Only server","Both client and server","None"],ans:"Both client and server"},
{q:"25. URL stands for?",opts:["Uniform Resource Locator","Universal Resource Link","Uniform Reference Link","Unique Resource Locator"],ans:"Uniform Resource Locator"},
{q:"26. URN is used to?",opts:["Locate resource","Name resource uniquely","Host website","Encrypt data"],ans:"Name resource uniquely"},
{q:"27. CSS stands for?",opts:["Computer Style Sheets","Creative Style Sheets","Cascading Style Sheets","Colorful Style Sheets"],ans:"Cascading Style Sheets"},
{q:"28. Which is an inline CSS example?",opts:["<style>","style=''","External file","<css>"],ans:"style=''"},
{q:"29. Which tag is used for internal CSS?",opts:["<css>","<link>","<style>","<script>"],ans:"<style>"},
{q:"30. Which is used for external CSS?",opts:["<style>","<link>","<meta>","<css>"],ans:"<link>"},
{q:"31. Which is a relative unit?",opts:["px","cm","em","mm"],ans:"em"},
{q:"32. 1rem is relative to?",opts:["Parent element","Root element","Screen size","Browser"],ans:"Root element"},
{q:"33. Which selector selects an element by ID?",opts:[".id","#id","*id","@id"],ans:"#id"},
{q:"34. Which selector selects all elements?",opts:["*","#",".","&"],ans:"*"},
{q:"35. Box model includes?",opts:["margin","border","padding","All of the above"],ans:"All of the above"},
{q:"36. Which property controls stacking order?",opts:["display","overflow","z-index","outline"],ans:"z-index"},
{q:"37. Which display makes element inline but allows width & height?",opts:["inline","block","inline-block","flex"],ans:"inline-block"},
{q:"38. Which property hides overflow content?",opts:["display: none","overflow: hidden","position: absolute","z-index"],ans:"overflow: hidden"},
{q:"39. Which position removes element from normal flow?",opts:["static","relative","absolute","inline"],ans:"absolute"},
{q:"40. Which property draws border outside element without affecting layout?",opts:["border","outline","margin","padding"],ans:"outline"},
{q:"41. Which attribute specifies encoding type?",opts:["type","enctype","method","action"],ans:"enctype"},
{q:"42. Which tag groups table rows?",opts:["<thead>","<tbody>","<tfoot>","All of the above"],ans:"All of the above"},
{q:"43. Which input type selects file?",opts:["text","file","password","submit"],ans:"file"},
{q:"44. Purpose of viewport meta?",opts:["Define title","SEO","Responsive layout","Encoding"],ans:"Responsive layout"},
{q:"45. Middleman server?",opts:["Proxy Server","Auth Server","DNS Server","FTP Server"],ans:"Proxy Server"},
{q:"46. Application server handles?",opts:["Hosting","Business logic","DNS","FTP"],ans:"Business logic"},
{q:"47. Success HTTP status code?",opts:["200","404","500","301"],ans:"200"},
{q:"48. HTTPS uses?",opts:["SSL/TLS encryption","Different ports","GET only","Faster"],ans:"SSL/TLS encryption"},
{q:"49. Idempotent method?",opts:["GET","POST","PATCH","DELETE"],ans:"GET"},
{q:"50. Database layer?",opts:["Presentation","Logic","Data Layer","Client"],ans:"Data Layer"},
{q:"51. P2P transfer?",opts:["Client→Server","Server→Client","Client↔Client","Proxy only"],ans:"Client↔Client"},
{q:"52. URL part for page?",opts:["Domain","Protocol","Path","Port"],ans:"Path"},
{q:"53. URN?",opts:["Locates","Names uniquely","HTTP only","IP address"],ans:"Names uniquely"},
{q:"54. Not box model?",opts:["margin","padding","border","font-size"],ans:"font-size"},
{q:"55. Select p inside div?",opts:["div p","div > p",".div p","#div p"],ans:"div p"}
];

// ==== RENDER, BUTTONS, CHECK ANSWERS (same as previous JS) ====
const form = document.getElementById("quizForm");

questions.forEach((q,i)=>{
  const qDiv=document.createElement("div");
  qDiv.className="question";

  const p=document.createElement("p");
  p.textContent=q.q;
  qDiv.appendChild(p);

  q.opts.sort(()=>Math.random()-0.5).forEach(opt=>{
    const label=document.createElement("label");
    const input=document.createElement("input");

    input.type="radio";
    input.name="q"+(i+1);
    input.value=opt;

    label.appendChild(input);
    label.appendChild(document.createTextNode(" "+opt));

    qDiv.appendChild(label);
  });

  form.appendChild(qDiv);
});

const container=document.createElement("div");
container.className="button-container";

const submit=document.createElement("button");
submit.type="button";
submit.className="submit-btn";
submit.textContent="Submit";
submit.onclick=checkAnswers;

const topBtn=document.createElement("button");
topBtn.type="button";
topBtn.className="bottom-btn";
topBtn.textContent="⬆ Go to Top";
topBtn.onclick=()=>window.scrollTo({top:0,behavior:"smooth"});

container.appendChild(submit);
container.appendChild(topBtn);
form.appendChild(container);

function checkAnswers(){
  const qDivs=document.querySelectorAll(".question");
  let correct=0;

  qDivs.forEach((div,i)=>{
    const selected=document.querySelector("input[name='q"+(i+1)+"']:checked");

    const old=div.querySelector(".result");
    if(old) old.remove();

    div.classList.remove("missing");

    const result=document.createElement("p");
    result.className="result";

    if(!selected){
      div.classList.add("missing");
      result.style.color="red";
      result.textContent="⚠ You did not answer this question.";
    }
    else if(selected.value===questions[i].ans){
      correct++;
      result.style.color="green";
      result.textContent="✔ Correct!";
    }
    else{
      result.style.color="red";
      result.innerHTML="✖ Wrong! <br> Your Answer: <b>"+escapeHTML(selected.value)+"</b><br> Correct Answer: <b>"+escapeHTML(questions[i].ans)+"</b>";
    }

    div.appendChild(result);
  });

  const oldScore=document.querySelector(".score-box");
  if(oldScore) oldScore.remove();

  const percentage=((correct/questions.length)*100).toFixed(2);

  const scoreBox=document.createElement("div");
  scoreBox.className="score-box";
  scoreBox.innerHTML="Final Score: "+correct+" / "+questions.length+"<br>Percentage: "+percentage+"%";

  form.appendChild(scoreBox);
}

function escapeHTML(str){
  return str.replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

function scrollToBottom(){
  window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"});
}

function refreshPage(){
  location.reload();
}