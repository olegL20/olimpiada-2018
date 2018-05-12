export default {
    data() {
        return {
            fields: [
                // {
                //     name: 'name',
                //     sortField: 'name',
                //     title: this.$t('translation.name'),
                //     titleClass: 'text-left',
                //     dataClass: 'text-left',
                // },
                {
                    name: 'email',
                    sortField: 'email',
                    title: this.$t('translation.email'),
                    titleClass: 'text-left',
                    dataClass: 'text-left',
                },
                // {
                //     name: 'address',
                //     sortField: 'address',
                //     title: this.$t('translation.address'),
                //     titleClass: 'text-left',
                //     dataClass: 'text-left',
                // },
                // {
                //     name: 'phone',
                //     sortField: 'phone',
                //     title: this.$t('translation.phone'),
                //     titleClass: 'text-left',
                //     dataClass: 'text-left',
                // },
                // {
                //     name: 'site',
                //     sortField: 'site',
                //     title: this.$t('translation.site'),
                //     titleClass: 'text-left',
                //     dataClass: 'text-left',
                // },
                // {
                //     name: 'zip_code',
                //     sortField: 'zip_code',
                //     title: this.$t('translation.zip_code'),
                //     titleClass: 'text-center',
                //     dataClass: 'text-center',
                // },
                // {
                //     name: '__slot:description',
                //     sortField: 'description',
                //     title: this.$t('translation.description'),
                //     titleClass: 'text-left',
                //     dataClass: 'text-left ellipsis',
                // },
                {
                    name: 'created_at',
                    sortField: 'created_at',
                    title: this.$t('translation.created_at'),
                    titleClass: 'text-center',
                    dataClass: 'text-center',
                },
                // {
                //     name: '__slot:actions',
                //     title: this.$t('translation.actions'),
                //     titleClass: 'text-center',
                //     dataClass: 'text-center',
                // },
            ],
            css: {
                table: {
                    tableClass: 'table',
                    loadingClass: 'loading',
                    ascendingIcon: 'fa fa-angle-up ',
                    descendingIcon: 'fa fa-angle-down ',
                    handleIcon: 'glyphicon glyphicon-menu-hamburger',
                },
                pagination: {
                    infoClass: 'pull-left',
                    wrapperClass: 'vuetable-pagination text-center',
                    activeClass: 'btn btn-primary text-white',
                    disabledClass: 'btn text-secondary',
                    pageClass: 'btn pgn-btn-border border',
                    linkClass: 'btn pgn-btn-border border',
                    icons: {
                        first: 'fa fa-angle-double-left',
                        prev: 'fa fa-angle-left',
                        next: 'fa fa-angle-right',
                        last: 'fa fa-angle-double-right',
                    },
                },
            },
        };
    },
};
