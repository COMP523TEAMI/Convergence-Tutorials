const DOMAIN_URL = "http://localhost:8000/api/realtime/convergence/default";

let textArea = document.getElementById("textarea");
let realTimeModel;

Convergence.connectAnonymously(DOMAIN_URL).then(domain => {
    return domain.models().openAutoCreate({
      collection: "presenTation",
      id: "textBox",
      data: {
          data: "Hello World!"
      },
      ephemeral: true
    });
  }
).then(model => {
  // The first entry point to start the program. Initialize the material here.
  realTimeModel = model;
  textArea.value = model.elementAt("data").value();
  textArea.oninput = function textAreaOnInputHandler(e) {
    realTimeModel.elementAt('data').value(e.target.value);
    };
  realTimeModel.elementAt("data").on(
    Convergence.RealTimeString.Events.VALUE, (e) => {
        textArea.value = e.element.value();
    }
    );
}).catch(error => 
  {
    console.error(error);
  }
);


