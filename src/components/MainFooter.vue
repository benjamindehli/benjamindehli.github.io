<template>
    <div v-html="htmlContent"></div>
</template>

<script>
    import * as quark from 'quark-gui';

    export default {
        name: 'MainFooter',
        data () {
            return {
                htmlContent: this.createFooterElement()
            }
        },
        methods: {
            createFooterElement: function () {
                var footerElement = quark.Organisms.Global.Footer.getModule({
                   /* logo: {
                        image: {
                            src: '',//TODO add logo require(''),
                            alt: 'Benjamin Dehli logo'
                        },
                        url: '/'
                    },*/
                    content: `
                    <div itemscope='' itemtype='http://data-vocabulary.org/Person' class='contact-info'>
                      <h3>Contact:</h3>
                      <p><span itemprop='name'>Benjamin Dehli</span></p>
                      <div itemprop='address' itemscope='' itemtype='http://data-vocabulary.org/Address'>
                        <p><span itemprop='street-address'>Margretes veg 15</span></p>
                        <p><span itemprop='postal-code'>3804</span> <span itemprop='locality'>Bø i Telemark</span>
                        </p>
                        <p><span itemprop='country-name'>Norway</span></p>
                    </div>
                    <p>Phone: +47 92 29 27 19</p>
                    <p>E-mail: superelg@gmail.com</p>
                </div>
                `
            });
                return footerElement;
            }
        }
    }
</script>

<style lang="css">
    .contact-info{
        text-align: center;
    }
    .contact-info h3{
        margin: 2px 0;
    }
    .contact-info p{
        margin: 2px 0;
    }
</style>
