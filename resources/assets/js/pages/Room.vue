<template>
    <div class="room">
        <div class="container">
            <div class="row">

                <div class="col-md-9 col-sm-8">
                    <div v-if="userFirstStage !== 4 && userFirstStage !== 5 && userFirstStage !== 6 && userFirstStage !== 7" class="things"></div>
                    <div v-if="userFirstStage === 4" class="room__content">
                        <div v-if="userSelectedUniversity" class="university__wrapper">
                            <div class="university__header"
                                 :style="{'background': userSelectedUniversity.image
                                                        ? `url(${userSelectedUniversity.image.source})`
                                                        : 'white'}">
                                <div class="university__short-info">
                                    <div class="media">
                                        <img v-if="userSelectedUniversity.image"
                                             :src="userSelectedUniversity.image.source"
                                             class="image-circle image-circle__60 mr-4">
                                        <div class="media-body dark-color mt-1">
                                            <strong>
                                                <h4 v-if="userSelectedUniversity">{{ userSelectedUniversity.name }}</h4>
                                            </strong>
                                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                                            <span v-if="userSelectedUniversity">{{ userSelectedUniversity.address }}</span>
                                            <!--<a href="#map" class="link link__accent-dark">-->
                                                <!--{{ $t("translation.watchMap") }}-->
                                            <!--</a>-->
                                            <a :href='userSelectedUniversity.site' class="d-inline-block btn button-md button-transparent mt-4">
                                                {{ $t("translation.goToSite") }}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="university__info">
                                <div class="col">
                                    <p v-if="userSelectedUniversity.description">{{ userSelectedUniversity.description }}</p>
                                    <p v-else>{{ $t("translation.emptyUniversityDescription") }}</p>
                                </div>
                            </div>
                            <div name="map" class="university__map">
                                <GmapMap
                                        :center="userSelectedUniversity.position"
                                        :zoom="17"
                                        style="width: 100%; height: 100%"
                                >
                                    <GmapMarker
                                            :position="userSelectedUniversity.position"
                                            :clickable="true"
                                            :draggable="true"
                                    />
                                </GmapMap>
                            </div>
                        </div>
                    </div>
                    <div v-if="userFirstStage === 5 || userFirstStage === 6" class="room__content">
                        <div class="puzzle__wrapper">
                            <puzzle></puzzle>
                        </div>
                    </div>
                    <div v-if="userFirstStage === 7" class="room__content">
                        <div v-if="!userTest" class="form-group">
                            <label for="test">{{ $t("translation.selectTest") }}</label>
                            <select id="test" name="university_id" @change="selectTest" class="select-style" v-if="userTests" v-model="userSelectedTest">
                                <option v-if="userTests && userTests.length > 0" value="0">{{ $t('translation.noData') }}</option>
                                <option v-for="item in userTests"
                                        :value="item"
                                >
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>

                        <template v-else>
                            <h3 class="test__name">{{ userTest.name }}</h3>

                            <div v-if="question.answer.right && question.answer.other"
                                 v-for="(question, indexQuestion) in userTest.questions"
                                 class="jumbotron">
                                <div class="container">
                                    <div class="lead">
                                        <h4>{{ question.name }}</h4>
                                        <!--<ul class="list-group">-->
                                            <!--<li v-for="(answer, indexAnswer) in question.answer.other"-->
                                                <!--@click="checkTest(indexQuestion, indexAnswer)"-->
                                                <!--class="pointer list-group-item"-->
                                                <!--:class="{ 'list-group-item-success': false}">-->
                                                 <!--{{ answer.name }}-->
                                            <!--</li>-->
                                        <!--</ul>-->
                                        <div v-for="(answer, indexAnswer) in question.answer.other" class="form-check">
                                            <input class="form-check-input" type="radio" name="exampleRadios" :id="indexAnswer" :value="answer.id">
                                            <label class="form-check-label" :for="indexAnswer">
                                                {{ answer.name }}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button @click="endTest" type="button" class="btn button-md button-accent">{{ $t("translation.setTest") }}</button>
                        </template>


                    </div>
                </div>

                <div class="col-md-3 col-sm-4">

                    <p class="pull-right">
                        {{ $t("translation.stage") }}:
                        <span class="accent-color">
                            <strong>{{ $t("translation.homeAdventures") }}</strong>
                        </span>
                    </p>

                    <img src="/images/calendar1.png" class="w-100 clearfix mb-3">

                    <!--<p class="pull-right mb-1">-->
                        <!--{{ $t("translation.scores") }}:-->
                        <!--<span class="accent-color">-->
                            <!--<strong>0 б</strong>-->
                        <!--</span>-->
                    <!--</p>-->

                    <!--<p class="pull-right">-->
                        <!--{{ $t("translation.passingTime") }}:-->
                        <!--<span class="accent-color">-->
                            <!--<strong>00:32</strong>-->
                        <!--</span>-->
                    <!--</p>-->

                    <div @click="isShowPhone = true"
                         class="phone clearfix"
                         :class="{ 'phone__show': isShowPhone }" v-if="userFirstStage < 9">

                        <div v-if="!isShowMessage && userFirstStage !== 5 && userFirstStage !== 7" @click="isShowMessage = true" :disabled="!isShowPhone" class="message__new-message"></div>

                        <template v-else-if="isShowMessage || userFirstStage === 5 || userFirstStage === 7">

                            <p class="message__name">{{ $t("translation.ann") }}</p>

                            <div class="message__ann">

                                <template v-if="userFirstStage === 1">
                                    <div class="message__angle"></div>
                                    <div class="message__quote">
                                        <p class="mb-0">{{ $t("translation.annHello") }}</p>

                                        <a href="javascript:" @click="modalsIsShowRegister = true" class="link link__white pull-right mr-4">
                                            {{ $t("translation.next") }}
                                        </a>
                                    </div>
                                </template>

                                <template v-if="userFirstStage === 2">
                                    <div class="message__angle"></div>
                                    <div class="message__quote">
                                        <p class="mb-0">{{ $t("translation.annRegister") }}</p>

                                        <a href="javascript:" @click="modalsIsShowLogin = true" class="link link__white pull-right mr-4">
                                            {{ $t("translation.login") }}
                                        </a>
                                        <a href="javascript:" @click="modalsIsShowRegister = true" class="link link__white pull-right mr-4">
                                            {{ $t("translation.register") }}
                                        </a>
                                    </div>
                                </template>

                                <template v-if="userFirstStage === 3">
                                    <div class="message__angle"></div>
                                    <div class="message__quote">
                                        <p class="mb-0">{{ $t("translation.annAdvice") }}</p>

                                        <a href="javascript:" @click="showAdvice" class="link link__white pull-right mr-4">
                                            {{ $t("translation.next") }}
                                        </a>
                                    </div>
                                </template>

                                <template v-if="userFirstStage === 4">
                                    <div class="message__angle"></div>
                                    <div class="message__quote">
                                        <p class="mb-0">{{ $t("translation.annPuzzle") }}</p>

                                        <a href="javascript:" @click="showPuzzle" class="link link__white pull-right mr-4">
                                            {{ $t("translation.next") }}
                                        </a>
                                    </div>
                                </template>

                                <template v-if="userFirstStage === 6">
                                    <div class="message__angle"></div>
                                    <div class="message__quote">
                                        <p class="mb-0">{{ $t("translation.annTest") }}</p>

                                        <a href="javascript:" @click="showTest" class="link link__white pull-right mr-4">
                                            {{ $t("translation.next") }}
                                        </a>
                                    </div>
                                </template>

                                <template v-if="userFirstStage === 8">
                                    <div class="message__angle"></div>
                                    <div class="message__quote">
                                        <p class="mb-0">{{ $t("translation.annTestResult") }}</p>

                                        <a href="javascript:" @click="showVideo" class="link link__white pull-right mr-4">
                                            {{ $t("translation.showVideo") }}
                                        </a>
                                    </div>
                                </template>

                            </div>

                        </template>

                    </div>

                </div>

            </div>
        </div>

        <login-modal></login-modal>
        <register-modal></register-modal>
        <advice-modal v-if="userLogged"></advice-modal>
        <select-vuz-modal v-if="userLogged"></select-vuz-modal>
    </div>
</template>

<script>
    import userMixin from '../mixins/user';
    import modalsMixin from '../mixins/modals';
    import * as loginModal from '../components/modals/Login.vue';
    import * as registerModal from '../components/modals/Register.vue';
    import * as adviceModal from '../components/modals/Advice.vue';
    import * as SelectVuzModal from '../components/modals/SelectVuz.vue';
    import * as puzzle from '../plugins/puzzle/Puzzle.vue';

    export default {
        components: {
            SelectVuzModal,
            loginModal,
            registerModal,
            adviceModal,
            puzzle,
        },
        mixins: [
            modalsMixin,
            userMixin,
        ],
        data() {
            return {
                isShowMessage: false,
                isShowPhone: false,
            };
        },
        methods: {
            async checkTest(question, answer) {
                console.log(question, answer);
                // this.userQuestions[question].answer.other[answer].status = 'true';
                // try {
                //     const response = await this.$store.dispatch('user/testAnswer', {
                //         question_id: questionId,
                //         answer: answerId,
                //     });
                //     console.log(response.result);
                // } catch (e) {
                //     if (e.status === 404) {
                //         this.$toast.error({
                //             title: this.$t('translation.error'),
                //             message: this.$t('translation.error'),
                //         });
                //     } else {
                //         this.$toast.error({
                //             title: this.$t('translation.error'),
                //             message: this.$t(e.message),
                //         });
                //     }
                // }
            },
            endTest() {
                window.Cookies.set('first_stage', 8);
                this.userFirstStage = 8;
            },
            showVideo() {
                window.Cookies.set('first_stage', 9);
                this.userFirstStage = 9;
            },
            selectTest() {
                if (this.userSelectedTest) {
                    this.$store.dispatch('user/getTest', {
                        id: this.userSelectedTest.id,
                    });
                }
            },
            showAdvice() {
                this.isShowMessage = false;
                this.modalsIsShowAdvice = true;
            },
            showPuzzle() {
                window.Cookies.set('first_stage', 5);
                this.userFirstStage = 5;
            },
            showTest() {
                this.$store.dispatch('user/getTests');
                window.Cookies.set('first_stage', 7);
                this.userFirstStage = 7;
            },
        },
        metaInfo() {
            return {
                title: this.$t('translation.room'),
            };
        },
        beforeDestroy() {
            this.userBackground = 'background-white';
        },
        mounted() {
            this.userFirstStage = Number(window.Cookies.get('first_stage'))
                ? Number(window.Cookies.get('first_stage')) : 1;
            if (this.userFirstStage === 4) {
                this.userBackground = 'background-green';
                this.userSelectedUniversity = JSON.parse(window.Cookies.get('university'));
                this.userSelectedFaculty = JSON.parse(window.Cookies.get('faculty'));
                this.userSelectedMajor = JSON.parse(window.Cookies.get('major'));
            } else {
                this.userBackground = 'background-blue';
            }

            if (this.userFirstStage === 7) {
                this.$store.dispatch('user/getTests');
            }
        },
    };
</script>
