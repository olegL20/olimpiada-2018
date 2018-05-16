<template>
    <div class="room">
        <div class="container">
            <div class="row">

                <div class="col-md-9 col-sm-8">
                    <div v-if="userFirstStage !== 4
                            && userFirstStage !== 5
                            && userFirstStage !== 6
                            && userFirstStage !== 7
                            && userFirstStage !== 9"
                         class="things"></div>
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
                    <div v-if="userFirstStage === 7" class="room__content room__tests">
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

                            <button @click="endTest" type="button" class="btn button-md button-accent mb-3">{{ $t("translation.setTest") }}</button>
                        </template>


                    </div>
                    <div v-if="userFirstStage === 9" class="room__content room__score">
                        <div class="card">
                            <div class="card-header">
                                <h2>{{ $t("translation.score") }}</h2>
                            </div>
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="averageScoreSchool">{{ $t("translation.averageScoreSchool") }}</label>
                                    <input type="text"
                                           class="form-control"
                                           id="averageScoreSchool"
                                           aria-describedby="averageScoreSchoolHelp"
                                           :placeholder="$t('translation.averageScoreSchool')"
                                           name="averageScoreSchool"
                                           v-validate="'required|numeric'"
                                           :data-vv-as="$t('translation.averageScoreSchool')"
                                           v-model="userAverageScoreSchool">
                                    <small id="averageScoreSchoolHelp" class="form-text text-danger" v-show="errors.has('averageScoreSchool')">
                                        {{ errors.first('averageScoreSchool') }}
                                    </small>
                                </div>
                                <div class="form-group">
                                    <label for="additionalCourses">{{ $t("translation.additionalCourses") }}</label>
                                    <input type="text"
                                           class="form-control"
                                           id="additionalCourses"
                                           aria-describedby="additionalCoursesHelp"
                                           :placeholder="$t('translation.additionalCourses')"
                                           name="additionalCourses"
                                           v-validate="'numeric'"
                                           :data-vv-as="$t('translation.additionalCourses')"
                                           v-model="userAdditionalCourses">
                                    <small id="additionalCoursesHelp" class="form-text text-danger" v-show="errors.has('additionalCourses')">
                                        {{ errors.first('additionalCourses') }}
                                    </small>
                                </div>

                                <div class="form-group">
                                    <label for="additionalCourses">{{ $t("translation.subjects") }}</label>
                                    <div class="row mb-2" v-for="(item, index) in subjects">
                                        <div class="col-6">
                                            <input type="text"
                                                   class="form-control"
                                                   :aria-describedby="`subjectName${index}Help`"
                                                   :placeholder="$t('translation.subjectName')"
                                                   :name="`subjectName${index}`"
                                                   v-validate="'required'"
                                                   v-model="item.name">
                                            <small :id="`subjectName${index}Help`" class="form-text text-danger" v-show="errors.has(`subjectName${index}`)">
                                                {{ errors.first(`subjectName${index}`) }}
                                            </small>
                                        </div>
                                        <div class="col-6">
                                            <input type="text"
                                                   class="form-control"
                                                   :aria-describedby="`subjectScore${index}Help`"
                                                   :placeholder="$t('translation.subjectScore')"
                                                   :name="`subjectScore${index}`"
                                                   v-validate="'required|numeric'"
                                                   v-model="item.score">
                                            <small :id="`subjectName${index}Help`" class="form-text text-danger" v-show="errors.has(`subjectScore${index}`)">
                                                {{ errors.first(`subjectScore${index}`) }}
                                            </small>
                                        </div>
                                    </div>
                                    <a @click="addSubject"
                                       href="javascript:"
                                       class="badge badge-primary pull-right mt-2">
                                        {{ $t("translation.addSubject") }}
                                    </a>
                                    <a @click="removeSubject"
                                       href="javascript:"
                                       class="badge badge-danger pull-right mt-2 mr-2">
                                        {{ $t("translation.removeSubject") }}
                                    </a>
                                </div>

                                <button @click="saveScore" type="button" class="btn button-accent mt-3">{{ $t("translation.saveResult") }}</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-3 col-sm-4">

                    <!--<p class="pull-right">-->
                        <!--{{ $t("translation.stage") }}:-->
                        <!--<span class="accent-color">-->
                            <!--<strong>{{ $t("translation.homeAdventures") }}</strong>-->
                        <!--</span>-->
                    <!--</p>-->

                    <img src="/images/calendar1.png" class="w-100 clearfix mb-3">

                    <p v-if="userScores && userScores.average_score_zno" class="pull-right mb-1">
                        {{ $t("translation.averageScoreSchool") }}:
                        <span class="accent-color">
                            <strong>{{ userScores.average_score_zno }}б</strong>
                        </span>
                    </p>
                    <p v-if="userScores && userScores.additional_courses" class="pull-right mb-1">
                        {{ $t("translation.additionalCourses") }}:
                        <span class="accent-color">
                            <strong>{{ userScores.additional_courses }}б</strong>
                        </span>
                    </p>
                    <p v-if="userScores && userScores.summary" class="pull-right mb-1">
                        {{ $t("translation.summaryScore") }}:
                        <span class="accent-color">
                            <strong>{{ userScores.summary }}б</strong>
                        </span>
                    </p>

                    <!--<p class="pull-right">-->
                        <!--{{ $t("translation.passingTime") }}:-->
                        <!--<span class="accent-color">-->
                            <!--<strong>00:32</strong>-->
                        <!--</span>-->
                    <!--</p>-->

                    <div @click="isShowPhone = true"
                         class="phone clearfix"
                         :class="{ 'phone__show': isShowPhone }">

                        <div v-if="!isShowMessage
                                && userFirstStage !== 5
                                && userFirstStage !== 7
                                && userFirstStage !== 9"
                             @click="isShowMessage = true"
                             :disabled="!isShowPhone"
                             class="message__new-message"></div>

                        <template v-else-if="isShowMessage || userFirstStage === 5 || userFirstStage === 7 || userFirstStage === 9">

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

                                        <a href="javascript:" @click="enterScore" class="link link__white pull-right mr-4">
                                            {{ $t("translation.enterScore") }}
                                        </a>
                                    </div>
                                </template>

                                <template v-if="userFirstStage === 10">
                                    <div class="message__angle"></div>
                                    <div class="message__quote">
                                        <p class="mb-0">{{ $t("translation.annCongrats") }}</p>

                                        <a v-if="userSelectedUniversity && userSelectedUniversity.site" :href="`http://${userSelectedUniversity.site}`" class="link link__white pull-right mr-4">
                                            {{ $t("translation.goToVuz") }}
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
                subjects: [
                    {
                        name: '',
                        score: '',
                    },
                    {
                        name: '',
                        score: '',
                    },
                    {
                        name: '',
                        score: '',
                    },
                ],
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
            async saveScore() {
                const valid = await this.$validator.validateAll();

                if (valid) {
                    const params = {
                        average_score_school: this.userAverageScoreSchool,
                        subjects_score: this.subjects,
                    };
                    if (this.userAdditionalCourses) {
                        params.additional_courses = this.userAdditionalCourses;
                    }
                    try {
                        await this.$store.dispatch('user/saveScore', params);
                        this.$toast.success({
                            title: this.$t('translation.success'),
                            message: this.$t('translation.scoreSaved'),
                        });
                        window.Cookies.set('first_stage', 10);
                        this.userFirstStage = 10;
                        this.$store.dispatch('user/getScores');
                    } catch (e) {
                        this.$toast.error({
                            title: this.$t('translation.error'),
                            message: this.$t('translation.error'),
                        });
                    }
                }
            },
            addSubject() {
                this.subjects.push({
                    name: '',
                    score: '',
                });
            },
            removeSubject() {
                if (this.subjects.length > 3) {
                    this.subjects.pop();
                }
            },
            endTest() {
                window.Cookies.set('first_stage', 8);
                this.userFirstStage = 8;
            },
            enterScore() {
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
            if (this.userFirstStage >= 4) {
                this.userBackground = 'background-blue';
                this.userSelectedUniversity = JSON.parse(window.Cookies.get('university'));
                this.userSelectedFaculty = JSON.parse(window.Cookies.get('faculty'));
                this.userSelectedMajor = JSON.parse(window.Cookies.get('major'));
            } else {
                this.userBackground = 'background-blue';
            }

            if (this.userFirstStage === 7) {
                this.$store.dispatch('user/getTests');
            }

            if (this.userFirstStage === 10) {
                this.$store.dispatch('user/getScores');
            }
        },
    };
</script>
