document.getElementById("compile_form").addEventListener("submit", event => {
    event.preventDefault();

    compile(document.getElementById("config_text").value);
});

function compile(config) {
    let layer_num, event_num, searching = true;

    while (config.length) {
        let current = config.slice(0, 1);
        if (searching) {
            switch (current) {
                case "L": 
                    break;
                case "E": 
                    break;
                case "U": 
                    break;
                case "L": 
                    break;
                case "L": 
                    break;
            }
        }
        else {

        }
        config = config.slice(1);

        console.log(Number(current));
    }
}

compile(`
L1
    1 Ua
    2 Ub
    3 Uc
    4 Ud
    5 Ue
    6 Uf
    7 Ug
    8 Uh
    9 Ui
    10 Uj
`);