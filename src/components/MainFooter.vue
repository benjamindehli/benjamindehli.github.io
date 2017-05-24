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
                    logo: {
                        image: {
                            src: '',//TODO add logo require(''),
                            alt: 'Benjamin Dehli logo'
                        },
                        url: '/'
                    },
                    content: `
                        
			        `
                });
                return footerElement;
            }
        }
    }
</script>
