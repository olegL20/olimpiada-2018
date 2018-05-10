<template>
    <transition name="slide-fade" mode="out-in">
        <div v-if="modalsIsShowAdvice" class="modal__wrap modal__white">
            <div v-click-outside="hide" class="modal__content modal__full-width">

                <div class="modal__body">

                    <div class="advice">

                        <div class="row">
                            <div class="col-md-4">
                                <div class="d-table">
                                    <div class="media mx-auto">
                                        <img src="/images/advice1.png">
                                        <div class="media-body ml-3">
                                            <p class="accent-color mb-0">
                                                <strong>{{ $t("translation.galinaIvanovna") }}</strong>
                                            </p>
                                            <p class="mb-0">{{ $t("translation.homeAdventures") }}</p>
                                        </div>
                                    </div>

                                    <div class="advice__angle mt-3"></div>
                                    <div class="advice__info">
                                        <p class="advice__text">{{ $t("translation.galinaText") }}</p>
                                        <div class="advice__links">
                                            <a class="link link__white advice__link" href="javascript:">
                                                {{ $t("translation.agree") }} 10б
                                            </a>
                                            <a class="link link__white advice__link" href="javascript:">
                                                {{ $t("translation.no") }} 10б
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="d-table mx-auto">
                                    <div class="media">
                                        <img src="/images/advice2.png">
                                        <div class="media-body ml-3">
                                            <p class="accent-color mb-0">
                                                <strong>{{ $t("translation.auntValya") }}</strong>
                                            </p>
                                            <p class="mb-0">{{ $t("translation.relatives") }}</p>
                                        </div>
                                    </div>

                                    <div class="advice__angle mt-3"></div>
                                    <div class="advice__info">
                                        <p class="advice__text">{{ $t("translation.valyaText") }}</p>
                                        <div class="advice__links">
                                            <a class="link link__white advice__link" href="javascript:">
                                                {{ $t("translation.agree") }} 10б
                                            </a>
                                            <a class="link link__white advice__link" href="javascript:">
                                                {{ $t("translation.no") }} 10б
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="d-table mx-auto">
                                    <div class="media">
                                        <img src="/images/advice3.png">
                                        <div class="media-body ml-3">
                                            <p class="accent-color mb-0">
                                                <strong>{{ $t("translation.oleg") }}</strong>
                                            </p>
                                            <p class="mb-0">{{ $t("translation.classmate") }}</p>
                                        </div>
                                    </div>

                                    <div class="advice__angle mt-3"></div>
                                    <div class="advice__info">
                                        <p class="advice__text">{{ $t("translation.olegText") }}</p>
                                        <div class="advice__links">
                                            <a class="link link__white advice__link" href="javascript:">
                                                {{ $t("translation.agree") }} 10б
                                            </a>
                                            <a class="link link__white advice__link" href="javascript:">
                                                {{ $t("translation.no") }} 10б
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <button type="button" @click="myChoice" class="btn btn-md btn-error mt-5 mx-auto">
                                {{ $t("translation.myLifeMyRules") }} (0б)
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </transition>
</template>

<script>
    import modalsMixin from '../../mixins/modals';
    import userMixin from '../../mixins/user';

    export default {
        mixins: [
            modalsMixin,
            userMixin,
        ],
        methods: {
            hide() {
                this.modalsIsShowAdvice = false;
            },
            myChoice() {
                this.hide();
                this.modalsIsShowSelectVuz = true;
            },
        },
        async mounted() {
            try {
                await this.$store.dispatch('user/getUniversities');
                // window.Cookies.set('first_stage', 2);
                // this.userFirstStage = 2;
            } catch (e) {
                this.$toast.error({
                    title: this.$t('translation.error'),
                    message: this.$t(e.message),
                });
            }
        },
    };
</script>
