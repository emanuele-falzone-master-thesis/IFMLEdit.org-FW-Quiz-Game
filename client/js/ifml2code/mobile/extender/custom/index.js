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
    'view-container-home': {
        'html': require('./c-view-container-home.html.ejs'),
    },
    'view-container-card': {
        'html': require('./c-view-container-card.html.ejs'),
    },
    'view-container-card-result': {
        'html': require('./c-view-container-card-result.html.ejs'),
    },
    'cssfile': {
        'css': require('./main.css.ejs'),
    },
}
