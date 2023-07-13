document.addEventListener("DOMContentLoaded", (evento)=>{
    setTimeout(()=>{
        document.querySelector("#load-iframe-map").innerHTML = `
    <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.6254968612316!2d-99.16613592412543!3d19.42858064080794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff345feab4ed%3A0xeeead2fc381b2dd6!2sGta.%20del%20Ahuehuete%2C%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1689184273618!5m2!1ses!2smx" ></iframe>`;
    },500)
});