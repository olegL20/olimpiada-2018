export default {
    data() {
        return {
            fields: [
                {
                    name: 'test_id',
                    sortField: 'test_id',
                    title: this.$t('translation.testId'),
                    titleClass: 'text-left',
                    dataClass: 'text-left',
                },
                {
                    name: 'name',
                    sortField: 'name',
                    title: this.$t('translation.name'),
                    titleClass: 'text-left',
                    dataClass: 'text-left',
                },
                {
                    name: 'type',
                    sortField: 'type',
                    title: this.$t('translation.typeTest'),
                    titleClass: 'text-left',
                    dataClass: 'text-left',
                },
                {
                    name: 'type_fill',
                    sortField: 'type_fill',
                    title: this.$t('translation.typeFillTest'),
                    titleClass: 'text-left',
                    dataClass: 'text-left',
                },
                {
                    name: '__slot:questions',
                    title: this.$t('translation.questions'),
                    titleClass: 'text-center',
                    dataClass: 'text-center',
                },
                {
                    name: '__slot:actions',
                    title: this.$t('translation.actions'),
                    titleClass: 'text-center',
                    dataClass: 'text-center',
                },
            ],
            css: {
                table: {
                    tableClass: 'table table-hover cursor-pointer',
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
