<template>
    <transition name="slide-fade" mode="out-in">
        <div v-if="modalsIsShowDescription" class="modal__wrap">
            <div v-click-outside="hide" class="modal__content modal__md">

                <h4 class="modal__head">
                    {{ $t("translation.moreInfo") }}
                </h4>

                <div class="modal__body">
                    <div class="form-group">
                        <label for="universityAddress">{{ $t("translation.universityAddress") }}</label>
                        <input class="form-control" id="universityAddress"
                               name="universityAddress"
                              v-model="universityAddress"
                              readonly
                        >
                    </div>
                    <div class="form-group">
                        <label for="universityZipCode">{{ $t("translation.universityZipCode") }}</label>
                        <input type="text" class="form-control" id="universityZipCode"
                               name="universityZipCode"
                               v-model="universityZipCode"
                               readonly
                        >
                    </div>
                    <div class="form-group">
                        <label for="universityDescription">{{ $t("translation.universityDescription") }}</label>
                        <textarea type="text" class="form-control resize-none h-10" id="universityDescription"
                                  name="universityDescription"
                                  v-model="universityDescription"
                                  readonly
                        >
                        </textarea>
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
                this.modalsIsShowDescription = false;

                this.universityAddress = null;
                this.universityZipCode = null;
                this.universityDescription = null;
            },
        },
    };
</script>
