<template>
    <div v-html="htmlContent"></div>
</template>

<script>
    import * as quark from 'quark-gui';

    export default {
        name: 'ProjectCards',
        data () {
            return {
                htmlContent: "",
                projects: require('../data/projects.json')
            }
        },
        created: function () {
            this.htmlContent = this.getGridElement(this.projects);
        },
        methods: {
            getGridElement: function (projects) {
                let gridItems = [];
                projects.forEach(function (project) {
                    gridItems.push({
                        sizes: {
                            phone: 12,
                            tablet: 6,
                            tabletLandscape: 4,
                            screen: 4
                        },
                        content: this.getCardElement(project)
                    });
                }.bind(this));
                return quark.Molecules.Sections.Grid.getModule({
                    gridItems: gridItems
                });
            },
            getCardElement: function (project) {
                return quark.Organisms.Cards.Card.getModule({
                    title: project.title,
                    theme: 'primary',
                    content: quark.Organisms.Lists.List.getModule({
                        hover: true,
                        listItems: this.getListItems(project)
                    })
                });
            },
            getListItems: function (project) {
                let listItems = [];
                project.links.forEach(function(link){
                    let listItem = {};
                    if (link.title !== undefined){
                        listItem.title = link.title;
                    }
                    if (link.iconClass !== undefined){
                        listItem.iconClass = link.iconClass;
                    }
                    if (link.link !== undefined){
                        listItem.link = link.link;
                    }
                    listItems.push(listItem);
                })
                return listItems;
            }
        }
    }
</script>



