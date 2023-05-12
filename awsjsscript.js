function submitResponse() {
    event.preventDefault();

    var apigClient = apigClientFactory.newClient({
        apiKey: "GgVonluf8j5A9hkUT2tbY2n7q3i8Rj7E2GGEMfhS",
    });
    
    var user_response_text = document.getElementById("mood-text-box").value;
    console.log(user_response_text);

    var params = {
        
    };

    // console.log(params);

    var body = {
        "inputs": user_response_text
    };

    var additionalParams = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    apigClient.classifyPost(params, body, additionalParams).then(function (result) {
        var label = result.data.classification;
        console.log(label);

    }).catch(function (error) {
        console.log(error);
    });

}

function therapistOnLoad(){
    event.preventDefault();

    var apigClient = apigClientFactory.newClient({
        apiKey: "GgVonluf8j5A9hkUT2tbY2n7q3i8Rj7E2GGEMfhS",
    });

    var params = {
        
    };

    var body = {

    };

    var additionalParams = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    apigClient.therapistGet(params, body, additionalParams).then(function (result) {
        var output = result
        var body = output.data.body
        var acceptings = body.Acceptings
        var names = body.Names
        var emails = body.Emails
        var pronouns = body.Pronouns
        var images = body.Images

        const therapistContainers = document.querySelectorAll(".therapist-list .row div");

        therapistContainers.forEach((container, index) => {
            // const therapistEmailsElement = therapistContainers.querySelector(".t1p3");
            // const therapistAcceptingsElement = therapistContainers.querySelector(".t1p2");
            // const therapistPronounsElement = therapistContainers.querySelector(".t1p1");

            const therapistNameElement = container.querySelector("h2");
            const therapistImageElement = container.querySelector("img");
            const therapistDetailssElement = container.querySelector("p");
            therapistNameElement.textContent = names[index]
            // therapistPronounsElement.textContent = pronouns[index]
            therapistDetailssElement.innerHTML = pronouns[index] + "<br>" + "Accepting: " + acceptings[index] + "<br>" + emails[index];
            // therapistDetailssElement.textContent = pronouns[index] + "\n" + "Accepting : " + acceptings[index] + "\n" + "Email : " + emails[index]
            // therapistEmailsElement.textContent = "Email" + emails[0]
            therapistImageElement.setAttribute("src", images[index])
        });

        // const therapistContainers = document.querySelector(".therapistRow1");
        // const therapistEmailsElement = therapistContainers.querySelector(".t1p3");
        // const therapistAcceptingsElement = therapistContainers.querySelector(".t1p2");
        // const therapistPronounsElement = therapistContainers.querySelector(".t1p1");
        // const therapistNameElement = therapistContainers.querySelector("h2");
        // const therapistImageElement = therapistContainers.querySelector("img");
        // therapistNameElement.textContent = names[0]
        // therapistPronounsElement.textContent = pronouns[0]
        // therapistAcceptingsElement.textContent = "Accepting : " + acceptings[0]
        // therapistEmailsElement.textContent = "Email" + emails[0]
        // therapistImageElement.setAttribute("src", images[0])
        console.log(body)

    }).catch(function (error) {
        console.log(error);
    });
}