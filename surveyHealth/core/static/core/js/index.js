Survey
    .StylesManager
    .applyTheme("modern");

var json = {

    "logo": "https://upload.wikimedia.org/wikipedia/commons/e/e9/Escudobuappositivo2.png",
    "logoWidth": 250,
    "logoHeight": 250,
    "questions": [
        {
            type: "html",
            html: "<b style='font-size:30px'>Consent</b><br><p style='text-align:justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et necessitatibus unde nesciunt perferendis. Quas odio nam, impedit sit, error modi animi in placeat, velit distinctio odit neque totam nisi voluptatum! Assumenda asperiores totam, nemo itaque inventore delectus earum modi accusantium animi voluptatem placeat id officiis incidunt veniam dignissimos dolores corrupti esse! Quae, optio? Quos corrupti id nulla similique soluta fugit. Assumenda quisquam voluptatibus dignissimos necessitatibus at ipsa temporibus tenetur! Repudiandae labore ratione quia unde ducimus ipsum praesentium adipisci illum animi maxime? Odio neque incidunt, delectus nihil libero eaque aliquam magnam? Nesciunt exercitationem tempore perspiciatis consectetur distinctio repudiandae in? Eveniet rem, possimus sint, mollitia aliquam enim consequatur officia, praesentium rerum eos voluptate voluptates autem aspernatur eligendi quidem harum nisi et assumenda. Culpa ducimus nemo aliquid laborum sed labore veniam eos corrupti non impedit nihil eius aut, consequuntur odio omnis vero recusandae atque ex quidem quasi explicabo? Magni facere aspernatur temporibus excepturi. Earum vero ipsam impedit porro aut eveniet debitis laudantium laboriosam? Velit sint voluptates aut, laudantium eos illo? Perferendis harum repudiandae reiciendis, in magni saepe obcaecati hic mollitia? Qui, corporis beatae.</p>",
        }, {
            "name": "name",
            "type": "text",
            "inputType": "text",
            "title": "Name:",
            "placeHolder": "Your complete name",
            "isRequired": true
        }, {
            "name": "email",
            "type": "text",
            "inputType": "email",
            "title": "Your e-mail:",
            "placeHolder": "test_user@example.com",
            "isRequired": true,
            "validators": [
                {
                    "type": "email"
                }
            ]
        }, {
            type: "radiogroup",
            name: "consent",
            title: "Do you accept the consent?",
            isRequired: true,
            choices: [
                "Yes", "No"
            ],
            colCount: 0
        }, {
            type: "html",
            html: "<b style='font-size:30px'>Thanks for your time. We aprecciate it.</b>",
            visibleIf: "{consent}='No'"
        }, {
            type: "dropdown",
            name: "kids",
            title: "How many kids do you have",
            visibleIf: "{consent}='Yes'",
            isRequired: true,
            choices: [1, 2, 3, 4, 5]
        }
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        console.log(JSON.stringify(result.data, null, 3));
        $('#form').removeClass('hidden');
        $('.user').html(`
            <input name='name' type='text' value='${result.data.name}' readonly/>
            <input name='email' type='email' value='${result.data.email}' readonly/>
        `);
    });

$("#surveyElement").Survey({model: survey});