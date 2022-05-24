function deafGrandma() {
    let counter = 0
    let input = ""
    let response = ""

    console.log("HEY, KID!")

    while (counter <= 1) {
        input = window.prompt("Respond to grandma:", "hello")

        if (input ==="") {
            response = "WHAT?!"
        } else if (input !== input.toUpperCase()) {
            response = "SPEAK UP, KID!"
        } else if (input === "GOODBYE!") {
            counter++

            if (counter > 1) {
                response = "LATER, SKATER"
            } else {
                response = "LEAVING SO SOON?"
            }
        } else {
            response = "NO, NOT SINCE 1946!"
        }

        alert(response)
    }

}

deafGrandma();