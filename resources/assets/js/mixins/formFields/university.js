export default {
    data() {
        return {
            fields: [
                {
                    name: 'name',
                    sortField: 'name',
                    title: this.$t('translation.name'),
                    titleClass: 'text-left',
                    dataClass: 'text-left',
                },
                {
                    name: 'email',
                    sortField: 'email',
                    title: this.$t('translation.email'),
                    titleClass: 'text-left',
                    dataClass: 'text-left',
                },
                {
                    name: '__slot:actions',
                    title: this.$t('translation.actions'),
                    titleClass: 'text-center',
                    dataClass: 'text-center',
                },
            ],
        };
    },
};
