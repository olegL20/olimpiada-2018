<template>
    <transition name="slide-fade" mode="out-in">
        <div v-if="modalsIsShowInviteUniversityAdmin" class="modal__wrap">
            <div v-click-outside="hide" class="modal__content modal__md">

                <h4 class="modal__head">
                    {{ $t("translation.inviteUniversityAdmin") }}
                </h4>

                <div class="modal__body">
                    <div class="form-group">
                        <label for="universityEmail">{{ $t("translation.universityEmail") }}</label>
                        <input type="email" class="form-control" id="universityEmail" aria-describedby="universityEmailHelp"
                               :placeholder="$t('translation.universityEmailPlaceholder')"
                               name="universityEmail"
                               v-validate="'required|email|max:255'"
                               :data-vv-as="$t('translation.universityEmail')"
                               v-model="universityEmail">
                        <small id="universityEmailHelp" class="form-text text-danger" v-show="errors.has('universityEmail')">
                            {{ errors.first('universityEmail') }}
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="universities">{{ $t("translation.university") }}</label>
                        <select name="type_field" class="select-style" id="universities" v-if="this.universities" v-model="universityId">
                            <option :value="university.id" v-for="university in this.universities">
                                {{ university.name }}
                            </option>
                        </select>
                    </div>

                    <button type="button" class="btn btn-md btn-success float-right mt-4"
                        @click="inviteUniversityAdmin">
                        {{ $t("translation.send") }}
                    </button>

                </div>

            </div>
        </div>
    </transition>
</template>

<script>
    import MixinModals from '../../../mixins/modals';
    import MixinAdmin from '../../../mixins/admin';
    import MixinPreload from '../../../mixins/preload';

    export default {
        mixins: [
            MixinModals,
            MixinAdmin,
            MixinPreload,
        ],
        async mounted() {
            await this.$store.dispatch('admin/getAllUniversities');
            this.universityId = this.universities[0].id;
        },
        methods: {
            hide() {
                this.modalsIsShowInviteUniversityAdmin = false;

                this.universityEmail = null;
                this.universityId = null;
            },

            async inviteUniversityAdmin() {
                const valid = await this.$validator.validateAll();

                if (valid) {
                    try {
                        this.showPreloader();
                        await this.$store.dispatch('admin/sendInviteUniversityAdmin', {
                            email: this.universityEmail,
                            university_id: this.universityId,
                        });
                        this.hide();
                        this.switchRefreshTable(true);
                        this.$toast.success({
                            title: this.$t('translation.success'),
                            message: this.$t('translation.inviteUniversityAdminSent'),
                        });
                    } catch (e) {
                        if (e.status === 404) {
                            this.$toast.error({
                                title: this.$t('translation.error'),
                                message: this.$t('translation.inviteNotFound'),
                            });
                        } else {
                            this.$toast.error({
                                title: this.$t('translation.error'),
                                message: this.$t(e.data.message),
                            });
                        }
                    }
                    this.hidePreloader();
                }
            },
        },
    };
</script>
