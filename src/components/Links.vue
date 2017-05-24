<template>
    <div v-html="htmlContent" class="link-buttons"></div>
</template>

<script>
    import * as quark from 'quark-gui';

    export default {
        name: 'Links',
        data () {
            return {
                htmlContent: "",
                links: require('../data/links.json')
            }
        },
        created: function () {
            this.htmlContent = this.getButtonRowElement();
        },
        methods: {
            getButtonRowElement: function (links) {
                let buttonsElement = '';
                this.links.forEach(function (link) {
                    let button = {
                        type: 'minimal'
                    };
                    if (link.content !== undefined){
                        button.content = link.content;
                    }
                    if (link.iconClass !== undefined){
                        button.iconClass = link.iconClass;
                    }
                    if (link.link !== undefined){
                        button.link = link.link;
                    }
                    if (link.title !== undefined){
                        button.title = link.title;
                    }
                    buttonsElement += quark.Atoms.Buttons.Button.getModule(button);
                });
                return buttonsElement;
            }
        }
    }
</script>

<style lang="css">
    .link-buttons{
        text-align: center;
        padding: 32px 0;
    }
</style>



