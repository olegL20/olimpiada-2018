<template>
    <transition name="slide-fade" mode="out-in">
        <div v-if="modalsIsShowAssociateUniversityAdmin" class="modal__wrap">
            <div v-click-outside="hide" class="modal__content modal__md">

                <h4 class="modal__head">
                    {{ $t("translation.moreInfo") }}
                </h4>

                <div class="modal__body">
                    <div class="form-group">
                        <label for="universityAddress">{{ $t("translation.universityAddress") }}</label>
                        <select :value="props.rowData.university_id" :data-id="props.rowData.university_id" name="university_id" class="select-style" v-if="universities">-->
                            <option :value="null">{{ $t('translation.noData') }}</option>
                            <option v-for="item in universities"
                                :value="item.id"
                            >
                                {{ item.name }}
                            </option>
                        </select>
                    </div>
                    <button type="button" class="btn btn-md btn-secondary float-right mt-4"
                        @click="hide">
                        {{ $t("translation.close") }}
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
        methods: {
            hide() {
                this.modalsIsShowAssociateUniversityAdmin = false;

                this.universityAddress = null;
                this.universityZipCode = null;
                this.universityDescription = null;
            },
        },
    };
</script>
