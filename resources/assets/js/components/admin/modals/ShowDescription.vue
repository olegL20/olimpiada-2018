<template>
    <transition name="slide-fade" mode="out-in">
        <div v-if="modalsIsShowDescription" class="modal__wrap">
            <div v-click-outside="hide" class="modal__content modal__md">

                <h4 class="modal__head">
                    {{ $t("translation.universityDescription") }}
                </h4>

                <div class="modal__body">
                    <div class="p-3">
                        {{ universityDescription }}
                    </div>
                    <button type="button" class="btn btn-md btn-primary float-right mt-4"
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
                this.universityDescription = null;
            },
        },
    };
</script>
