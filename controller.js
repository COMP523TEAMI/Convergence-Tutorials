// docker run -p "8000:80" --name convergence convergencelabs/convergence-omnibus
const DOMAIN_URL = "http://localhost:8000/api/realtime/convergence/default";

let textArea = document.getElementById("textarea");
let realTimeModel;
