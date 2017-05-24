<template>
    <div v-html="htmlContent"></div>
</template>

<script>
    import * as quark from 'quark-gui';

    export default {
        name: 'MainNavigation',
        data () {
            return {
                htmlContent: "",
                header: {
                    id: 'main-header',
                    theme: 'primary',
                    logo: {
                        image: {
                            src: '', //TODO add logo require(''),
                            alt: 'Benjamin Dehli logo'
                        },
                        url: "/"
                    },
                    primaryNavigation: {
                        id: "primary-navigation",
                        listItems: [
                            {
                                name: "Link",
                                link: "#"
                            },
                            {
                                name: "Dropdown",
                                link: "#",
                                dropdownContent: {
                                    listItems: [
                                        {
                                            name: "list item 1",
                                            link: "#",
                                            iconClass: "fa fa-music"
                                        },
                                        {
                                            name: "list item 2",
                                            link: "#",
                                            iconClass: "fa fa-calendar"
                                        },
                                        {
                                            name: "list item 3",
                                            link: "#",
                                            iconClass: "fa fa-group"
                                        }
                                    ]
                                }

                            }
                        ]
                    }
                }
            }
        },
        created: function () {
            this.htmlContent = quark.Organisms.Global.Header.getModule(this.header);
        }
    }
</script>



