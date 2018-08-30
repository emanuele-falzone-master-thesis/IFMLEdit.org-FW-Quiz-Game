module.exports = {
    'config': {
        'xml': require('./config.xml.ejs')
    },
    'gulpfile': {
        'js': require('./gulpfile.js.ejs')
    },
    'index': {
        'js': require('./index.js.ejs'),
        'html': require('./index.html.ejs'),
    },
    'package': {
        'json': require('./package.json.ejs')
    },
    'action-read-card': {
        'js': require('./action-read-card.js.ejs')
    },
    'action-update-level-1': {
        'js': require('./action-update-level.js.ejs')
    },
    'action-update-level-2': {
        'js': require('./action-update-level.js.ejs')
    },
    'action-random-question-1': {
        'js': require('./action-random-question.js.ejs')
    },
    'action-random-question-2': {
        'js': require('./action-random-question.js.ejs')
    },
    'action-random-question-3': {
        'js': require('./action-random-question.js.ejs')
    },
    'action-load-settings': {
        'js': require('./action-load-settings.js.ejs')
    },
    'action-save-settings': {
        'js': require('./action-save-settings.js.ejs')
    },
    'answers': {
        'js': require('./repo-answers.js.ejs'),
        'json': require('./repo-answers.json.ejs'),
    },
    'questions': {
        'js': require('./repo-questions.js.ejs'),
        'json': require('./repo-questions.json.ejs'),
    },
    'list-card-answers': {
        'html': require('./c-list-card-answers.html.ejs'),
    },
    'list-question-answers': {
        'html': require('./c-list-card-answers.html.ejs'),
    },
    'main-application': {
        'html': require('./main-application.html.ejs'),
    },
    'system-event-back-0': {
        'js': require('./system-event-back.js.ejs'),
        'html': require('./system-event-back.html.ejs'),
    },
    'system-event-back-1': {
        'js': require('./system-event-back.js.ejs'),
        'html': require('./system-event-back.html.ejs'),
    },
    'system-event-back-2': {
        'js': require('./system-event-back.js.ejs'),
        'html': require('./system-event-back-d.html.ejs'),
    },
    'system-event-back-3': {
        'js': require('./system-event-back.js.ejs'),
        'html': require('./system-event-back-d.html.ejs'),
    },
    'system-event-back-4': {
        'js': require('./system-event-back.js.ejs'),
        'html': require('./system-event-back.html.ejs'),
    },
    'system-event-back-5': {
        'js': require('./system-event-back.js.ejs'),
        'html': require('./system-event-back-s.html.ejs'),
    },
    'system-event-back-6': {
        'js': require('./system-event-back.js.ejs'),
        'html': require('./system-event-back-s.html.ejs'),
    },
    'system-event-back-7': {
        'js': require('./system-event-back.js.ejs'),
        'html': require('./system-event-back.html.ejs'),
    },
    'system-event-qr-decode': {
        'js': require('./system-event-qr-decode.js.ejs'),
        'html': require('./system-event-back.html.ejs'),
    },
    'details-card-question': {
        'html': require('./c-details-card-question.html.ejs'),
    },
    'details-card-result': {
        'html': require('./c-details-card-result.html.ejs'),
    },
    'details-card-explanation': {
        'html': require('./c-details-card-explanation.html.ejs'),
    },
    'details-question': {
        'html': require('./c-details-card-question.html.ejs'),
    },
    'details-question-result': {
        'html': require('./c-details-card-result.html.ejs'),
    },
    'details-question-explanation': {
        'html': require('./c-details-card-explanation.html.ejs'),
    },
    'view-container-home': {
        'html': require('./c-view-container-home.html.ejs'),
    },
    'view-container-card': {
        'html': require('./c-view-container-card.html.ejs'),
    },
    'view-container-card-result': {
        'html': require('./c-view-container-card-result.html.ejs'),
    },
    'view-container-card-explanation': {
        'html': require('./c-view-container-card-explanation.html.ejs'),
    },
    'cssfile': {
        'css': require('./main.css.ejs'),
    },
    'view-container-question': {
        'html': require('./c-view-container-card.html.ejs'),
    },
    'view-container-question-result': {
        'html': require('./c-view-container-question-result.html.ejs'),
    },
    'view-container-question-explanation': {
        'html': require('./c-view-container-question-explanation.html.ejs'),
    },
    'form-settings': {
        'html': require('./c-form-settings.html.ejs'),
    },
    'i18': {
        'js': require('./i18.js.ejs'),
    },
}
