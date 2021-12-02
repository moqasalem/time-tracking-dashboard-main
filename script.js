const Data = [
    {
        "title": "Work",
        "timeframes": {
            "daily": {
                "current": 5,
                "previous": 7
            },
            "weekly": {
                "current": 32,
                "previous": 36
            },
            "monthly": {
                "current": 103,
                "previous": 128
            }
        }
    },
    {
        "title": "Play",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 2
            },
            "weekly": {
                "current": 10,
                "previous": 8
            },
            "monthly": {
                "current": 23,
                "previous": 29
            }
        }
    },
    {
        "title": "Study",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 7
            },
            "monthly": {
                "current": 13,
                "previous": 19
            }
        }
    },
    {
        "title": "Exercise",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 5
            },
            "monthly": {
                "current": 11,
                "previous": 18
            }
        }
    },
    {
        "title": "Social",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 3
            },
            "weekly": {
                "current": 5,
                "previous": 10
            },
            "monthly": {
                "current": 21,
                "previous": 23
            }
        }
    },
    {
        "title": "Self Care",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 2,
                "previous": 2
            },
            "monthly": {
                "current": 7,
                "previous": 11
            }
        }
    }
]

// links
const Daily = document.getElementById('daily');
const Weekly = document.getElementById('weekly');
const Monthly = document.getElementById('monthly');

// get data containers to replace them later
const current_work = document.getElementById('current-work');
const previous_work = document.getElementById('previous-work');

const current_play = document.getElementById('current-play');
const previous_play = document.getElementById('previous-play');

const current_study = document.getElementById('current-study');
const previous_study = document.getElementById('previous-study');

const current_exercise = document.getElementById('current-exercise');
const previous_exercise = document.getElementById('previous-exercise');

const current_social = document.getElementById('current-social');
const previous_social = document.getElementById('previous-social');

const current_self_care = document.getElementById('current-self-care');
const previous_self_care = document.getElementById('previous-self-care');

const work = Data[0];
const play = Data[1];
const study = Data[2];
const exercise = Data[3];
const social = Data[4];
const self_care = Data[5];

// update data by click
Daily.addEventListener('click', function () {


    current_work.textContent = work.timeframes.daily.current;
    previous_work.textContent = work.timeframes.daily.previous;

    current_play.textContent = play.timeframes.daily.current;
    previous_play.textContent = play.timeframes.daily.previous;

    current_study.textContent = study.timeframes.daily.current;
    previous_study.textContent = study.timeframes.daily.previous;

    current_exercise.textContent = exercise.timeframes.daily.current;
    previous_exercise.textContent = exercise.timeframes.daily.previous;

    current_social.textContent = social.timeframes.daily.current;
    previous_social.textContent = social.timeframes.daily.previous;

    current_self_care.textContent = self_care.timeframes.daily.current;
    previous_self_care.textContent = self_care.timeframes.daily.previous;

})

Weekly.addEventListener('click', function () {


    current_work.textContent = work.timeframes.weekly.current;
    previous_work.textContent = work.timeframes.weekly.previous;

    current_play.textContent = play.timeframes.weekly.current;
    previous_play.textContent = play.timeframes.weekly.previous;

    current_study.textContent = study.timeframes.weekly.current;
    previous_study.textContent = study.timeframes.weekly.previous;

    current_exercise.textContent = exercise.timeframes.weekly.current;
    previous_exercise.textContent = exercise.timeframes.weekly.previous;

    current_social.textContent = social.timeframes.weekly.current;
    previous_social.textContent = social.timeframes.weekly.previous;

    current_self_care.textContent = self_care.timeframes.weekly.current;
    previous_self_care.textContent = self_care.timeframes.weekly.previous;

})

Monthly.addEventListener('click', function () {


    current_work.textContent = work.timeframes.monthly.current;
    previous_work.textContent = work.timeframes.monthly.previous;

    current_play.textContent = play.timeframes.monthly.current;
    previous_play.textContent = play.timeframes.monthly.previous;

    current_study.textContent = study.timeframes.monthly.current;
    previous_study.textContent = study.timeframes.monthly.previous;

    current_exercise.textContent = exercise.timeframes.monthly.current;
    previous_exercise.textContent = exercise.timeframes.monthly.previous;

    current_social.textContent = social.timeframes.monthly.current;
    previous_social.textContent = social.timeframes.monthly.previous;

    current_self_care.textContent = self_care.timeframes.monthly.current;
    previous_self_care.textContent = self_care.timeframes.monthly.previous;

})
