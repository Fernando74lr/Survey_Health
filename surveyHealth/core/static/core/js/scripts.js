let admin = () => location.replace(`${window.origin}/admin`);
let results = () => location.replace(`${window.origin}/results`);
let home = () => location.replace(window.origin.replace("results",""));

Survey
    .StylesManager
    .applyTheme("modern");

var json = {

    "logo": "https://upload.wikimedia.org/wikipedia/commons/e/e9/Escudobuappositivo2.png",
    "logoWidth": 250,
    "logoHeight": 250,
    "questions": [
        {
            "type": "html",
            "html": "<b style='font-size:30px'>Consent</b><br><p style='text-align:justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et necessitatibus unde nesciunt perferendis. Quas odio nam, impedit sit, error modi animi in placeat, velit distinctio odit neque totam nisi voluptatum! Assumenda asperiores totam, nemo itaque inventore delectus earum modi accusantium animi voluptatem placeat id officiis incidunt veniam dignissimos dolores corrupti esse! Quae, optio? Quos corrupti id nulla similique soluta fugit. Assumenda quisquam voluptatibus dignissimos necessitatibus at ipsa temporibus tenetur! Repudiandae labore ratione quia unde ducimus ipsum praesentium adipisci illum animi maxime? Odio neque incidunt, delectus nihil libero eaque aliquam magnam? Nesciunt exercitationem tempore perspiciatis consectetur distinctio repudiandae in? Eveniet rem, possimus sint, mollitia aliquam enim consequatur officia, praesentium rerum eos voluptate voluptates autem aspernatur eligendi quidem harum nisi et assumenda. Culpa ducimus nemo aliquid laborum sed labore veniam eos corrupti non impedit nihil eius aut, consequuntur odio omnis vero recusandae atque ex quidem quasi explicabo? Magni facere aspernatur temporibus excepturi. Earum vero ipsam impedit porro aut eveniet debitis laudantium laboriosam? Velit sint voluptates aut, laudantium eos illo? Perferendis harum repudiandae reiciendis, in magni saepe obcaecati hic mollitia? Qui, corporis beatae.</p>",
        }, {
            "type": "text",
            "name": "name",
            "title": "Your name",
            "isRequired": true,
            "placeHolder": "Write your complete name"
           },
           {
            "type": "text",
            "name": "email",
            "title": "Your email",
            "isRequired": true,
            "inputType": "email",
            "placeHolder": "example@example.com"
           },
           {
            "type": "boolean",
            "name": "consent",
            "title": "Do you accept consent?",
            "isRequired": true
           },
           {
            "type": "html",
            "name": "question3",
            "visibleIf": "{consent} = false",
            "html": "<b style='font-size:30px'>Thanks for your time. We aprecciate it.</b>"
           },
           {
            "type": "file",
            "name": "image",
            "visibleIf": "{consent} = true",
            "title": "Please upload your sign in a photo",
            "isRequired": true,
            "imageHeight": "300",
            "imageWidth": "250",
            "waitForUpload": true,
            "maxSize": 0
           }
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        console.log(JSON.stringify(result.data, null, 3));//.split(',')[1]
        let imageBase64 = result.data.image[0].content;
        let image = new Image();
        image.src = imageBase64;
        $('#form').removeClass('hidden');
        $('.user').html(`
            <input name='name' type='text' value='${result.data.name}'/>
            <input name='email' type='email' value='${result.data.email}'/>
            <input name='image' type='text' value='${imageBase64}'/>
        `);
    });

$("#surveyElement").Survey({model: survey});