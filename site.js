window.dataLayer=window.dataLayer||[];
function gtag(){window.dataLayer.push(arguments);}
gtag('js',new Date());
gtag('config','G-NRY1WVZK21',{allow_google_signals:false,allow_ad_personalization_signals:false});
const tag=document.createElement('script');tag.async=true;tag.src='https://www.googletagmanager.com/gtag/js?id=G-NRY1WVZK21';document.head.appendChild(tag);
document.querySelectorAll('[data-referral]').forEach(link=>link.addEventListener('click',()=>gtag('event','click_signup_link',{platform:link.dataset.platform,program:link.dataset.program||link.dataset.platform,link_url:link.href,link_location:link.dataset.location})));
document.querySelectorAll('[data-copy-link]').forEach(button=>button.addEventListener('click',async()=>{
 const status=document.getElementById('status');
 try{await navigator.clipboard.writeText(button.dataset.copyLink);status.textContent='Referral link copied.';gtag('event','copy_referral_link',{platform:button.dataset.platform,program:button.dataset.program||button.dataset.platform});}
 catch{status.textContent='Copy was unavailable. Select the referral link below to copy it manually.';}
}));
const search=document.getElementById('search'),category=document.getElementById('category');
function filter(){let count=0;document.querySelectorAll('[data-card]').forEach(card=>{const show=card.textContent.toLowerCase().includes(search.value.trim().toLowerCase())&&(category.value==='all'||card.dataset.category===category.value);card.hidden=!show;if(show)count++;});document.getElementById('count').textContent=count+' programs';document.getElementById('empty').hidden=count!==0;}
if(search&&category){search.addEventListener('input',filter);category.addEventListener('change',filter);}
