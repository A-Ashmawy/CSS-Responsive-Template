# responsive-template
 ## toggle 
```html 
    <section class="faqs">
        <h2>Frequently Asked Questions</h2>
        <div class="container">

            <div class="faq-box">
                <div class="icon">
                    <i class="uil uil-plus"></i>
                </div>
                <div class="answer">
                    <h4>how do i know the right courses for me</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi doloribus, neque mollitia saepe velit, dolores maiores exercitationem asperiores quas molestias recusandae aperiam, facilis illo veniam! Laboriosam impedit magnam quis sapiente.</p>
                </div>
            </div>

            <div class="faq-box  ">
                <div class="icon">
                    <!-- <i class="uil uil-minus"></i> -->
                    <i class="uil uil-plus"></i>
                </div>
                <div class="answer ">
                    <h4>how do i know the right courses for me</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi doloribus, neque mollitia saepe velit, dolores maiores exercitationem asperiores quas molestias recusandae aperiam, facilis illo veniam! Laboriosam impedit magnam quis sapiente.</p>
                </div>
            </div>
```
```css 
/* ========end courses============= */
.faqs{
    background-color:var(--color-bg1) ;
    box-shadow: inset 0 0 3rem rgba(0,0,0,.3) ;
}
.faqs .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}
.faqs .container .faq-box{
    display: flex;
    align-items: center;
    gap:10px;
    background-color: var(--color-primary);
    padding:20px;
    /* لو مكتبتهاش الكونتنت اللي جمبه هيملا معاه  */
    height: fit-content;
    cursor: pointer;
}

.faqs .container .faq-box .icon{
    padding:5px 20px 0px 0px;
    /* escape from align center to be on the flex start */
    align-self: flex-start;
    font-size: 20px;
}
.faqs .container .faq-box .answer{
}
.faqs .container .faq-box .answer h3{
    /* font-size: 1rem; */
}
.faqs .container .faq-box .answer p{
    display: none;
}

/* 
.faqs .container .faq-box  .answer:hover p{
    display: block;
} */

.faqs .container .open .answer p{
    display: block;
}
/* ====================== */

```
```js
// show and hide faq answer

const faq=document.querySelectorAll('.faq-box ');
faq.forEach ( faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
        
        // change icon
        const icon =faq.querySelector('.icon i');
        if (icon.className === 'uil uil-plus'){
            icon.className = 'uil uil-minus';
        }else{
            icon.className = 'uil uil-plus';
        }

    })
})
```
## run 
